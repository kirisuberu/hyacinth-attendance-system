import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';

const ReportsContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const FiltersSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  min-width: 200px;
`;

const ReportTable = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
  }

  th {
    background: #f9fafb;
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const ExportButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

function Reports() {
  const [timeframe, setTimeframe] = useState('week');
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // Fetch attendance records
        const attendanceQuery = query(
          collection(db, 'attendance'),
          orderBy('timestamp', 'desc')
        );
        const snapshot = await getDocs(attendanceQuery);
        
        const records = snapshot.docs.map(doc => {
          const data = doc.data();
          const timestamp = data.timestamp?.toDate();
          return {
            id: doc.id,
            ...data,
            type: data.type === 'Time In' ? 'IN' : data.type === 'Time Out' ? 'OUT' : data.type, // Normalize type to IN/OUT
            timestamp,
            formattedTime: timestamp ? format(timestamp, 'hh:mm a') : 'N/A'
          };
        });

        console.log('All records:', records); // Debug log
        setReportData(records);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, [timeframe]);

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Exporting report...');
  };

  return (
    <ReportsContainer>
      <Title>Reports</Title>

      <FiltersSection>
        <Select 
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="quarter">Last Quarter</option>
          <option value="year">Last Year</option>
        </Select>

        <ExportButton onClick={handleExport}>
          Export Report
        </ExportButton>
      </FiltersSection>

      <ReportTable>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map(record => (
              <tr key={record.id}>
                <td>{record.timestamp ? format(record.timestamp, 'MM/dd/yyyy') : 'N/A'}</td>
                <td>{record.name || 'N/A'}</td>
                <td>{record.email || 'N/A'}</td>
                <td style={{ fontWeight: '500' }}>{record.type}</td>
                <td>{record.formattedTime}</td>
              </tr>
            ))}
            {reportData.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ReportTable>
    </ReportsContainer>
  );
}

export default Reports;
