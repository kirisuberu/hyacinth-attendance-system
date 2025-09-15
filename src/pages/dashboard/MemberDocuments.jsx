import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { listUserDocuments } from '../../services/documentsService';
import { getDownloadUrl } from '../../services/awsMedia';
import { FileText, DownloadSimple } from 'phosphor-react';

function MemberDocuments() {
  const { user } = useOutletContext() || {};
  const uid = user?.uid;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const refresh = async () => {
    if (!uid) return;
    setLoading(true);
    setError('');
    try {
      const docs = await listUserDocuments(uid);
      setItems(docs);
    } catch (e) {
      setError('Failed to load documents');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [uid]);

  const handleDownload = async (key) => {
    try {
      const url = await getDownloadUrl(key);
      window.open(url, '_blank');
    } catch (e) {
      alert('Failed to get download URL');
    }
  };

  return (
    <PageContainer>
      <SectionTitle>My Documents</SectionTitle>
      {error && <ErrorText>{error}</ErrorText>}

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
          {loading ? (
            <tr><td colSpan="6">Loading…</td></tr>
          ) : items.length ? (
            items.map(item => (
              <tr key={item.id}>
                <td><FileText size={16} style={{ marginRight: 6 }} />{item.name}</td>
                <td>{item.category}</td>
                <td>{item.contentType}</td>
                <td>{formatSize(item.size)}</td>
                <td>{formatDate(item.uploadedAt)}</td>
                <td>
                  <PrimaryButton onClick={() => handleDownload(item.key)}>
                    <DownloadSimple size={16} /> Download
                  </PrimaryButton>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="6">No documents yet.</td></tr>
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

export default MemberDocuments;

// styled-components at the bottom
const PageContainer = styled.div`
  padding: 1rem;
`;

const SectionTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
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

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
