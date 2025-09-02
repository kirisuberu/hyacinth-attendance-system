import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Shield, Check, X, Users, UserPlus, ChartBar, ClockClockwise, Wrench } from 'phosphor-react';


function AdminPrivilegesView() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      
      // Filter users with 'admin' role
      const adminsList = userSnapshot.docs
        .filter(doc => doc.data().role === 'admin')
        .map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            userId: data.userId || doc.id,
            name: data.name || 'N/A',
            email: data.email || 'N/A',
            privileges: {
              canManageUsers: data.privileges?.canManageUsers !== false, // Default to true if not set
              canManageRegistrations: data.privileges?.canManageRegistrations !== false, // Default to true if not set
              canViewReports: data.privileges?.canViewReports !== false, // Default to true if not set
              canManageAttendanceRequests: data.privileges?.canManageAttendanceRequests !== false, // Default to true if not set
              // Manager Functions must be explicitly enabled by a super admin
              canUseManagerFunctions: data.privileges?.canUseManagerFunctions === true
            }
          };
        });
      
      setAdmins(adminsList);
    } catch (error) {
      console.error('Error fetching admins:', error);
      toast.error('Failed to load admin users');
    } finally {
      setLoading(false);
    }
  };

  const togglePrivilege = async (adminId, privilege, currentValue) => {
    if (updating) return;
    
    try {
      setUpdating(true);
      
      // Find the admin by ID
      const admin = admins.find(a => a.id === adminId || a.userId === adminId);
      if (!admin) {
        toast.error('Admin not found');
        return;
      }
      
      // Use the userId field if available, otherwise fall back to id
      const documentId = admin.userId || admin.id;
      
      // Update the privilege in Firestore
      const userRef = doc(db, 'users', documentId);
      
      // Create the update object dynamically based on the privilege being updated
      const updateData = {
        privileges: {
          ...(admin.privileges || {}),
          [privilege]: !currentValue
        }
      };
      
      await updateDoc(userRef, updateData);
      
      // Update local state
      setAdmins(admins.map(a => {
        if (a.id === adminId || a.userId === adminId) {
          return {
            ...a,
            privileges: {
              ...a.privileges,
              [privilege]: !currentValue
            }
          };
        }
        return a;
      }));
      
      toast.success(`Privilege updated successfully`);
    } catch (error) {
      console.error('Error updating privilege:', error);
      toast.error(`Failed to update privilege: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <Container>
      <Title>
        <Icon><Shield size={24} weight="bold" /></Icon>
        Admin Privileges
      </Title>
      
      {loading ? (
        <p>Loading admins...</p>
      ) : (
        <>
          {admins.length > 0 ? (
            <AdminTable>
              <TableHead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>User Management</TableHeader>
                  <TableHeader>Registration Requests</TableHeader>
                  <TableHeader>Reports</TableHeader>
                  <TableHeader>Attendance Requests</TableHeader>
                  <TableHeader>Manager Functions</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                {admins.map(admin => (
                  <TableRow key={admin.id || admin.userId}>
                    <TableCell>{admin.name}</TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>
                      <PrivilegeToggle>
                        <PrivilegeLabel>
                          <Icon><Users size={16} /></Icon>
                          Access
                        </PrivilegeLabel>
                        <ToggleButton 
                          enabled={admin.privileges?.canManageUsers}
                          onClick={() => togglePrivilege(admin.id, 'canManageUsers', admin.privileges?.canManageUsers)}
                          disabled={updating}
                        >
                          <ToggleIcon>
                            {admin.privileges?.canManageUsers ? <Check size={16} /> : <X size={16} />}
                          </ToggleIcon>
                        </ToggleButton>
                      </PrivilegeToggle>
                    </TableCell>
                    <TableCell>
                      <PrivilegeToggle>
                        <PrivilegeLabel>
                          <Icon><UserPlus size={16} /></Icon>
                          Access
                        </PrivilegeLabel>
                        <ToggleButton 
                          enabled={admin.privileges?.canManageRegistrations}
                          onClick={() => togglePrivilege(admin.id, 'canManageRegistrations', admin.privileges?.canManageRegistrations)}
                          disabled={updating}
                        >
                          <ToggleIcon>
                            {admin.privileges?.canManageRegistrations ? <Check size={16} /> : <X size={16} />}
                          </ToggleIcon>
                        </ToggleButton>
                      </PrivilegeToggle>
                    </TableCell>
                    <TableCell>
                      <PrivilegeToggle>
                        <PrivilegeLabel>
                          <Icon><ChartBar size={16} /></Icon>
                          Access
                        </PrivilegeLabel>
                        <ToggleButton 
                          enabled={admin.privileges?.canViewReports}
                          onClick={() => togglePrivilege(admin.id, 'canViewReports', admin.privileges?.canViewReports)}
                          disabled={updating}
                        >
                          <ToggleIcon>
                            {admin.privileges?.canViewReports ? <Check size={16} /> : <X size={16} />}
                          </ToggleIcon>
                        </ToggleButton>
                      </PrivilegeToggle>
                    </TableCell>
                    <TableCell>
                      <PrivilegeToggle>
                        <PrivilegeLabel>
                          <Icon><ClockClockwise size={16} /></Icon>
                          Access
                        </PrivilegeLabel>
                        <ToggleButton 
                          enabled={admin.privileges?.canManageAttendanceRequests}
                          onClick={() => togglePrivilege(admin.id, 'canManageAttendanceRequests', admin.privileges?.canManageAttendanceRequests)}
                          disabled={updating}
                        >
                          <ToggleIcon>
                            {admin.privileges?.canManageAttendanceRequests ? <Check size={16} /> : <X size={16} />}
                          </ToggleIcon>
                        </ToggleButton>
                      </PrivilegeToggle>
                    </TableCell>
                    <TableCell>
                      <PrivilegeToggle>
                        <PrivilegeLabel>
                          <Icon><Wrench size={16} /></Icon>
                          Access
                        </PrivilegeLabel>
                        <ToggleButton 
                          enabled={admin.privileges?.canUseManagerFunctions === true}
                          onClick={() => togglePrivilege(admin.id, 'canUseManagerFunctions', admin.privileges?.canUseManagerFunctions === true)}
                          disabled={updating}
                        >
                          <ToggleIcon>
                            {admin.privileges?.canUseManagerFunctions === true ? <Check size={16} /> : <X size={16} />}
                          </ToggleIcon>
                        </ToggleButton>
                      </PrivilegeToggle>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </AdminTable>
          ) : (
            <NoAdminsMessage>
              No admin users found. Add admin users in the User Management section.
            </NoAdminsMessage>
          )}
        </>
      )}
    </Container>
  );
}

export default AdminPrivilegesView;

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

const AdminTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const PrivilegeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: ${props => props.enabled ? '#4caf50' : '#f44336'};
  border: none;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ToggleIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const PrivilegeLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NoAdminsMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;