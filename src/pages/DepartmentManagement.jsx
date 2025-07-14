import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DepartmentManagementView from '../components/dashboard/DepartmentManagementView';
import { useAuth } from '../contexts/AuthContext';

function DepartmentManagement() {
  const { userData } = useAuth();
  const isSuperAdmin = userData?.role === 'superadmin';
  const isAdmin = userData?.role === 'admin';
  
  return (
    <DashboardLayout>
      {(isSuperAdmin || isAdmin) ? (
        <DepartmentManagementView isSuperAdmin={isSuperAdmin} />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p>You don't have permission to access this page.</p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default DepartmentManagement;
