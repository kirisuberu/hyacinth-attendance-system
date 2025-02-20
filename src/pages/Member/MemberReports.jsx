import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import styled from 'styled-components';

const ReportsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid #e5e7eb;
  color: #6b7280;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #1a1a1a;
`;

const DateFilter = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
`;

function MemberReports() {
  const [reports, setReports] = useState([]);
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  useEffect(() => {
    const fetchUserReports = async () => {
      const user = auth.currentUser;
      if (!user) return;

      // TODO: Implement fetching user-specific reports from your database
      // This is a placeholder for demonstration
      setReports([
        {
          date: '2025-02-20',
          timeIn: '09:00 AM',
          timeOut: '06:00 PM',
          status: 'On Time'
        },
        // Add more sample data as needed
      ]);
    };

    fetchUserReports();
  }, [dateRange]);

  return (
    <ReportsContainer>
      <Title>My Attendance Reports</Title>
      
      <DateFilter>
        <FilterInput
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
          placeholder="Start Date"
        />
        <FilterInput
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
          placeholder="End Date"
        />
      </DateFilter>

      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Time In</Th>
            <Th>Time Out</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <Td>{report.date}</Td>
              <Td>{report.timeIn}</Td>
              <Td>{report.timeOut}</Td>
              <Td>{report.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReportsContainer>
  );
}

export default MemberReports;
