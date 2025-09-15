import React, { useState } from 'react';
import styled from 'styled-components';
import { CloudArrowUp } from 'phosphor-react';
import { presignUpload, uploadToS3 } from '../../services/awsMedia';

const FileUploader = ({ label = 'Upload file', accept = 'image/*,application/pdf', prefix = '', onUploaded }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedKey, setUploadedKey] = useState('');

  const handleFileChange = (e) => {
    setError('');
    const f = e.target.files?.[0];
    setFile(f || null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const { url, key } = await presignUpload({ file, prefix });
      await uploadToS3(url, file, file.type || 'application/octet-stream');
      setUploadedKey(key);
      if (onUploaded) onUploaded({ key, file });
    } catch (e) {
      setError(e.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploaderContainer>
      <Label>
        <CloudArrowUp size={20} weight="bold" />
        <span>{label}</span>
      </Label>
      <ControlsRow>
        <input type="file" accept={accept} onChange={handleFileChange} />
        <UploadButton onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? 'Uploading…' : 'Upload'}
        </UploadButton>
      </ControlsRow>
      {uploadedKey && (
        <Meta>Uploaded key: <code>{uploadedKey}</code></Meta>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </UploaderContainer>
  );
};

export default FileUploader;

// styled-components (kept at bottom as per project rules)
const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type='file'] {
    font-size: 14px;
  }
`;

const UploadButton = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Meta = styled.div`
  font-size: 12px;
  color: #374151;
`;

const ErrorText = styled.div`
  color: #dc2626;
  font-size: 13px;
  font-weight: 600;
`;
