import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import CompanyManagementView from '../components/dashboard/CompanyManagementView';
import { useAuth } from '../contexts/AuthContext';

function CompanyManagement() {
  const { currentUser, userDetails } = useAuth();
  const isSuperAdmin = userDetails?.role === 'super_admin';
  const isAdmin = userDetails?.role === 'admin';
  
  return (
    <DashboardLayout>
      <CompanyManagementView 
        isSuperAdmin={isSuperAdmin}
        isAdmin={isAdmin}
        canEdit={isSuperAdmin || isAdmin}
      />
    </DashboardLayout>
  );
}

export default CompanyManagement;
