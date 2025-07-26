import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { doc, setDoc, updateDoc, deleteDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Bank, Pencil, Trash, X, Check, Plus } from 'phosphor-react';

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
  max-width: 500px;
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
    </Container>
  );
}

export default CompanyManagementView;
