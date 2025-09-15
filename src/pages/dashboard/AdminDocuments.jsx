import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { addUserDocument, listUserDocuments, deleteUserDocument } from '../../services/documentsService';
import { presignUpload, uploadToS3 } from '../../services/awsMedia';
import { Users, CloudArrowUp, Trash, FileText } from 'phosphor-react';

function AdminDocuments() {
  const { user, userData } = useOutletContext() || {};
  const isSuperAdmin = userData?.role === 'super_admin' || userData?.role === 'superadmin' || userData?.role === 'super-admin';
  const isAdmin = userData?.role === 'admin';
  const canAccess = isSuperAdmin || isAdmin;

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [category, setCategory] = useState('Contract');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  const categories = useMemo(() => ['Contract', 'Training', 'Policy', 'Other'], []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const snap = await getDocs(collection(db, 'users'));
        const list = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(u => u.status !== 'inactive');
        setUsers(list);
        if (!selectedUserId && list.length) setSelectedUserId(list[0].id);
      } catch (e) {
        console.error('Failed to load users', e);
      }
    };
    if (canAccess) loadUsers();
  }, [canAccess]);

  const refreshList = async (uid) => {
    if (!uid) return;
    setLoadingList(true);
    try {
      const docs = await listUserDocuments(uid);
      setItems(docs);
    } catch (e) {
      console.error('Failed to list documents', e);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    refreshList(selectedUserId);
  }, [selectedUserId]);

  const handleFileChange = (e) => {
    setError('');
    const f = e.target.files?.[0];
    setFile(f || null);
  };

  const handleUpload = async () => {
    if (!file || !selectedUserId) return;
    setUploading(true);
    setError('');
    try {
      const { url, key } = await presignUpload({ file, prefix: 'admin-docs', targetUserId: selectedUserId });
      await uploadToS3(url, file, file.type || 'application/octet-stream');
      await addUserDocument({
        userId: selectedUserId,
        name: file.name,
        key,
        contentType: file.type,
        size: file.size,
        category,
        uploadedBy: user?.uid || 'admin'
      });
      setFile(null);
      await refreshList(selectedUserId);
    } catch (e) {
      setError(e.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm('Delete this document metadata? (File remains in S3)')) return;
    try {
      await deleteUserDocument(id);
      await refreshList(selectedUserId);
    } catch (e) {
      alert('Failed to delete document');
    }
  };

  if (!canAccess) {
    return (
      <PageContainer>
        <SectionTitle>Documents</SectionTitle>
        <ErrorText>You do not have permission to access this page.</ErrorText>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <SectionTitle>Documents</SectionTitle>

      <FormRow>
        <Label>
          <Users size={18} weight="bold" />
          <span>User</span>
        </Label>
        <Select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
          {users.map(u => (
            <option key={u.id} value={u.id}>{u.displayName || u.email || u.id}</option>
          ))}
        </Select>
      </FormRow>

      <FormRow>
        <Label>
          <FileText size={18} weight="bold" />
          <span>Category</span>
        </Label>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
      </FormRow>

      <FormRow>
        <Label>
          <CloudArrowUp size={18} weight="bold" />
          <span>Upload File</span>
        </Label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="file" onChange={handleFileChange} />
          <PrimaryButton disabled={!file || uploading} onClick={handleUpload}>
            {uploading ? 'Uploading…' : 'Upload'}
          </PrimaryButton>
        </div>
      </FormRow>

      {error && <ErrorText>{error}</ErrorText>}

      <SubTitle>Files for selected user</SubTitle>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Type</th>
            <th>Size</th>
            <th>Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loadingList ? (
            <tr><td colSpan="6">Loading…</td></tr>
          ) : items.length ? (
            items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.contentType}</td>
                <td>{formatSize(item.size)}</td>
                <td>{formatDate(item.uploadedAt)}</td>
                <td>
                  <DangerButton onClick={() => handleDelete(item.id)}>
                    <Trash size={16} />
                    Delete
                  </DangerButton>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="6">No documents.</td></tr>
          )}
        </tbody>
      </Table>
    </PageContainer>
  );
}

function formatSize(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(ts) {
  try {
    if (!ts) return '';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleString();
  } catch {
    return '';
  }
}

export default AdminDocuments;

// styled-components at the bottom
const PageContainer = styled.div`
  padding: 1rem;
`;

const SectionTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

const PrimaryButton = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const DangerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 6px;
  background: #ef4444;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const ErrorText = styled.div`
  color: #dc2626;
  font-size: 13px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td { border-bottom: 1px solid #eee; padding: 8px; text-align: left; }
  th { font-weight: 700; font-size: 13px; color: #374151; }
`;
