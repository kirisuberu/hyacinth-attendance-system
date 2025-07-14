import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { collection, getDocs, addDoc, query, orderBy, Timestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Plus, Calendar, Clock } from 'phosphor-react';
import { format } from 'date-fns';
import { useTimeFormat } from '../contexts/TimeFormatContext';

// Styled components
const ChangelogContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ChangelogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin: 0;
`;

const AddUpdateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #6e8efb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #5a7df9;
  }
`;

const UpdatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const UpdateCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const UpdateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const UpdateTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const UpdateMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UpdateDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const UpdateTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const UpdateContent = styled.div`
  color: #444;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: ${props => props.primary ? '#6e8efb' : 'white'};
  color: ${props => props.primary ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.primary ? '#5a7df9' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
`;

const Changelog = () => {
  const [updates, setUpdates] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { use24HourFormat } = useTimeFormat();
  const [userData, setUserData] = useState(null);
  
  // Fetch user data and updates
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data directly from Firestore
        if (currentUser?.uid) {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserData(userData);
            console.log('User data loaded:', userData);
          }
        }
        
        // Fetch changelog updates
        const updatesQuery = query(
          collection(db, 'changelog'),
          orderBy('timestamp', 'desc')
        );
        
        const querySnapshot = await getDocs(updatesQuery);
        const updatesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setUpdates(updatesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load updates');
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);
  
  const handleAddUpdate = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Verify user is a super admin before proceeding
    if (!isSuperAdmin) {
      toast.error('Only Super Admins can post updates');
      return;
    }
    
    setSubmitting(true);
    
    try {
      const newUpdate = {
        title: title.trim(),
        content: content.trim(),
        timestamp: Timestamp.now(),
        authorId: currentUser.uid,
        authorName: currentUser.displayName || 'Super Admin'
      };
      
      await addDoc(collection(db, 'changelog'), newUpdate);
      
      // Add the new update to the state
      setUpdates([
        {
          id: 'temp-id', // This will be replaced when we refresh
          ...newUpdate,
          timestamp: { toDate: () => new Date() } // Mock the Timestamp for immediate display
        },
        ...updates
      ]);
      
      // Close modal and reset form
      setTitle('');
      setContent('');
      setShowAddModal(false);
      toast.success('Update posted successfully');
      
      // Refresh the updates to get the proper ID
      const updatesQuery = query(
        collection(db, 'changelog'),
        orderBy('timestamp', 'desc')
      );
      
      const querySnapshot = await getDocs(updatesQuery);
      const updatesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setUpdates(updatesData);
    } catch (error) {
      console.error('Error adding update:', error);
      toast.error('Failed to post update');
    } finally {
      setSubmitting(false);
    }
  };
  
  const formatDate = (date) => {
    return format(date, 'MMM dd, yyyy');
  };
  
  const formatTime = (date) => {
    return format(date, use24HourFormat ? 'HH:mm' : 'h:mm a');
  };
  
  const isSuperAdmin = userData?.role === 'superadmin';
  
  // Debug log
  useEffect(() => {
    console.log('Current user role:', userData?.role);
    console.log('Is super admin:', isSuperAdmin);
  }, [userData, isSuperAdmin]);
  
  return (
    <DashboardLayout 
      user={currentUser}
      activeTab="changelog"
      userData={userData}
      setUserData={setUserData}
    >
      <ChangelogContainer>
        <ChangelogHeader>
          <Title>Application Updates</Title>
          {isSuperAdmin && (
            <AddUpdateButton onClick={() => setShowAddModal(true)}>
              <Plus size={18} />
              Post Update
            </AddUpdateButton>
          )}
        </ChangelogHeader>
        
        {loading ? (
          <div>Loading updates...</div>
        ) : updates.length > 0 ? (
          <UpdatesList>
            {updates.map(update => (
              <UpdateCard key={update.id}>
                <UpdateHeader>
                  <UpdateTitle>{update.title}</UpdateTitle>
                  <UpdateMeta>
                    <UpdateDate>
                      <Calendar size={14} />
                      {formatDate(update.timestamp.toDate())}
                    </UpdateDate>
                    <UpdateTime>
                      <Clock size={14} />
                      {formatTime(update.timestamp.toDate())}
                    </UpdateTime>
                  </UpdateMeta>
                </UpdateHeader>
                <UpdateContent>{update.content}</UpdateContent>
              </UpdateCard>
            ))}
          </UpdatesList>
        ) : (
          <EmptyState>
            <p>No updates have been posted yet.</p>
            {isSuperAdmin && (
              <p>As a Super Admin, you can post the first update!</p>
            )}
          </EmptyState>
        )}
      </ChangelogContainer>
      
      {/* Add Update Modal */}
      {showAddModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Post Application Update</h3>
              <CloseButton onClick={() => setShowAddModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleAddUpdate}>
                <FormGroup>
                  <Label>Update Title</Label>
                  <Input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., New Features Released"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Update Content</Label>
                  <TextArea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Describe the updates in detail..."
                    required
                  />
                </FormGroup>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowAddModal(false)}>Cancel</Button>
              <Button 
                primary 
                onClick={handleAddUpdate}
                disabled={submitting || !title.trim() || !content.trim()}
              >
                {submitting ? 'Posting...' : 'Post Update'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardLayout>
  );
};

export default Changelog;
