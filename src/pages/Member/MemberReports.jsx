import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import styled from 'styled-components';
import { collection, query, where, getDocs, Timestamp, orderBy, onSnapshot } from 'firebase/firestore';
import { format, parseISO } from 'date-fns';

const ReportsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #111827;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 650px;
  border-collapse: collapse;
  color: #111827;
  table-layout: fixed;

  @media (min-width: 768px) {
    min-width: 900px;
  }

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
  padding: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  color: #4b5563;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  
  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 0.875rem;
  }
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  
  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 0.875rem;
  }
`;

const DateFilter = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.875rem;
  width: 100%;
  
  @media (min-width: 640px) {
    width: auto;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  
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
  background: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('early')) return '#DBEAFE';
    if (props.status?.toLowerCase().includes('on time')) return '#DCFCE7';
    if (props.status?.toLowerCase().includes('overtime')) return '#FEF3C7';
    return '#F3F4F6';
  }};
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('on time')) return '#166534';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#1F2937';
  }};
  
  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
  }
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NoDataMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #4b5563;
  font-weight: 500;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
    gap: 0.75rem;
  }
`;

const PageButton = styled.button`
  padding: 0.375rem 0.625rem;
  border: 1px solid #e5e7eb;
  background: ${props => props.active ? '#3b82f6' : 'white'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  
  &:hover {
    background: ${props => props.active ? '#2563eb' : '#f9fafb'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
`;

const LoadingState = styled.div`
  padding: 2rem;
  text-align: center;
  color: #4b5563;
  font-weight: 500;
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
        <NoDataMessage>
          No attendance records found for the selected date range.
        </NoDataMessage>
      )}
    </ReportsContainer>
  );
}

export default MemberReports;
