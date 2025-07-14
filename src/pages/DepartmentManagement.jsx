import React from 'react';
import DepartmentManagementView from '../components/dashboard/DepartmentManagementView';
import { useOutletContext } from 'react-router-dom';

function DepartmentManagement() {
  // Get user data from outlet context provided by DashboardLayout
  const { user, userData } = useOutletContext();
  
  // Check user roles
  const isSuperAdmin = userData?.role === 'superadmin';
  const isAdmin = userData?.role === 'admin';
  const canManageUsers = isSuperAdmin || (isAdmin && userData?.permissions?.canManageUsers);
  
  console.log('DepartmentManagement - userData:', userData);
  console.log('DepartmentManagement - isSuperAdmin:', isSuperAdmin);
  console.log('DepartmentManagement - isAdmin:', isAdmin);
  console.log('DepartmentManagement - canManageUsers:', canManageUsers);
  
  return (
    <>
      {(isSuperAdmin || (isAdmin && userData?.permissions?.canManageUsers)) ? (
        <DepartmentManagementView isSuperAdmin={isSuperAdmin} />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p>You don't have permission to access this page.</p>
        </div>
      )}
    </>
  );
}

export default DepartmentManagement;
