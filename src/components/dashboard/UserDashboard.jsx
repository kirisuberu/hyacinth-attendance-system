import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Buildings, Calendar, Clock, Briefcase, Bank } from 'phosphor-react';



/**
 * UserDashboard component showing consolidated information about users
 * @param {Object} props
 * @param {boolean} props.isSuperAdmin - Whether the current user is a super admin
 */
function UserDashboard({ isSuperAdmin }) {
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore
  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("name"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setUsers(userData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch departments from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "departments"), (snapshot) => {
      const deptData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setDepartments(deptData);
    });

    return () => unsubscribe();
  }, []);

  // Calculate statistics
  const totalUsers = users.length;
  const adminUsers = users.filter(user => user.role === 'admin').length;
  const staffUsers = users.filter(user => user.role === 'staff').length;
  const internUsers = users.filter(user => user.employmentStatus === 'intern').length;
  const contractualUsers = users.filter(user => user.employmentStatus === 'contractual').length;
  const probationaryUsers = users.filter(user => user.employmentStatus === 'probationary').length;
  const regularUsers = users.filter(user => user.employmentStatus === 'regular').length;
  const totalDepartments = departments.length;

  // Calculate users by role
  const usersByRole = users.reduce((acc, user) => {
    const role = user.role || 'unknown';
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  // Calculate users by employment status
  const usersByEmploymentStatus = users.reduce((acc, user) => {
    const status = user.employmentStatus || 'unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  // Calculate users by department
  const usersByDepartment = users.reduce((acc, user) => {
    if (user.departments && user.departments.length > 0) {
      user.departments.forEach(deptId => {
        acc[deptId] = (acc[deptId] || 0) + 1;
      });
    } else {
      acc['unassigned'] = (acc['unassigned'] || 0) + 1;
    }
    return acc;
  }, {});

  // Calculate users by company
  const usersByCompany = users.reduce((acc, user) => {
    const company = user.company || 'unassigned';
    acc[company] = (acc[company] || 0) + 1;
    return acc;
  }, {});
  
  const totalCompanies = Object.keys(usersByCompany).filter(c => c !== 'unassigned').length;

  // Get top 3 departments by user count
  const top3Departments = Object.entries(usersByDepartment)
    .map(([deptId, count]) => ({ deptId, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
    
  // Get top 3 companies by user count
  const top3Companies = Object.entries(usersByCompany)
    .map(([company, count]) => ({ company, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  // Get department names for each department ID
  const getDepartmentName = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : 'Unassigned';
  };
  
  // Get company name (or use the company ID if no formatting needed)
  const getCompanyName = (companyId) => {
    if (companyId === 'unassigned') return 'Unassigned';
    return companyId.charAt(0).toUpperCase() + companyId.slice(1).replace('_', ' ');
  };

  if (loading) {
    return <div>Loading dashboard data...</div>;
  }

  return (
    <DashboardContainer>
      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatIcon bgColor="#e3f2fd" iconColor="#2196f3">
              <Users size={24} />
            </StatIcon>
            <StatTitle>Total Users</StatTitle>
          </StatHeader>
          <StatValue>{totalUsers}</StatValue>
        </StatCard>
        
      </StatsGrid>
      
      <StatsGrid>
        <StatCard>
          <StatusContainer>
            <StatusHeader>
              <Briefcase size={18} />
              Employment Status
            </StatusHeader>
            <StatusGrid>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.25rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <StatIcon bgColor="#fff8e1" iconColor="#ffa000" style={{ width: '1.5rem', height: '1.5rem' }}>
                <Users size={12} />
              </StatIcon>
              <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Intern</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{internUsers}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.25rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <StatIcon bgColor="#e8f5e9" iconColor="#4caf50" style={{ width: '1.5rem', height: '1.5rem' }}>
                <Users size={12} />
              </StatIcon>
              <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Probationary</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{probationaryUsers}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.25rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <StatIcon bgColor="#e3f2fd" iconColor="#1976d2" style={{ width: '1.5rem', height: '1.5rem' }}>
                <Users size={12} />
              </StatIcon>
              <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Regular</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{regularUsers}</span>
          </div>
            </StatusGrid>
          </StatusContainer>
        </StatCard>
        <StatCard>
          <StatHeader>
            <StatIcon bgColor="#ede7f6" iconColor="#673ab7">
              <Buildings size={24} />
            </StatIcon>
            <StatTitle>Departments</StatTitle>
          </StatHeader>
          <StatValue>{totalDepartments}</StatValue>
          
          <StatusContainer>
            <StatusHeader>
              <Buildings size={18} />
              Top 3 Departments
            </StatusHeader>
            <StatusGrid>
              {top3Departments.map(dept => (
                <div key={dept.deptId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.25rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <StatIcon bgColor="#e8f5e9" iconColor="#4caf50" style={{ width: '1.5rem', height: '1.5rem' }}>
                      <Buildings size={12} />
                    </StatIcon>
                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{getDepartmentName(dept.deptId)}</span>
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{dept.count}</span>
                </div>
              ))}
            </StatusGrid>
          </StatusContainer>
        </StatCard>
        <StatCard>
          <StatHeader>
            <StatIcon bgColor="#fff8e1" iconColor="#ffa000">
              <Bank size={24} />
            </StatIcon>
            <StatTitle>Companies</StatTitle>
          </StatHeader>
          <StatValue>{totalCompanies}</StatValue>
          
          <StatusContainer>
            <StatusHeader>
              <Bank size={18} />
              Top 3 Companies
            </StatusHeader>
            <StatusGrid>
              {top3Companies.map(item => (
                <div key={item.company} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.25rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <StatIcon bgColor="#ffecb3" iconColor="#ff8f00" style={{ width: '1.5rem', height: '1.5rem' }}>
                      <Bank size={12} />
                    </StatIcon>
                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{getCompanyName(item.company)}</span>
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.count}</span>
                </div>
              ))}
            </StatusGrid>
          </StatusContainer>
        </StatCard>
      </StatsGrid>

      <SectionTitle>
        <Users size={20} />
        Users by Role
      </SectionTitle>
      <SummaryTable>
        <thead>
          <tr>
            <TableHeader>Role</TableHeader>
            <TableHeader>Count</TableHeader>
            <TableHeader>Percentage</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(usersByRole).map(([role, count]) => (
            <TableRow key={role}>
              <TableCell>{role.charAt(0).toUpperCase() + role.slice(1).replace('_', ' ')}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{((count / totalUsers) * 100).toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </tbody>
      </SummaryTable>

      <SectionTitle>
        <Calendar size={20} />
        Users by Employment Status
      </SectionTitle>
      <SummaryTable>
        <thead>
          <tr>
            <TableHeader>Employment Status</TableHeader>
            <TableHeader>Count</TableHeader>
            <TableHeader>Percentage</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(usersByEmploymentStatus).map(([status, count]) => (
            <TableRow key={status}>
              <TableCell>{status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{((count / totalUsers) * 100).toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </tbody>
      </SummaryTable>

      <SectionTitle>
        <Buildings size={20} />
        Users by Department
      </SectionTitle>
      <SummaryTable>
        <thead>
          <tr>
            <TableHeader>Department</TableHeader>
            <TableHeader>Count</TableHeader>
            <TableHeader>Percentage</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(usersByDepartment).map(([deptId, count]) => (
            <TableRow key={deptId}>
              <TableCell>{getDepartmentName(deptId)}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{((count / totalUsers) * 100).toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </tbody>
      </SummaryTable>

      <SectionTitle>
        <Bank size={20} />
        Users by Company
      </SectionTitle>
      <SummaryTable>
        <thead>
          <tr>
            <TableHeader>Company</TableHeader>
            <TableHeader>Count</TableHeader>
            <TableHeader>Percentage</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(usersByCompany).map(([company, count]) => (
            <TableRow key={company}>
              <TableCell>{getCompanyName(company)}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{((count / totalUsers) * 100).toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </tbody>
      </SummaryTable>
    </DashboardContainer>
  );
}

export default UserDashboard;

const DashboardContainer = styled.div`
  padding: 1rem 0;
  max-width: 1400px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#f0f0f0'};
  color: ${props => props.iconColor || '#333'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatTitle = styled.h3`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 2.5rem 0 1.25rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const StatusContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fafafa;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
`;

const StatusGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 2.5rem;
`;

const TableHeader = styled.th`
  padding: 1.25rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  font-size: 0.95rem;
`;

const TableCell = styled.td`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  
  &:first-child {
    font-weight: 500;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;