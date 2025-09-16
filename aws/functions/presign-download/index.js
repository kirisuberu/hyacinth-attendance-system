const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const jwt = require('jsonwebtoken');
const fetch = global.fetch;

const s3 = new S3Client({});
const BUCKET_NAME = process.env.BUCKET_NAME;

const ok = (origin, body) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'authorization,content-type,x-requested-with',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Vary': 'Origin'
  },
  body: JSON.stringify(body)
});

const err = (origin, code, message) => ({
  statusCode: code,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'authorization,content-type,x-requested-with',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Vary': 'Origin'
  },
  body: JSON.stringify({ error: message })
});

let cachedCerts = { keys: {}, fetchedAt: 0 };
const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const CERTS_TTL_MS = 60 * 60 * 1000;

async function getGoogleCertForKid(kid) {
  const now = Date.now();
  if (!cachedCerts.fetchedAt || now - cachedCerts.fetchedAt > CERTS_TTL_MS) {
    const res = await fetch(CERTS_URL);
    if (!res.ok) throw new Error(`Failed to fetch Google certs: ${res.status}`);
    const data = await res.json();
    cachedCerts = { keys: data, fetchedAt: now };
  }
  const pem = cachedCerts.keys[kid];
  if (!pem) throw new Error('Unknown key id (kid)');
  return pem;
}

async function verifyFirebaseToken(idToken, projectId) {
  const decodedHeader = jwt.decode(idToken, { complete: true })?.header;
  if (!decodedHeader || !decodedHeader.kid) throw new Error('Invalid token header');
  const pem = await getGoogleCertForKid(decodedHeader.kid);
  const verified = jwt.verify(idToken, pem, {
    algorithms: ['RS256'],
    issuer: `https://securetoken.google.com/${projectId}`,
    audience: projectId
  });
  return verified;
}

exports.handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || '*';
  if (event.requestContext?.http?.method === 'OPTIONS') {
    // Preflight response aligned with upload lambda
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'authorization,content-type,x-requested-with',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Vary': 'Origin'
      }
    };
  }

  try {
    const authHeader = event.headers?.authorization || event.headers?.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return err(origin, 401, 'Missing Authorization header');
    }
    const idToken = authHeader.split(' ')[1];
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const decoded = await verifyFirebaseToken(idToken, projectId);
    const uid = decoded.uid;

    const body = JSON.parse(event.body || '{}');
    const key = String(body.key || '').replace(/\.\.+/g, '');
    if (!key) return err(origin, 400, 'Missing key');

    // Security: ensure the requested object lives under the caller's UID prefix
    if (!key.startsWith(`${uid}/`)) {
      return err(origin, 403, 'Forbidden access to object');
    }

    const getCmd = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key
    });

    const expiresIn = 900; // 15 minutes
    const url = await getSignedUrl(s3, getCmd, { expiresIn });

    return ok(origin, { url, key, expiresIn });
  } catch (e) {
    console.error('presign-download error', e);
    return err(origin, 500, 'Internal Server Error');
  }
};
