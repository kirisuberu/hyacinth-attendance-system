import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Buildings, Briefcase, Bank } from 'phosphor-react';



/**
 * UserDashboard component showing consolidated information about users
 * @param {Object} props
 * @param {boolean} props.isSuperAdmin - Whether the current user is a super admin
 */
function UserDashboard({ isSuperAdmin }) {
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [companies, setCompanies] = useState([]);
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

  // Fetch companies from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "companies"), (snapshot) => {
      const compData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCompanies(compData);
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

  // Calculate users by role (not used in charts)

  // Status counts (active/inactive/pending)
  const statusCounts = useMemo(() => {
    const counts = { active: 0, inactive: 0, pending: 0 };
    users.forEach(u => {
      const s = (u.status || '').toLowerCase();
      if (s === 'active') counts.active += 1;
      else if (s === 'inactive') counts.inactive += 1;
      else if (s === 'pending') counts.pending += 1;
    });
    return counts;
  }, [users]);

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

  // Calculate users by company (supports multiple companies per user)
  const usersByCompany = users.reduce((acc, user) => {
    const assigned = Array.isArray(user.companies)
      ? user.companies
      : (user.company ? [user.company] : []);
    
    if (!assigned.length) {
      acc['unassigned'] = (acc['unassigned'] || 0) + 1;
    } else {
      assigned.forEach((companyId) => {
        acc[companyId] = (acc[companyId] || 0) + 1;
      });
    }
    return acc;
  }, {});
  
  const totalCompanies = Object.keys(usersByCompany).filter(c => c !== 'unassigned').length;

  // Lightweight chart data helpers
  const getPercent = (value, total) => (total ? Math.round((value / total) * 100) : 0);

  // (charts below sort inline; no precomputed top lists needed)

  // Get department names for each department ID
  const getDepartmentName = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : 'Unassigned';
  };
  
  // Get company name from companies collection
  const getCompanyName = (companyId) => {
    if (companyId === 'unassigned') return 'Unassigned';
    const company = companies.find(c => c.id === companyId);
    return company ? company.name : companyId;
  };

  // Simple distinct color generator for multi-slice pies
  const pieColor = (i) => `hsl(${(i * 47) % 360}, 70%, 55%)`;

  // Build pie data for employment status, departments, and companies
  const employmentStatusPieData = useMemo(() => (
    Object.entries(usersByEmploymentStatus)
      .map(([status, count], idx) => ({
        key: status === 'unknown' ? 'Unknown' : status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' '),
        value: count,
        color: pieColor(idx)
      }))
      .sort((a, b) => b.value - a.value)
  ), [usersByEmploymentStatus]);

  const departmentPieData = useMemo(() => (
    Object.entries(usersByDepartment)
      .sort((a, b) => b[1] - a[1])
      .map(([deptId, count], idx) => ({ key: getDepartmentName(deptId), value: count, color: pieColor(idx) }))
  ), [usersByDepartment, departments]);

  const companyPieData = useMemo(() => (
    Object.entries(usersByCompany)
      .sort((a, b) => b[1] - a[1])
      .map(([company, count], idx) => ({ key: getCompanyName(company), value: count, color: pieColor(idx) }))
  ), [usersByCompany, companies]);

  // Donut chart helper: conic-gradient based
  const buildConicGradient = (data, total) => {
    let acc = 0;
    const parts = data.map(({ color, value }) => {
      const start = total ? (acc / total) * 100 : 0;
      const end = total ? ((acc + value) / total) * 100 : 0;
      acc += value;
      return `${color} ${start}% ${end}%`;
    });
    // Fallback to a light gray if no data
    return parts.length ? parts.join(', ') : '#eee 0% 100%';
  };

  const PieDonut = ({ data, size = 180, thickness = 28 }) => {
    const total = data.reduce((s, d) => s + (d.value || 0), 0) || 1;
    const gradient = buildConicGradient(data, total);
    const innerSize = Math.max(0, size - thickness * 2);
    return (
      <PieLayout>
        <PieSide>
          <PieCanvas style={{ width: size, height: size, background: `conic-gradient(${gradient})` }}>
            <PieInner style={{ width: innerSize, height: innerSize }} />
          </PieCanvas>
        </PieSide>
        <LegendList>
          {data.filter(d => d.value > 0).map(d => (
            <LegendItem key={d.key}>
              <Swatch style={{ backgroundColor: d.color }} />
              <LegendText>{d.key}</LegendText>
              <LegendValue>{d.value} ({getPercent(d.value, total)}%)</LegendValue>
            </LegendItem>
          ))}
        </LegendList>
      </PieLayout>
    );
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
        <StatCard>
          <StatHeader>
            <StatIcon bgColor="#fff3e0" iconColor="#fb8c00">
              <Users size={24} />
            </StatIcon>
            <StatTitle>Admins</StatTitle>
          </StatHeader>
          <StatValue>{adminUsers}</StatValue>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatIcon bgColor="#e8f5e9" iconColor="#4caf50">
              <Users size={24} />
            </StatIcon>
            <StatTitle>Active</StatTitle>
          </StatHeader>
          <StatValue>{statusCounts.active}</StatValue>
        </StatCard>
      </StatsGrid>
      {/* Status Overview removed as requested */}

      

      <ChartsGrid>
      <StatusContainer>
      <SectionTitle>
        <Briefcase size={20} />
        Employment Status
      </SectionTitle>
      <PieDonut data={employmentStatusPieData} />
      </StatusContainer>

        <StatusContainer>
          <SectionTitle>
            <Buildings size={20} />
            Users by Department
          </SectionTitle>
          <PieDonut data={departmentPieData} />
        </StatusContainer>

        <StatusContainer>
          <SectionTitle>
            <Bank size={20} />
            Users by Company
          </SectionTitle>
          <PieDonut data={companyPieData} />
        </StatusContainer>
      </ChartsGrid>
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

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
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
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PieLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PieSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieCanvas = styled.div`
  border-radius: 50%;
  position: relative;
`;

const PieInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #fff;
`;

const LegendList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

const LegendItem = styled.li`
  display: grid;
  grid-template-columns: 14px 1fr auto;
  align-items: center;
  gap: 0.5rem;
`;

const Swatch = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  display: inline-block;
`;

const LegendText = styled.span`
  color: #333;
  font-size: 0.95rem;
`;

const LegendValue = styled.span`
  color: #666;
  font-variant-numeric: tabular-nums;
`;