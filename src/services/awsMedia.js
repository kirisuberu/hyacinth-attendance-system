import { auth } from '../firebase';

const API_BASE = import.meta.env.VITE_AWS_API_BASE_URL?.replace(/\/$/, '') || '';

async function getToken() {
  const user = auth.currentUser;
  if (!user) throw new Error('Not authenticated');
  return user.getIdToken(/* forceRefresh */ true);
}

async function callApi(path, options = {}) {
  const token = await getToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    // We rely on Bearer tokens, not cookies; omit credentials to simplify CORS
    credentials: 'omit',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export async function presignUpload({ file, prefix = '', targetUserId }) {
  if (!API_BASE) throw new Error('VITE_AWS_API_BASE_URL is not set');
  const body = {
    fileName: file.name,
    contentType: file.type || 'application/octet-stream',
    fileSize: file.size,
    prefix,
    // Forward selected user for admin uploads so backend can write under that namespace
    ...(targetUserId ? { targetUserId } : {})
  };
  return callApi('/presign-upload', {
    method: 'POST',
    body: JSON.stringify(body)
  });
}

export async function uploadToS3(url, file, contentType) {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType
    },
    body: file
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`S3 upload failed ${res.status}: ${text}`);
  }
  return true;
}

export async function presignDownload(key) {
  if (!API_BASE) throw new Error('VITE_AWS_API_BASE_URL is not set');
  return callApi('/presign-download', {
    method: 'POST',
    body: JSON.stringify({ key })
  });
}

export async function getDownloadUrl(key) {
  const { url } = await presignDownload(key);
  return url;
}
