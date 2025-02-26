import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy, where, Timestamp, onSnapshot } from 'firebase/firestore';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

const ReportsContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const FiltersSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-end;

  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
    
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
`;

const ReportTable = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
  display: block;
`;

const Table = styled.table`
  min-width: 1200px;
  width: 100%;
  border-collapse: collapse;
  color: #4b5563;
  table-layout: fixed;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #4b5563;
  }
  
  tr:hover td {
    background-color: #f9fafb;
  }

  th:nth-child(1), td:nth-child(1) { width: 12%; } /* Name */
  th:nth-child(2), td:nth-child(2) { width: 15%; } /* Email */
  th:nth-child(3), td:nth-child(3) { width: 8%; } /* Type */
  th:nth-child(4), td:nth-child(4), 
  th:nth-child(5), td:nth-child(5),
  th:nth-child(6), td:nth-child(6),
  th:nth-child(7), td:nth-child(7),
  th:nth-child(8), td:nth-child(8),
  th:nth-child(9), td:nth-child(9) { width: 6%; } /* Stats */
  th:nth-child(10), td:nth-child(10),
  th:nth-child(11), td:nth-child(11) { width: 7%; } /* Hours */
  th:nth-child(12), td:nth-child(12),
  th:nth-child(13), td:nth-child(13) { width: 7%; } /* Buttons */
`;

const StatBox = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: ${props => props.color || '#3b82f6'};
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
`;

const ExportButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: 0.5rem;

  &:hover {
    background-color: #059669;
  }
`;

const DetailedRecordsContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
  display: block;
`;

const DetailedRecordsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const DetailedRecordsTitle = styled.h2`
  font-size: 1.5rem;
  color: #4b5563;
  margin: 0;
`;

const BackButton = styled.button`
  background-color: #e5e7eb;
  color: #4b5563;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d1d5db;
  }
`;

const DetailedTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
`;

const DetailedTable = styled.table`
  min-width: 900px;
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  color: #4b5563;
  table-layout: fixed;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #4b5563;
  }
  
  tr:hover td {
    background-color: #f9fafb;
  }

  th:nth-child(1), td:nth-child(1) { width: 12%; } /* Date */
  th:nth-child(2), td:nth-child(2) { width: 12%; } /* Day of Week */
  th:nth-child(3), td:nth-child(3) { width: 12%; } /* Time */
  th:nth-child(4), td:nth-child(4) { width: 10%; } /* Type */
  th:nth-child(5), td:nth-child(5) { width: 12%; } /* Status */
  th:nth-child(6), td:nth-child(6) { width: 15%; } /* Shift Duration */
  th:nth-child(7), td:nth-child(7) { width: 27%; } /* Notes */
`;

const ViewButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const DebugButton = styled.button`
  background-color: #f59e0b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d97706;
  }
`;

function Reports() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [isExporting, setIsExporting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailedRecords, setDetailedRecords] = useState([]);
  const [showDetailedView, setShowDetailedView] = useState(false);

  useEffect(() => {
    console.log("Setting up real-time users listener");
    
    // Fetch users
    const usersQuery = query(
      collection(db, 'users'),
      orderBy('name')
    );
    
    const usersUnsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const fetchedUsers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(fetchedUsers);
      
      // Initialize stats for all users
      const stats = {};
      fetchedUsers.forEach(user => {
        stats[user.id] = {
          timeIns: 0,
          timeOuts: 0,
          lates: 0,
          early: 0,
          onTime: 0,
          overtime: 0,
          absent: 0,
          totalHoursWorked: 0,
          averageHoursPerDay: 0,
          detailedRecords: [] // Initialize detailed records array
        };
      });
      
      // Only set up attendance listener if we have start and end dates
      if (startDate && endDate) {
        setupAttendanceListener(stats, fetchedUsers);
      } else {
        setUserStats(stats);
      }
    });
    
    return () => {
      console.log("Cleaning up users listener");
      usersUnsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!startDate || !endDate || users.length === 0) return;
    
    console.log("Date range changed, updating attendance stats");
    
    // Initialize stats for all users
    const stats = {};
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
        averageHoursPerDay: 0,
        detailedRecords: [] // Initialize detailed records array
      };
    });
    
    setupAttendanceListener(stats, users);
  }, [startDate, endDate, users]);

  const setupAttendanceListener = (stats, users) => {
    console.log("Setting up real-time attendance stats listener");
    setLoading(true);
    
    try {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);

      // Create a query that doesn't require a composite index
      // Instead of using multiple where clauses with timestamp, we'll fetch a broader range
      // and filter the results client-side
      const attendanceQuery = query(
        collection(db, 'attendance')
        // Removing timestamp filters to avoid requiring composite index
        // where('timestamp', '>=', Timestamp.fromDate(start)),
        // where('timestamp', '<=', Timestamp.fromDate(end))
      );

      // Set up real-time listener for attendance records
      const unsubscribe = onSnapshot(attendanceQuery, (snapshot) => {
        console.log("Real-time attendance update received, records:", snapshot.size);
        
        // Reset stats for each update
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
            averageHoursPerDay: 0,
            detailedRecords: [] // Add array to store detailed records
          };
        });
        
        // Process attendance records with client-side filtering for date range
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          
          // Apply date filtering client-side
          let recordTimestamp;
          if (data.timestamp?.toDate) {
            recordTimestamp = data.timestamp.toDate();
          } else if (data.timestamp instanceof Date) {
            recordTimestamp = data.timestamp;
          } else if (data.date) {
            // Fallback to date field
            if (typeof data.date === 'string') {
              recordTimestamp = new Date(data.date);
            } else if (data.date.toDate) {
              recordTimestamp = data.date.toDate();
            } else {
              recordTimestamp = new Date(data.date);
            }
          } else {
            console.warn("Record missing timestamp:", doc.id, data);
            return; // Skip records without timestamp
          }
          
          // Skip records outside our date range
          if (recordTimestamp < start || recordTimestamp > end) {
            return;
          }
          
          const userId = data.userId;
          
          if (stats[userId]) {
            // Add detailed record information
            const detailedRecord = {
              id: doc.id,
              ...data,
              timestamp: recordTimestamp,
              formattedDate: format(recordTimestamp, 'yyyy-MM-dd'),
              formattedTime: format(recordTimestamp, 'hh:mm a'),
              dayOfWeek: format(recordTimestamp, 'EEEE') // Add day of week
            };
            
            console.log("Adding detailed record for user", userId, detailedRecord);
            
            stats[userId].detailedRecords.push(detailedRecord);
            
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

        console.log("Updated stats:", stats);

        // Calculate averages
        const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        Object.keys(stats).forEach(userId => {
          stats[userId].averageHoursPerDay = 
            daysDiff > 0 ? (stats[userId].totalHoursWorked / daysDiff).toFixed(2) : 0;
        });

        setUserStats({...stats});
        setLoading(false);
      }, (error) => {
        console.error('Error in attendance listener:', error);
        setLoading(false);
      });
      
      // Return cleanup function
      return () => {
        console.log("Cleaning up attendance stats listener");
        unsubscribe();
      };
    } catch (error) {
      console.error('Error setting up attendance stats listener:', error);
      setLoading(false);
      return () => {}; // Return empty cleanup function
    }
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      const dateRangeHeader = [
        [`Attendance Report from ${startDate} to ${endDate}`],
        [] // Empty row for spacing
      ];
      
      const headers = [
        'Name',
        'Email',
        'User Type',
        'Time-Ins',
        'Time-Outs',
        'Lates',
        'Early',
        'On Time',
        'Overtime',
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
      
      // Create a worksheet for the summary data
      const summaryWs = XLSX.utils.aoa_to_sheet([...dateRangeHeader, headers, ...data]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');
      
      // Auto-size columns
      const colWidths = headers.map(h => ({wch: h.length}));
      summaryWs['!cols'] = colWidths;
      
      // Create detailed worksheets for each user
      users.forEach(user => {
        if (userStats[user.id] && userStats[user.id].detailedRecords && userStats[user.id].detailedRecords.length > 0) {
          const detailedRecords = [...userStats[user.id].detailedRecords].sort((a, b) => b.timestamp - a.timestamp);
          
          const detailedHeaders = ['Date', 'Day of Week', 'Time', 'Type', 'Status', 'Shift Duration', 'Notes'];
          
          const detailedData = detailedRecords.map(record => [
            record.formattedDate,
            record.dayOfWeek,
            record.formattedTime,
            record.type,
            record.status || '',
            record.type === 'OUT' && record.shiftDuration 
              ? `${record.shiftDurationHours || 0}h ${record.shiftDurationMinutes || 0}m`
              : '',
            record.notes || ''
          ]);
          
          const detailedWs = XLSX.utils.aoa_to_sheet([
            [`Detailed Records for ${user.name}`],
            [],
            detailedHeaders,
            ...detailedData
          ]);
          
          XLSX.utils.book_append_sheet(wb, detailedWs, `${user.name.substring(0, 30)}`);
        }
      });
      
      XLSX.writeFile(wb, `Attendance_Report_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
    } catch (error) {
      console.error('Error exporting data:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleViewDetailedRecords = (userId) => {
    const userStatsCopy = { ...userStats };
    
    if (!userStatsCopy[userId] || !userStatsCopy[userId].detailedRecords) {
      console.error("No detailed records found for user:", userId);
      return;
    }
    
    const detailedRecords = userStatsCopy[userId].detailedRecords;
    
    // Sort records by timestamp (newest first)
    const sortedRecords = [...detailedRecords].sort((a, b) => 
      b.timestamp - a.timestamp
    );
    
    setDetailedRecords(sortedRecords);
    
    // Find the user's name
    const user = users.find(u => u.id === userId);
    if (!user) {
      console.error("User not found:", userId);
      return;
    }
    
    setSelectedUser(user);
    setShowDetailedView(true);
  };

  const debugDetailedRecords = (userId) => {
    const userStatsCopy = { ...userStats };
    console.log("Debug detailed records for user:", userId);
    console.log("User stats:", userStatsCopy[userId]);
    
    if (userStatsCopy[userId] && userStatsCopy[userId].detailedRecords) {
      console.log("Detailed records count:", userStatsCopy[userId].detailedRecords.length);
      console.log("Detailed records:", userStatsCopy[userId].detailedRecords);
    } else {
      console.log("No detailed records found");
    }
  };

  const exportDetailedRecords = () => {
    try {
      if (!selectedUser) return;
      
      const wb = XLSX.utils.book_new();
      
      const detailedHeaders = ['Date', 'Day of Week', 'Time', 'Type', 'Status', 'Shift Duration', 'Notes'];
      
      const detailedData = detailedRecords.map(record => [
        record.formattedDate,
        record.dayOfWeek,
        record.formattedTime,
        record.type,
        record.status || '',
        record.type === 'OUT' && record.shiftDuration 
          ? `${record.shiftDurationHours || 0}h ${record.shiftDurationMinutes || 0}m`
          : '',
        record.notes || ''
      ]);
      
      const detailedWs = XLSX.utils.aoa_to_sheet([
        [`Detailed Records for ${selectedUser.name}`],
        [`Date Range: ${startDate} to ${endDate}`],
        [],
        detailedHeaders,
        ...detailedData
      ]);
      
      // Auto-size columns
      const colWidths = detailedHeaders.map(h => ({wch: h.length}));
      detailedWs['!cols'] = colWidths;
      
      XLSX.utils.book_append_sheet(wb, detailedWs, `${selectedUser.name.substring(0, 30)}`);
      XLSX.writeFile(wb, `${selectedUser.name}_Attendance_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
    } catch (error) {
      console.error('Error exporting detailed records:', error);
    }
  };

  return (
    <ReportsContainer>
      <Title>Attendance Reports</Title>
      
      <div style={{ marginBottom: '1rem', color: '#4b5563', fontSize: '0.9rem' }}>
        <span style={{ backgroundColor: '#e0f2fe', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: '500' }}>
          ⚡ Real-time updates enabled
        </span>
        {' '}- Reports will automatically refresh when new records are added.
      </div>
      
      <FiltersSection>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <ExportButton 
            onClick={handleExport} 
            disabled={isExporting || !startDate || !endDate}
          >
            {isExporting ? 'Exporting...' : 'Export to Excel'}
          </ExportButton>
        </div>
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
              <th>View Detailed Records</th>
              <th>Debug Detailed Records</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="13" style={{ textAlign: 'center', padding: '2rem' }}>
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
                  <td style={{ color: '#4b5563' }}>{user.name || 'N/A'}</td>
                  <td style={{ color: '#4b5563' }}>{user.email || 'N/A'}</td>
                  <td style={{ color: '#4b5563' }}>{user.userType || 'N/A'}</td>
                  <td><StatBox color="#4f46e5">{stats.timeIns}</StatBox></td>
                  <td><StatBox color="#059669">{stats.timeOuts}</StatBox></td>
                  <td><StatBox color="#dc2626">{stats.lates}</StatBox></td>
                  <td><StatBox color="#2563eb">{stats.early}</StatBox></td>
                  <td><StatBox color="#059669">{stats.onTime}</StatBox></td>
                  <td><StatBox color="#f59e0b">{stats.overtime}</StatBox></td>
                  <td style={{ color: '#4b5563' }}>{stats.totalHoursWorked.toFixed(2)}h</td>
                  <td style={{ color: '#4b5563' }}>{stats.averageHoursPerDay}h</td>
                  <td>
                    <ViewButton onClick={() => handleViewDetailedRecords(user.id)}>View</ViewButton>
                  </td>
                  <td>
                    <DebugButton onClick={() => debugDetailedRecords(user.id)}>Debug</DebugButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ReportTable>

      {showDetailedView && selectedUser && (
        <DetailedRecordsContainer>
          <DetailedRecordsHeader>
            <DetailedRecordsTitle>Detailed Records for {selectedUser.name}</DetailedRecordsTitle>
            <div>
              <BackButton onClick={() => setShowDetailedView(false)}>Back</BackButton>
              <ExportButton onClick={exportDetailedRecords}>Export to Excel</ExportButton>
            </div>
          </DetailedRecordsHeader>
          <DetailedTableContainer>
            <DetailedTable>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day of Week</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Shift Duration</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {detailedRecords.map(record => (
                  <tr key={record.id} style={{ color: '#4b5563' }}>
                    <td style={{ color: '#4b5563' }}>{record.formattedDate}</td>
                    <td style={{ color: '#4b5563' }}>{record.dayOfWeek}</td>
                    <td style={{ color: '#4b5563' }}>{record.formattedTime}</td>
                    <td style={{ color: '#4b5563' }}>{record.type}</td>
                    <td style={{ color: '#4b5563' }}>{record.status || '-'}</td>
                    <td style={{ color: '#4b5563' }}>
                      {record.type === 'OUT' && record.shiftDuration 
                        ? `${record.shiftDurationHours || 0}h ${record.shiftDurationMinutes || 0}m` 
                        : '-'}
                    </td>
                    <td style={{ color: '#4b5563' }}>{record.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </DetailedTable>
          </DetailedTableContainer>
        </DetailedRecordsContainer>
      )}
    </ReportsContainer>
  );
}

export default Reports;
