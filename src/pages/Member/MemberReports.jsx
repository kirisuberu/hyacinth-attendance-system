import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import styled from 'styled-components';
import { collection, query, where, getDocs, Timestamp, orderBy, onSnapshot } from 'firebase/firestore';
import { format, parseISO } from 'date-fns';

const ReportsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  overflow-x: hidden;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  color: #1a1a1a;
  table-layout: fixed;

  th:nth-child(1), td:nth-child(1) { width: 12%; } /* Date */
  th:nth-child(2), td:nth-child(2) { width: 12%; } /* Day of Week */
  th:nth-child(3), td:nth-child(3) { width: 12%; } /* Time */
  th:nth-child(4), td:nth-child(4) { width: 10%; } /* Type */
  th:nth-child(5), td:nth-child(5) { width: 12%; } /* Status */
  th:nth-child(6), td:nth-child(6) { width: 15%; } /* Time Difference */
  th:nth-child(7), td:nth-child(7) { width: 27%; } /* Notes */
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid #e5e7eb;
  color: #6b7280;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateFilter = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #2563eb;
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.status?.toLowerCase()) {
      case 'late':
        return '#fee2e2';
      case 'early':
        return '#e0f2fe';
      case 'on time':
        return '#dcfce7';
      case 'overtime':
        return '#fef9c3';
      case 'early out':
        return '#fce7f3';
      default:
        return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.status?.toLowerCase()) {
      case 'late':
        return '#b91c1c';
      case 'early':
        return '#0369a1';
      case 'on time':
        return '#15803d';
      case 'overtime':
        return '#854d0e';
      case 'early out':
        return '#9d174d';
      default:
        return '#4b5563';
    }
  }};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
`;

function MemberReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [filteredReports, setFilteredReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setupRealtimeListener = () => {
      const user = auth.currentUser;
      if (!user) {
        console.log("No authenticated user found");
        setError("Please log in to view your reports");
        return { unsubscribe: () => {} }; // Return empty unsubscribe function
      }

      console.log("Setting up real-time listener for user:", user.uid, user.email);
      setLoading(true);
      
      try {
        // Query all attendance records for the current user
        const attendanceRef = collection(db, 'attendance');
        
        // First try with userId filter
        const userIdQuery = query(
          attendanceRef,
          where('userId', '==', user.uid)
        );
        
        console.log("Setting up real-time listener for user ID:", user.uid);
        
        // Set up the real-time listener
        const unsubscribe = onSnapshot(
          userIdQuery,
          (querySnapshot) => {
            console.log("Real-time update received, records:", querySnapshot.size);
            
            if (querySnapshot.empty) {
              // If no records found with user ID, try with email as fallback
              console.log("No records found with user ID, trying email fallback");
              
              // Clean up the first listener before creating a new one
              unsubscribe();
              
              const emailQuery = query(
                attendanceRef,
                where('email', '==', user.email)
              );
              
              // Set up a new listener with the email query
              return onSnapshot(
                emailQuery,
                (emailSnapshot) => {
                  console.log("Email query real-time update, records:", emailSnapshot.size);
                  
                  if (emailSnapshot.empty) {
                    console.log("No records found with email either");
                    setError("No attendance records found for your account");
                    setLoading(false);
                    return;
                  }
                  
                  processQueryResults(emailSnapshot);
                },
                (error) => {
                  console.error("Error in email query listener:", error);
                  setError(`Error loading reports: ${error.message}`);
                  setLoading(false);
                }
              );
            } else {
              processQueryResults(querySnapshot);
            }
          },
          (error) => {
            console.error("Error in user ID query listener:", error);
            setError(`Error loading reports: ${error.message}`);
            setLoading(false);
          }
        );
        
        return unsubscribe;
      } catch (error) {
        console.error("Error setting up real-time listener:", error);
        setError(`Error loading reports: ${error.message}`);
        setLoading(false);
        return { unsubscribe: () => {} }; // Return empty unsubscribe function
      }
    };
    
    const processQueryResults = (snapshot) => {
      try {
        const attendanceData = snapshot.docs.map(doc => {
          const data = doc.data();
          
          // Convert Firestore timestamp to JavaScript Date
          let timestamp;
          if (data.timestamp && data.timestamp.seconds) {
            timestamp = new Date(data.timestamp.seconds * 1000);
          } else if (data.date) {
            // Fallback to date field if timestamp is not available
            timestamp = new Date(data.date);
          } else {
            timestamp = new Date(); // Default to current date if no timestamp
          }
          
          return {
            id: doc.id,
            ...data,
            formattedDate: format(timestamp, 'yyyy-MM-dd'),
            formattedTime: format(timestamp, 'hh:mm a'),
            dayOfWeek: format(timestamp, 'EEEE'), // Add day of week
            timestamp
          };
        });
        
        // Sort by timestamp, newest first (doing client-side sorting instead)
        const sortedData = attendanceData.sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        
        console.log("Processed attendance data:", sortedData.length);
        setReports(sortedData);
        
        // Apply any existing date filters to the new data
        if (dateRange.start || dateRange.end) {
          applyDateFilter(sortedData);
        } else {
          setFilteredReports(sortedData);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error processing query results:", err);
        setError(`Error processing data: ${err.message}`);
        setLoading(false);
      }
    };

    // Set up the real-time listener and store the unsubscribe function
    const unsubscribe = setupRealtimeListener();
    
    // Clean up the listener when the component unmounts
    return () => {
      console.log("Cleaning up real-time listener");
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const applyDateFilter = (reportsToFilter = reports) => {
    if (!dateRange.start && !dateRange.end) {
      setFilteredReports(reportsToFilter);
      return;
    }

    let filtered = [...reportsToFilter];

    if (dateRange.start) {
      const startDate = new Date(dateRange.start);
      startDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter(report => report.timestamp >= startDate);
    }

    if (dateRange.end) {
      const endDate = new Date(dateRange.end);
      endDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter(report => report.timestamp <= endDate);
    }

    setFilteredReports(filtered);
  };

  const handleFilterClick = () => {
    applyDateFilter();
  };

  const formatTimeDiff = (hours, minutes) => {
    if (hours === undefined || minutes === undefined) return 'N/A';
    return `${hours}h ${minutes}m`;
  };

  return (
    <ReportsContainer>
      <Title>My Attendance Reports</Title>
      
      <div style={{ marginBottom: '1rem', color: '#4b5563', fontSize: '0.9rem' }}>
        <span style={{ backgroundColor: '#e0f2fe', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: '500' }}>
          ⚡ Real-time updates enabled
        </span>
        {' '}- Reports will automatically refresh when new records are added.
      </div>
      
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
        <FilterButton onClick={handleFilterClick}>
          Apply Filter
        </FilterButton>
      </DateFilter>

      {error && (
        <EmptyState style={{ color: '#ef4444' }}>
          {error}
        </EmptyState>
      )}

      {loading ? (
        <LoadingState>Loading your attendance records...</LoadingState>
      ) : filteredReports.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Date</Th>
                <Th>Day of Week</Th>
                <Th>Time</Th>
                <Th>Type</Th>
                <Th>Status</Th>
                <Th>Time Difference</Th>
                <Th>Notes</Th>
              </tr>
            </thead>
            <tbody >
              {filteredReports.map((report) => (
                <tr key={report.id} style={{ color: '#4b5563 !important' }}>
                  <Td style={{ color: '#4b5563 !important' }}>{report.formattedDate}</Td>
                  <Td style={{ color: '#4b5563 !important' }}>{report.dayOfWeek}</Td>
                  <Td style={{ color: '#4b5563 !important' }}>{report.formattedTime}</Td>
                  <Td style={{ color: '#4b5563 !important' }}>{report.type}</Td>
                  <Td>
                    <StatusBadge status={report.status}>
                      {report.status || 'Unknown'}
                    </StatusBadge>
                  </Td>
                  <Td>{formatTimeDiff(report.timeDiffHours, report.timeDiffMinutes)}</Td>
                  <Td>{report.notes || '-'}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <EmptyState>
          No attendance records found for the selected date range.
        </EmptyState>
      )}
    </ReportsContainer>
  );
}

export default MemberReports;
