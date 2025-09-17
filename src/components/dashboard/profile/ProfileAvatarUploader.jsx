import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Camera, PencilSimple } from 'phosphor-react';
import { toast } from 'react-toastify';
import { presignUpload, uploadToS3, getDownloadUrl } from '../../../services/awsMedia';
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Avatar } from '../ProfileStyles';

/**
 * ProfileAvatarUploader
 * - Shows the current avatar image (from S3 via presigned download URL, or Firebase Auth photoURL)
 * - Allows uploading a new image to AWS S3 via presigned URL
 * - Persists the S3 object key to Firestore at users/{uid}.profileImageKey
 *
 * Props:
 * - user: Firebase Auth user
 * - userData: Firestore user doc data
 * - setUserData: setter from Outlet context to optimistically update local state
 */
const ProfileAvatarUploader = ({ user, userData, setUserData }) => {
  const inputRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const userId = user?.uid || userData?.id;

  useEffect(() => {
    let cancelled = false;

    const loadAvatar = async () => {
      try {
        // If we have an S3 key, presign a download
        if (userData?.profileImageKey) {
          setLoading(true);
          const url = await getDownloadUrl(userData.profileImageKey);
          if (!cancelled) setAvatarUrl(url);
        } else if (userData?.photoURL || user?.photoURL) {
          // Fall back to Firebase photoURL if present
          setAvatarUrl(userData?.photoURL || user?.photoURL);
        } else {
          setAvatarUrl('');
        }
      } catch (err) {
        console.error('Failed to load avatar:', err);
        // Fail silently but clear url
        if (!cancelled) setAvatarUrl('');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadAvatar();
    return () => { cancelled = true; };
  }, [userData?.profileImageKey, userData?.photoURL, user?.photoURL]);

  const onPickFile = () => {
    inputRef.current?.click();
  };

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Basic validation: images only, up to ~5MB
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file.');
      return;
    }
    const maxBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxBytes) {
      toast.error('Image too large. Please upload an image up to 5MB.');
      return;
    }

    try {
      setUploading(true);
      // Use a stable prefix; backend will also scope to the caller's UID
      const { url, key } = await presignUpload({ file, prefix: 'profile/avatar' });
      await uploadToS3(url, file, file.type || 'application/octet-stream');

      if (!userId) {
        toast.error('Unable to determine your user ID.');
        return;
      }

      // Save key in Firestore
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { profileImageKey: key });

      // Optimistic UI update and fresh presigned URL for preview
      if (typeof setUserData === 'function') {
        setUserData(prev => ({ ...(prev || {}), profileImageKey: key }));
      }
      const previewUrl = await getDownloadUrl(key);
      setAvatarUrl(previewUrl);

      toast.success('Profile photo updated!');
    } catch (err) {
      console.error('Avatar upload failed:', err);
      toast.error(err?.message || 'Failed to upload profile photo.');
    } finally {
      setUploading(false);
      // Reset input value so the same file can be reselected if needed
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <AvatarWrapper>
      <Avatar aria-busy={loading ? 'true' : 'false'}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Profile avatar" />
        ) : (
          <FallbackCircle>
            <Camera size={32} weight="fill" />
          </FallbackCircle>
        )}
      </Avatar>

      <EditAvatarButton onClick={onPickFile} disabled={true} title="Profile photo upload temporarily disabled">
        <PencilSimple size={16} />
        <span>Change</span>
      </EditAvatarButton>

      <HiddenFileInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
    </AvatarWrapper>
  );
};

export default ProfileAvatarUploader;

// styled-components at bottom per project rules
const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const EditAvatarButton = styled.button`
  position: absolute;
  right: -8px;
  bottom: -8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid #ffe1e1;
  border-radius: 999px;
  background: linear-gradient(to bottom, #fff6f6, #ffe1e1);
  color: #800000;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(128,0,0,0.1);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f5f5f5;
    color: #999;
    border-color: #ddd;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FallbackCircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #800000;
`;
