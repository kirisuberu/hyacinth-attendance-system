import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { doc, setDoc, updateDoc, deleteDoc, collection, onSnapshot, serverTimestamp, query, orderBy, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Bank, Pencil, Trash, X, Check, Plus } from 'phosphor-react';
import styled from 'styled-components';


function CompanyManagementView({ isSuperAdmin, isAdmin, canEdit = false }) {
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companyData, setCompanyData] = useState({
    name: '',
    code: '',
    description: '',
    color: '#ffa000',
    address: '',
    website: '',
    phone: ''
  });
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [companyMembers, setCompanyMembers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [loadingAllUsers, setLoadingAllUsers] = useState(false);
  const [membersSearchTerm, setMembersSearchTerm] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch companies from Firestore
  useEffect(() => {
    setupCompaniesListener();
  }, []);

  const setupCompaniesListener = () => {
    setLoading(true);
    try {
      const q = query(collection(db, "companies"), orderBy("name"));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const companiesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setCompanies(companiesData);
        setLoading(false);
      });
      
      return unsubscribe;
    } catch (error) {
      console.error("Error setting up companies listener:", error);
      setLoading(false);
      toast.error("Failed to load companies data");
      return () => {};
    }
  };

  // Members management
  const fetchCompanyMembers = async (companyId) => {
    try {
      setLoadingMembers(true);
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('companies', 'array-contains', companyId));
      const querySnapshot = await getDocs(q);
      const members = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setCompanyMembers(members);
      setLoadingMembers(false);
    } catch (error) {
      console.error('Error fetching company members:', error);
      toast.error('Failed to load company members');
      setLoadingMembers(false);
      setCompanyMembers([]);
    }
  };

  const fetchAllUsers = async () => {
    try {
      setLoadingAllUsers(true);
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      const users = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setAllUsers(users);
      setLoadingAllUsers(false);
    } catch (error) {
      console.error('Error loading users:', error);
      toast.error('Failed to load users');
      setLoadingAllUsers(false);
      setAllUsers([]);
    }
  };

  const handleAddUserToCompany = async (userId) => {
    if (!selectedCompany || isProcessing) return;
    try {
      setIsProcessing(true);
      const userRef = doc(db, 'users', userId);
      const user = allUsers.find(u => u.id === userId);
      if (!user) {
        toast.error('User not found');
        setIsProcessing(false);
        return;
      }
      const userCompanies = user.companies || (user.company ? [user.company] : []);
      if (userCompanies.includes(selectedCompany.id)) {
        toast.info('User is already in this company');
        setIsProcessing(false);
        return;
      }
      const updatedCompanies = [...userCompanies, selectedCompany.id];
      await updateDoc(userRef, {
        companies: updatedCompanies,
        updatedAt: serverTimestamp()
      });
      await fetchCompanyMembers(selectedCompany.id);
      toast.success(`User added to ${selectedCompany.name}`);
      setIsProcessing(false);
    } catch (error) {
      console.error('Error adding user to company:', error);
      toast.error('Failed to add user to company');
      setIsProcessing(false);
    }
  };

  const handleRemoveUserFromCompany = async (userId) => {
    if (!selectedCompany || isProcessing) return;
    try {
      setIsProcessing(true);
      const userRef = doc(db, 'users', userId);
      const user = companyMembers.find(m => m.id === userId);
      if (!user) {
        toast.error('User not found');
        setIsProcessing(false);
        return;
      }
      const userCompanies = user.companies || (user.company ? [user.company] : []);
      const updatedCompanies = (userCompanies || []).filter(id => id !== selectedCompany.id);
      await updateDoc(userRef, {
        companies: updatedCompanies,
        updatedAt: serverTimestamp()
      });
      await fetchCompanyMembers(selectedCompany.id);
      toast.success(`User removed from ${selectedCompany.name}`);
      setIsProcessing(false);
    } catch (error) {
      console.error('Error removing user from company:', error);
      toast.error('Failed to remove user from company');
      setIsProcessing(false);
    }
  };

  const handleAddCompany = async () => {
    try {
      const companyRef = doc(collection(db, "companies"));
      
      await setDoc(companyRef, {
        name: companyData.name,
        code: companyData.code,
        description: companyData.description,
        color: companyData.color,
        address: companyData.address || '',
        website: companyData.website || '',
        phone: companyData.phone || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      toast.success("Company added successfully");
      setShowAddModal(false);
      resetCompanyForm();
    } catch (error) {
      console.error("Error adding company:", error);
      toast.error("Failed to add company");
    }
  };

  const handleEditCompany = async () => {
    try {
      if (!selectedCompany) return;
      
      const companyRef = doc(db, "companies", selectedCompany.id);
      
      await updateDoc(companyRef, {
        name: companyData.name,
        code: companyData.code,
        description: companyData.description,
        color: companyData.color,
        address: companyData.address || '',
        website: companyData.website || '',
        phone: companyData.phone || '',
        updatedAt: serverTimestamp()
      });
      
      toast.success("Company updated successfully");
      setShowEditModal(false);
      setSelectedCompany(null);
    } catch (error) {
      console.error("Error updating company:", error);
      toast.error("Failed to update company");
    }
  };

  const handleDeleteCompany = async () => {
    try {
      if (!selectedCompany) return;
      
      const companyRef = doc(db, "companies", selectedCompany.id);
      await deleteDoc(companyRef);
      
      toast.success("Company deleted successfully");
      setShowDeleteModal(false);
      setSelectedCompany(null);
    } catch (error) {
      console.error("Error deleting company:", error);
      toast.error("Failed to delete company");
    }
  };

  const handleEditClick = (company) => {
    setSelectedCompany(company);
    setCompanyData({
      name: company.name,
      code: company.code,
      description: company.description || '',
      color: company.color || '#ffa000',
      address: company.address || '',
      website: company.website || '',
      phone: company.phone || ''
    });
    setShowEditModal(true);
  };

  const handleDeleteClick = (company) => {
    setSelectedCompany(company);
    setShowDeleteModal(true);
  };

  const resetCompanyForm = () => {
    setCompanyData({
      name: '',
      code: '',
      description: '',
      color: '#ffa000',
      address: '',
      website: '',
      phone: ''
    });
  };

  const filteredCompanies = searchQuery.trim() === '' 
    ? companies 
    : companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (company.description && company.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  // Derived lists for Members Modal
  const normalizedMembersSearch = membersSearchTerm.trim().toLowerCase();
  const filteredCompanyMembers = companyMembers.filter(u => {
    const name = (u.name || '').toLowerCase();
    const email = (u.email || '').toLowerCase();
    const position = (u.position || '').toLowerCase();
    if (!normalizedMembersSearch) return true;
    return name.includes(normalizedMembersSearch) || email.includes(normalizedMembersSearch) || position.includes(normalizedMembersSearch);
  });
  const memberIdSet = new Set(companyMembers.map(u => u.id));
  const usersNotInCompany = allUsers.filter(u => !memberIdSet.has(u.id));
  const filteredUserCandidates = usersNotInCompany.filter(u => {
    const name = (u.name || '').toLowerCase();
    const email = (u.email || '').toLowerCase();
    const position = (u.position || '').toLowerCase();
    if (!normalizedMembersSearch) return true;
    return name.includes(normalizedMembersSearch) || email.includes(normalizedMembersSearch) || position.includes(normalizedMembersSearch);
  });

  return (
    <Container>
      <Title>
        <Bank size={24} />
        Company Management
      </Title>
      
      {(isSuperAdmin || isAdmin || canEdit) && (
        <TopControls>
          <SearchBar
            type="text"
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <AddCompanyButton onClick={() => setShowAddModal(true)}>
            <Plus size={18} />
            Add New Company
          </AddCompanyButton>
        </TopControls>
      )}
      
      {loading ? (
        <EmptyState>Loading companies...</EmptyState>
      ) : filteredCompanies.length === 0 ? (
        <EmptyState>
          {searchQuery.trim() !== '' 
            ? 'No companies found matching your search.' 
            : 'No companies found. Add a new company to get started.'}
        </EmptyState>
      ) : (
        <CompaniesGrid>
          {filteredCompanies.map(company => (
            <CompanyCard key={company.id} color={company.color || '#ffa000'}>
              <CompanyName>{company.name}</CompanyName>
              {company.description && (
                <CompanyDescription>{company.description}</CompanyDescription>
              )}
              <CompanyMeta>
                <CompanyCode>{company.code}</CompanyCode>
                
                {(isSuperAdmin || isAdmin || canEdit) && (
                  <CompanyActions>
                    <ActionButton
                      onClick={() => {
                        setSelectedCompany(company);
                        setShowMembersModal(true);
                        fetchCompanyMembers(company.id);
                        fetchAllUsers();
                      }}
                      color="#ffa000"
                      title="See details"
                    >
                      <Users size={18} />
                    </ActionButton>
                    <ActionButton onClick={() => handleEditClick(company)} color="#2196f3">
                      <Pencil size={18} />
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteClick(company)} color="#f44336">
                      <Trash size={18} />
                    </ActionButton>
                  </CompanyActions>
                )}
              </CompanyMeta>
            </CompanyCard>
          ))}
        </CompaniesGrid>
      )}
      
      {/* Add Company Modal */}
      {showAddModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Plus size={24} />
              Add New Company
            </ModalTitle>
            
            <FormGroup>
              <Label htmlFor="addCompanyName">Company Name*</Label>
              <Input
                id="addCompanyName"
                type="text"
                value={companyData.name}
                onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                autoFocus
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="addCompanyCode">Company Code*</Label>
              <Input
                id="addCompanyCode"
                type="text"
                value={companyData.code}
                onChange={(e) => setCompanyData({...companyData, code: e.target.value})}
                maxLength={10}
              />
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Short code to identify the company (max 10 characters)
              </div>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="addCompanyDescription">Description</Label>
              <TextArea
                id="addCompanyDescription"
                value={companyData.description}
                onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="addCompanyAddress">Address</Label>
              <TextArea
                id="addCompanyAddress"
                value={companyData.address}
                onChange={(e) => setCompanyData({...companyData, address: e.target.value})}
              />
            </FormGroup>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label htmlFor="addCompanyWebsite">Website</Label>
                <Input
                  id="addCompanyWebsite"
                  type="text"
                  value={companyData.website}
                  onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                  placeholder="https://"
                />
              </FormGroup>
              
              <FormGroup style={{ flex: 1 }}>
                <Label htmlFor="addCompanyPhone">Phone</Label>
                <Input
                  id="addCompanyPhone"
                  type="text"
                  value={companyData.phone}
                  onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                />
              </FormGroup>
            </div>
            
            <FormGroup>
              <Label htmlFor="addCompanyColor">Company Color</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: companyData.color,
                    border: '1px solid #ddd'
                  }}
                />
                <Input
                  id="addCompanyColor"
                  type="text"
                  value={companyData.color}
                  onChange={(e) => setCompanyData({...companyData, color: e.target.value})}
                  placeholder="#RRGGBB"
                  style={{ width: '120px' }}
                />
                <Input
                  type="color"
                  value={companyData.color}
                  onChange={(e) => setCompanyData({...companyData, color: e.target.value})}
                  style={{ width: '40px', padding: '0', height: '36px' }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Choose a color to represent this company
              </div>
            </FormGroup>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowAddModal(false);
                resetCompanyForm();
              }}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleAddCompany}
                disabled={!companyData.name.trim() || !companyData.code.trim()}
              >
                <Check size={20} />
                Add Company
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Edit Company Modal */}
      {showEditModal && selectedCompany && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Pencil size={24} />
              Edit Company
            </ModalTitle>
            
            <FormGroup>
              <Label htmlFor="editCompanyName">Company Name*</Label>
              <Input
                id="editCompanyName"
                type="text"
                value={companyData.name}
                onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                autoFocus
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editCompanyCode">Company Code*</Label>
              <Input
                id="editCompanyCode"
                type="text"
                value={companyData.code}
                onChange={(e) => setCompanyData({...companyData, code: e.target.value})}
                maxLength={10}
              />
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Short code to identify the company (max 10 characters)
              </div>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editCompanyDescription">Description</Label>
              <TextArea
                id="editCompanyDescription"
                value={companyData.description}
                onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editCompanyAddress">Address</Label>
              <TextArea
                id="editCompanyAddress"
                value={companyData.address}
                onChange={(e) => setCompanyData({...companyData, address: e.target.value})}
              />
            </FormGroup>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label htmlFor="editCompanyWebsite">Website</Label>
                <Input
                  id="editCompanyWebsite"
                  type="text"
                  value={companyData.website}
                  onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                  placeholder="https://"
                />
              </FormGroup>
              
              <FormGroup style={{ flex: 1 }}>
                <Label htmlFor="editCompanyPhone">Phone</Label>
                <Input
                  id="editCompanyPhone"
                  type="text"
                  value={companyData.phone}
                  onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                />
              </FormGroup>
            </div>
            
            <FormGroup>
              <Label htmlFor="editCompanyColor">Company Color</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: companyData.color,
                    border: '1px solid #ddd'
                  }}
                />
                <Input
                  id="editCompanyColor"
                  type="text"
                  value={companyData.color}
                  onChange={(e) => setCompanyData({...companyData, color: e.target.value})}
                  placeholder="#RRGGBB"
                  style={{ width: '120px' }}
                />
                <Input
                  type="color"
                  value={companyData.color}
                  onChange={(e) => setCompanyData({...companyData, color: e.target.value})}
                  style={{ width: '40px', padding: '0', height: '36px' }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Choose a color to represent this company
              </div>
            </FormGroup>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowEditModal(false);
                setSelectedCompany(null);
              }}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleEditCompany}
                disabled={!companyData.name.trim() || !companyData.code.trim()}
              >
                Save Changes
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedCompany && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Trash size={24} />
              Delete Company
            </ModalTitle>
            
            <p>
              Are you sure you want to delete the company "{selectedCompany.name}"?
            </p>
            <p style={{ color: '#f44336' }}>
              This action cannot be undone.
            </p>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowDeleteModal(false);
                setSelectedCompany(null);
              }}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleDeleteCompany}
                style={{ backgroundColor: '#f44336' }}
              >
                Delete Company
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Members Modal */}
      {showMembersModal && selectedCompany && (
        <ModalOverlay>
          <ModalContent wide>
            <ModalTitle>
              <Users size={24} />
              {selectedCompany.name} Members
            </ModalTitle>
            
            <MembersSearch
              type="text"
              placeholder="Search by name, email, or position..."
              value={membersSearchTerm}
              onChange={(e) => setMembersSearchTerm(e.target.value)}
            />
            
            <MembersLayout>
              <MembersPane>
                <PaneHeader>
                  <PaneTitle>Current Members</PaneTitle>
                  <SmallNote>{companyMembers.length} total</SmallNote>
                </PaneHeader>
                {loadingMembers ? (
                  <EmptyState>Loading members...</EmptyState>
                ) : filteredCompanyMembers.length === 0 ? (
                  <EmptyState>No members found.</EmptyState>
                ) : (
                  <MembersList>
                    {filteredCompanyMembers.map(user => (
                      <MemberItem key={user.id}>
                        <MemberInfo>
                          <MemberName>{user.name || 'Unnamed User'}</MemberName>
                          <MemberEmail>{user.email || 'No email'}</MemberEmail>
                        </MemberInfo>
                        {(isSuperAdmin || isAdmin || canEdit) && (
                          <ActionButton
                            onClick={() => handleRemoveUserFromCompany(user.id)}
                            color="#f44336"
                            title="Remove from company"
                            disabled={isProcessing}
                          >
                            <X size={16} />
                          </ActionButton>
                        )}
                      </MemberItem>
                    ))}
                  </MembersList>
                )}
              </MembersPane>
              
              <MembersPane>
                <PaneHeader>
                  <PaneTitle>Add Members</PaneTitle>
                  <SmallNote>{filteredUserCandidates.length} available</SmallNote>
                </PaneHeader>
                {loadingAllUsers ? (
                  <EmptyState>Loading users...</EmptyState>
                ) : filteredUserCandidates.length === 0 ? (
                  <EmptyState>No users available to add.</EmptyState>
                ) : (
                  <MembersList>
                    {filteredUserCandidates.map(user => (
                      <MemberItem key={user.id}>
                        <MemberInfo>
                          <MemberName>{user.name || 'Unnamed User'}</MemberName>
                          <MemberEmail>{user.email || 'No email'}</MemberEmail>
                        </MemberInfo>
                        {(isSuperAdmin || isAdmin || canEdit) && (
                          <ActionButton
                            onClick={() => handleAddUserToCompany(user.id)}
                            color="#ffa000"
                            title="Add to company"
                            disabled={isProcessing}
                          >
                            <Plus size={16} />
                          </ActionButton>
                        )}
                      </MemberItem>
                    ))}
                  </MembersList>
                )}
              </MembersPane>
            </MembersLayout>
            
            <MembersFooter>
              <Button onClick={() => setShowMembersModal(false)}>Close</Button>
            </MembersFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default CompanyManagementView;

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const CompanyCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 5px solid ${props => props.color || '#ffa000'};
`;

const CompanyName = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const CompanyDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const CompanyMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const CompanyCode = styled.span`
  color: #ffa000;
  font-weight: 500;
  font-size: 0.9rem;
`;

const CompanyActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.color || '#333'};
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const AddCompanyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffa000;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ff8f00;
  }
`;

const SearchBar = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #ffa000;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: ${props => props.wide ? '950px' : '500px'};
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

// Shared form and UI components
const Button = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background-color: ${props => props.primary ? '#ffa000' : '#f5f5f5'};
  color: ${props => props.primary ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.primary ? '#ff8f00' : '#e5e5e5'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
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
    border-color: #ffa000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #ffa000;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
`;

// Members modal specific components
const MembersLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MembersPane = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
`;

const PaneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const PaneTitle = styled.h4`
  margin: 0;
  color: #333;
`;

const SmallNote = styled.span`
  color: #777;
  font-size: 0.85rem;
`;

const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 360px;
  overflow: auto;
`;

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: white;
  border: 1px solid #eee;
  border-radius: 6px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const MemberName = styled.span`
  font-weight: 600;
  color: #333;
`;

const MemberEmail = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const MembersSearch = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  
  &:focus {
    outline: none;
    border-color: #ffa000;
  }
`;

const MembersFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;