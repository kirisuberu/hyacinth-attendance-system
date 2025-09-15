import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const COL = 'user_documents';

export async function addUserDocument({ userId, name, key, contentType, size, category = 'Other', uploadedBy }) {
  const ref = await addDoc(collection(db, COL), {
    userId,
    name,
    key,
    contentType: contentType || 'application/octet-stream',
    size: size || 0,
    category,
    uploadedBy,
    uploadedAt: serverTimestamp()
  });
  return ref.id;
}

export async function listUserDocuments(userId) {
  const q = query(
    collection(db, COL),
    where('userId', '==', userId)
  );
  const snap = await getDocs(q);
  const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  // Sort client-side by uploadedAt desc
  items.sort((a, b) => {
    const ta = a.uploadedAt?.toMillis ? a.uploadedAt.toMillis() : (a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0);
    const tb = b.uploadedAt?.toMillis ? b.uploadedAt.toMillis() : (b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0);
    return tb - ta;
  });
  return items;
}

export async function deleteUserDocument(id) {
  await deleteDoc(doc(db, COL, id));
}
