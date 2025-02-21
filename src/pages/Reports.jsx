import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy, where, Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

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
  align-items: center;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  min-width: 150px;
`;

const DateLabel = styled.label`
  color: #4b5563;
  margin-right: 0.5rem;
`;

const ReportTable = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;
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
    position: sticky;
    top: 0;
  }

  tr:hover {
    background: #f9fafb;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const StatBox = styled.div`
  background: ${props => props.color || '#4f46e5'};
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  min-width: 40px;
`;

const ExportButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

function Reports() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [isExporting, setIsExporting] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersQuery = query(collection(db, 'users'));
        const snapshot = await getDocs(usersQuery);
        const usersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchAttendanceStats = async () => {
      if (!startDate || !endDate) return;

      try {
        setLoading(true);
        const stats = {};
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);

        // Initialize stats for all users
        users.forEach(user => {
          stats[user.id] = {
            timeIns: 0,
            timeOuts: 0,
            lates: 0,
            early: 0,
            onTime: 0,
            overtime: 0,
            absent: 0,
            totalHoursWorked: 0,
            averageHoursPerDay: 0
          };
        });

        const attendanceQuery = query(
          collection(db, 'attendance'),
          where('timestamp', '>=', Timestamp.fromDate(start)),
          where('timestamp', '<=', Timestamp.fromDate(end))
        );

        const snapshot = await getDocs(attendanceQuery);
        
        // Process attendance records
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          const userId = data.userId;
          
          if (stats[userId]) {
            // Count time ins/outs
            if (data.type === 'IN') {
              stats[userId].timeIns++;
            } else if (data.type === 'OUT') {
              stats[userId].timeOuts++;
            }
            
            // Count status
            if (data.status) {
              const status = data.status.toLowerCase();
              if (status.includes('late')) {
                stats[userId].lates++;
              } else if (status.includes('early')) {
                stats[userId].early++;
              } else if (status.includes('on time')) {
                stats[userId].onTime++;
              } else if (status.includes('overtime')) {
                stats[userId].overtime++;
              }
            }

            // Calculate hours worked if we have time difference
            if (data.timeDiffHours !== undefined) {
              stats[userId].totalHoursWorked += data.timeDiffHours + (data.timeDiffMinutes || 0) / 60;
            }
          }
        });

        // Calculate averages
        const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        Object.keys(stats).forEach(userId => {
          stats[userId].averageHoursPerDay = 
            daysDiff > 0 ? (stats[userId].totalHoursWorked / daysDiff).toFixed(2) : 0;
        });

        setUserStats(stats);
      } catch (error) {
        console.error('Error fetching attendance stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceStats();
  }, [startDate, endDate, users]);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      const dateRangeHeader = [['Attendance Report'],
        [`Date Range: ${format(new Date(startDate), 'MMMM d, yyyy')} to ${format(new Date(endDate), 'MMMM d, yyyy')}`],
        []];

      const headers = [
        'Name',
        'Email',
        'Type',
        'Time Ins',
        'Time Outs',
        'Late Count',
        'Early Count',
        'On Time Count',
        'Overtime Count',
        'Total Hours',
        'Avg Hours/Day'
      ];

      const data = users.map(user => {
        const stats = userStats[user.id] || {
          timeIns: 0, timeOuts: 0, lates: 0, early: 0,
          onTime: 0, overtime: 0, totalHoursWorked: 0,
          averageHoursPerDay: 0
        };

        return [
          user.name || 'N/A',
          user.email || 'N/A',
          user.userType || 'N/A',
          stats.timeIns,
          stats.timeOuts,
          stats.lates,
          stats.early,
          stats.onTime,
          stats.overtime,
          stats.totalHoursWorked.toFixed(2),
          stats.averageHoursPerDay
        ];
      });

      const ws = XLSX.utils.aoa_to_sheet([...dateRangeHeader, headers, ...data]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Attendance Report');
      
      // Auto-size columns
      const colWidths = headers.map(h => ({wch: h.length}));
      ws['!cols'] = colWidths;

      XLSX.writeFile(wb, `Attendance_Report_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
    } catch (error) {
      console.error('Error exporting data:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <ReportsContainer>
      <Title>Attendance Reports</Title>
      
      <FiltersSection>
        <div>
          <DateLabel>Start Date:</DateLabel>
          <DateInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <DateLabel>End Date:</DateLabel>
          <DateInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <ExportButton
          onClick={handleExport}
          disabled={isExporting || !startDate || !endDate || loading}
        >
          {isExporting ? 'Exporting...' : 'Export to Excel'}
        </ExportButton>
      </FiltersSection>

      <ReportTable>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Time Ins</th>
              <th>Time Outs</th>
              <th>Late</th>
              <th>Early</th>
              <th>On Time</th>
              <th>Overtime</th>
              <th>Total Hours</th>
              <th>Avg Hours/Day</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="11" style={{ textAlign: 'center', padding: '2rem' }}>
                  Loading...
                </td>
              </tr>
            ) : users.map(user => {
              const stats = userStats[user.id] || {
                timeIns: 0, timeOuts: 0, lates: 0, early: 0,
                onTime: 0, overtime: 0, totalHoursWorked: 0,
                averageHoursPerDay: 0
              };
              
              return (
                <tr key={user.id}>
                  <td>{user.name || 'N/A'}</td>
                  <td>{user.email || 'N/A'}</td>
                  <td>{user.userType || 'N/A'}</td>
                  <td><StatBox color="#4f46e5">{stats.timeIns}</StatBox></td>
                  <td><StatBox color="#059669">{stats.timeOuts}</StatBox></td>
                  <td><StatBox color="#dc2626">{stats.lates}</StatBox></td>
                  <td><StatBox color="#2563eb">{stats.early}</StatBox></td>
                  <td><StatBox color="#059669">{stats.onTime}</StatBox></td>
                  <td><StatBox color="#f59e0b">{stats.overtime}</StatBox></td>
                  <td>{stats.totalHoursWorked.toFixed(2)}h</td>
                  <td>{stats.averageHoursPerDay}h</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ReportTable>
    </ReportsContainer>
  );
}

export default Reports;
