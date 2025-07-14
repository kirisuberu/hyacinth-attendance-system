import React, { useEffect } from 'react';
import DepartmentManagementView from '../components/dashboard/DepartmentManagementView';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

function DepartmentManagement() {
  // Get user data from outlet context provided by DashboardLayout
  const outletContext = useOutletContext();
  const { user, userData } = outletContext || {};
  
  // Check user roles
  const isSuperAdmin = userData?.role === 'superadmin';
  const isAdmin = userData?.role === 'admin';
  const canManageUsers = isSuperAdmin || (isAdmin && userData?.permissions?.canManageUsers);
  
  useEffect(() => {
    console.log('DepartmentManagement - MOUNTED');
    console.log('DepartmentManagement - outletContext:', outletContext);
    console.log('DepartmentManagement - user:', user);
    console.log('DepartmentManagement - userData:', userData);
    console.log('DepartmentManagement - isSuperAdmin:', isSuperAdmin);
    console.log('DepartmentManagement - isAdmin:', isAdmin);
    console.log('DepartmentManagement - role:', userData?.role);
    
    if (!user) {
      toast.error('User is missing in context');
      console.error('User is missing in context');
    }
    
    if (!userData) {
      toast.error('User data is missing in context');
      console.error('User data is missing in context');
    }
    
    if (userData && !userData.role) {
      toast.error('User role is missing');
      console.error('User role is missing');
    }
  }, [user, userData, outletContext, isSuperAdmin, isAdmin]);
  
  console.log('DepartmentManagement - RENDER');
  console.log('DepartmentManagement - userData:', userData);
  console.log('DepartmentManagement - isSuperAdmin:', isSuperAdmin);
  console.log('DepartmentManagement - isAdmin:', isAdmin);
  
  return (
    <>
      {(isSuperAdmin || isAdmin) ? (
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
