const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const jwt = require('jsonwebtoken');
const fetch = global.fetch; // Node 20 has global fetch

const s3 = new S3Client({});
const BUCKET_NAME = process.env.BUCKET_NAME;
const ALLOWED_MIME_PREFIXES = (process.env.ALLOWED_MIME_PREFIXES || 'image/').split(',').map(s => s.trim());
const MAX_FILE_SIZE_MB = parseInt(process.env.MAX_FILE_SIZE_MB || '20', 10);

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

const sanitize = (name) => name.replace(/[^A-Za-z0-9._-]/g, '_');
const sanitizeUid = (uid) => String(uid || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 128);

// Simple cache for Google's Secure Token X509 certs per container reuse
let cachedCerts = { keys: {}, fetchedAt: 0 };
const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const CERTS_TTL_MS = 60 * 60 * 1000; // 1 hour

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
    // Preflight response
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
    const fileName = sanitize(body.fileName || 'upload.bin');
    const contentType = body.contentType || 'application/octet-stream';
    const prefix = body.prefix ? body.prefix.replace(/\.+/g, '') : '';
    const fileSize = typeof body.fileSize === 'number' ? body.fileSize : undefined;

    if (!ALLOWED_MIME_PREFIXES.some(p => contentType.startsWith(p))) {
      return err(origin, 400, `Disallowed content type: ${contentType}`);
    }
    if (fileSize && fileSize > MAX_FILE_SIZE_MB * 1024 * 1024) {
      return err(origin, 400, `File too large. Max ${MAX_FILE_SIZE_MB} MB`);
    }

    const now = new Date();
    const y = now.getUTCFullYear();
    const m = String(now.getUTCMonth() + 1).padStart(2, '0');
    const d = String(now.getUTCDate()).padStart(2, '0');
    const datePrefix = `${y}/${m}/${d}`;

    // Allow admins to upload to another user's namespace
    const role = (decoded.role || decoded.customClaims?.role || '').toString();
    const isAdminLike = ['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role);
    const targetUserId = isAdminLike && body.targetUserId ? sanitizeUid(body.targetUserId) : uid;

    const key = [targetUserId, prefix, datePrefix, `${Date.now()}-${fileName}`]
      .filter(Boolean)
      .join('/');

    const putCmd = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      ContentType: contentType
    });

    const expiresIn = 900; // 15 minutes
    const url = await getSignedUrl(s3, putCmd, { expiresIn });

    return ok(origin, { url, key, expiresIn });
  } catch (e) {
    console.error('presign-upload error', e);
    return err(origin, 500, 'Internal Server Error');
  }
};
