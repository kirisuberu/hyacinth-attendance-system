import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Calendar, Download, FileXls, Users, Clock, FloppyDisk } from 'phosphor-react';
import { utils, writeFile } from 'xlsx';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-end;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const DateInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7af0;
  }
  
  &:disabled {
    background-color: #b3c0f2;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
  }
`;

const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${props => {
    if (props.status === 'Early') return '#e3f2fd';
    if (props.status === 'On Time') return '#e8f5e9';
    if (props.status === 'Late') return '#ffebee';
    if (props.status === 'Complete') return '#e8f5e9';
    if (props.status === 'Incomplete') return '#fff8e1';
    return '#f5f5f5';
  }};
  color: ${props => {
    if (props.status === 'Early') return '#1565c0';
    if (props.status === 'On Time') return '#2e7d32';
    if (props.status === 'Late') return '#c62828';
    if (props.status === 'Complete') return '#2e7d32';
    if (props.status === 'Incomplete') return '#ef6c00';
    return '#757575';
  }};
  border: 1px solid ${props => {
    if (props.status === 'Early') return '#bbdefb';
    if (props.status === 'On Time') return '#c8e6c9';
    if (props.status === 'Late') return '#ffcdd2';
    if (props.status === 'Complete') return '#c8e6c9';
    if (props.status === 'Incomplete') return '#ffe0b2';
    return '#eeeeee';
  }};
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const ReportsView = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [consolidatedData, setConsolidatedData] = useState([]);

  // Get all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const userSnapshot = await getDocs(usersCollection);
        const usersList = userSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async () => {
    if (!startDate || !endDate) {
      toast.warning('Please select both start and end dates');
      return;
    }

    try {
      setLoading(true);
      
      // Convert string dates to Timestamp objects
      const startTimestamp = Timestamp.fromDate(new Date(startDate));
      const endTimestamp = Timestamp.fromDate(new Date(endDate + 'T23:59:59')); // End of the selected day
      
      // Query attendance records within the date range
      const attendanceRef = collection(db, 'attendance');
      const q = query(
        attendanceRef,
        where('timestamp', '>=', startTimestamp),
        where('timestamp', '<=', endTimestamp)
      );
      
      const querySnapshot = await getDocs(q);
      const records = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setAttendanceData(records);
      
      // Process and consolidate the data
      processAttendanceData(records);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      toast.error('Failed to load attendance data');
    } finally {
      setLoading(false);
    }
  };

  const processAttendanceData = (records) => {
    // Create a map to store consolidated data by user
    const userDataMap = {};
    
    // Initialize with all users
    users.forEach(user => {
      userDataMap[user.id] = {
        userId: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email || 'Unknown',
        email: user.email || 'N/A',
        position: user.position || 'N/A',
        employmentStatus: user.employmentStatus || 'N/A',
        totalDays: 0,
        totalHoursWorked: 0,
        earlyCount: 0,
        onTimeCount: 0,
        lateCount: 0,
        incompleteCount: 0,
        completeCount: 0
      };
    });
    
    // Group records by userId and date
    const recordsByUserAndDate = {};
    
    records.forEach(record => {
      const userId = record.userId;
      if (!userId) return;
      
      const date = record.timestamp.toDate().toISOString().split('T')[0];
      const key = `${userId}_${date}`;
      
      if (!recordsByUserAndDate[key]) {
        recordsByUserAndDate[key] = [];
      }
      
      recordsByUserAndDate[key].push(record);
    });
    
    // Process each group to calculate metrics
    Object.entries(recordsByUserAndDate).forEach(([key, dayRecords]) => {
      const userId = key.split('_')[0];
      if (!userDataMap[userId]) return;
      
      // Sort records by timestamp
      dayRecords.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds);
      
      // Check if we have both IN and OUT records for the day
      const hasTimeIn = dayRecords.some(r => r.type === 'IN');
      const hasTimeOut = dayRecords.some(r => r.type === 'OUT');
      
      // Count the day if at least one record exists
      if (hasTimeIn || hasTimeOut) {
        userDataMap[userId].totalDays += 1;
      }
      
      // Count statuses
      dayRecords.forEach(record => {
        if (record.status === 'Early') userDataMap[userId].earlyCount += 1;
        if (record.status === 'On Time') userDataMap[userId].onTimeCount += 1;
        if (record.status === 'Late') userDataMap[userId].lateCount += 1;
        if (record.status === 'Incomplete') userDataMap[userId].incompleteCount += 1;
        if (record.status === 'Complete') userDataMap[userId].completeCount += 1;
      });
      
      // Calculate hours worked if we have both IN and OUT
      if (hasTimeIn && hasTimeOut) {
        const timeIn = dayRecords.find(r => r.type === 'IN').timestamp.toDate();
        const timeOut = dayRecords.find(r => r.type === 'OUT').timestamp.toDate();
        
        // Calculate hours worked
        const hoursWorked = (timeOut - timeIn) / (1000 * 60 * 60);
        
        // Add to total hours worked (if reasonable - less than 24 hours)
        if (hoursWorked > 0 && hoursWorked < 24) {
          userDataMap[userId].totalHoursWorked += hoursWorked;
        }
      }
    });
    
    // Convert map to array and set state
    const consolidated = Object.values(userDataMap);
    setConsolidatedData(consolidated);
  };

  const exportToExcel = () => {
    if (consolidatedData.length === 0) {
      toast.warning('No data to export');
      return;
    }
    
    try {
      // Create a new workbook
      const wb = utils.book_new();
      
      // Create summary sheet with consolidated data
      const summaryData = consolidatedData.map(user => ({
        'Name': user.name,
        'Email': user.email,
        'Position': user.position,
        'Employment Status': user.employmentStatus,
        'Total Days': user.totalDays,
        'Total Hours Worked': user.totalHoursWorked.toFixed(2),
        'Early Count': user.earlyCount,
        'On Time Count': user.onTimeCount,
        'Late Count': user.lateCount,
        'Complete Count': user.completeCount,
        'Incomplete Count': user.incompleteCount
      }));
      
      const summarySheet = utils.json_to_sheet(summaryData);
      utils.book_append_sheet(wb, summarySheet, 'Summary Report');
      
      // Format time function
      const formatTime = (timestamp) => {
        if (!timestamp) return 'N/A';
        try {
          const date = timestamp.toDate();
          return date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
          });
        } catch (error) {
          console.error('Error formatting time:', error);
          return 'Invalid Time';
        }
      };
      
      // Format date function
      const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A';
        try {
          const date = timestamp.toDate();
          return date.toLocaleDateString();
        } catch (error) {
          console.error('Error formatting date:', error);
          return 'Invalid Date';
        }
      };
      
      // Format duration function (minutes to hours and minutes)
      const formatDuration = (minutes) => {
        if (minutes === undefined || minutes === null) return 'N/A';
        if (minutes >= 60) {
          const hours = Math.floor(minutes / 60);
          const mins = minutes % 60;
          return `${hours}h ${mins}m`;
        } else {
          return `${minutes}m`;
        }
      };
      
      // Group records by date
      const recordsByDate = {};
      
      // Process all attendance records to group by date
      attendanceData.forEach(record => {
        if (!record.timestamp) return;
        
        const date = record.timestamp.toDate();
        const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format
        
        if (!recordsByDate[dateKey]) {
          recordsByDate[dateKey] = [];
        }
        
        recordsByDate[dateKey].push(record);
      });
      
      // Create a sheet for each date
      Object.entries(recordsByDate).forEach(([dateKey, records]) => {
        // Group records by user and type (IN/OUT)
        const userRecords = {};
        
        records.forEach(record => {
          const userId = record.userId;
          if (!userId) return;
          
          if (!userRecords[userId]) {
            userRecords[userId] = {
              name: record.name || 'Unknown',
              inRecord: null,
              outRecord: null
            };
          }
          
          // Assign record to in or out
          if (record.type === 'In') {
            userRecords[userId].inRecord = record;
          } else if (record.type === 'Out') {
            userRecords[userId].outRecord = record;
          }
        });
        
        // Create data for this date's sheet
        const dateData = Object.values(userRecords).map(user => {
          // Calculate shift duration if both in and out records exist
          let duration = 'N/A';
          let timeDiff = null;
          
          if (user.inRecord && user.outRecord) {
            const inTime = user.inRecord.timestamp.toDate();
            const outTime = user.outRecord.timestamp.toDate();
            const diffMinutes = Math.round((outTime - inTime) / (1000 * 60));
            timeDiff = diffMinutes;
          }
          
          return {
            'Name': user.name,
            'Time IN': user.inRecord ? formatTime(user.inRecord.timestamp) : 'N/A',
            'IN Status': user.inRecord ? user.inRecord.status || 'N/A' : 'N/A',
            'Time Difference': user.inRecord && user.inRecord.timeDiff !== undefined ? 
              formatDuration(Math.abs(user.inRecord.timeDiff)) : 'N/A',
            'IN Notes': user.inRecord ? user.inRecord.notes || '' : '',
            'Time OUT': user.outRecord ? formatTime(user.outRecord.timestamp) : 'N/A',
            'OUT Status': user.outRecord ? user.outRecord.status || 'N/A' : 'N/A',
            'Duration': timeDiff !== null ? formatDuration(timeDiff) : 'N/A',
            'OUT Notes': user.outRecord ? user.outRecord.notes || '' : ''
          };
        });
        
        // Skip empty dates
        if (dateData.length === 0) return;
        
        // Format date for sheet name (e.g., "2025-04-30" to "Apr 30")
        const sheetDate = new Date(dateKey);
        const sheetName = sheetDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric'
        }).replace(' ', ' '); // Replace space with non-breaking space for Excel
        
        // Create and add sheet
        const dateSheet = utils.json_to_sheet(dateData);
        utils.book_append_sheet(wb, dateSheet, sheetName);
      });
      
      // Generate filename with date range
      const filename = `Attendance_Report_${startDate}_to_${endDate}.xlsx`;
      
      // Write to file and trigger download
      writeFile(wb, filename);
      
      toast.success('Report exported successfully');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      toast.error('Failed to export report');
    }
  };

  return (
    <Container>
      <Title>
        <Icon><FileXls size={24} /></Icon>
        Attendance Reports
      </Title>
      
      <FilterContainer>
        <FilterRow>
          <FilterGroup>
            <FilterLabel>Start Date</FilterLabel>
            <DateInput
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>End Date</FilterLabel>
            <DateInput
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FilterGroup>
          
          <PrimaryButton onClick={handleSearch} disabled={loading}>
            <Icon><Calendar size={16} /></Icon>
            Generate Report
          </PrimaryButton>
          
          <SecondaryButton 
            onClick={exportToExcel} 
            disabled={loading || consolidatedData.length === 0}
          >
            <Icon><Download size={16} /></Icon>
            Export to Excel
          </SecondaryButton>
        </FilterRow>
      </FilterContainer>
      
      {loading ? (
        <LoadingState>Loading attendance data...</LoadingState>
      ) : consolidatedData.length > 0 ? (
        <ReportTable>
          <TableHead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Position</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Total Days</TableHeader>
              <TableHeader>Hours Worked</TableHeader>
              <TableHeader>Early</TableHeader>
              <TableHeader>On Time</TableHeader>
              <TableHeader>Late</TableHeader>
              <TableHeader>Complete</TableHeader>
              <TableHeader>Incomplete</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            {consolidatedData.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.employmentStatus}</TableCell>
                <TableCell>{user.totalDays}</TableCell>
                <TableCell>{user.totalHoursWorked.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusTag status="Early">{user.earlyCount}</StatusTag>
                </TableCell>
                <TableCell>
                  <StatusTag status="On Time">{user.onTimeCount}</StatusTag>
                </TableCell>
                <TableCell>
                  <StatusTag status="Late">{user.lateCount}</StatusTag>
                </TableCell>
                <TableCell>
                  <StatusTag status="Complete">{user.completeCount}</StatusTag>
                </TableCell>
                <TableCell>
                  <StatusTag status="Incomplete">{user.incompleteCount}</StatusTag>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </ReportTable>
      ) : attendanceData.length === 0 && (startDate && endDate) ? (
        <EmptyState>No attendance records found for the selected date range.</EmptyState>
      ) : (
        <EmptyState>Select a date range and click "Generate Report" to view attendance data.</EmptyState>
      )}
    </Container>
  );
};

export default ReportsView;
