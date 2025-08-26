import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Calendar, Download, FileXls, Users, Clock, FloppyDisk, ChartBar, ChartPie } from 'phosphor-react';
import { utils, writeFile } from 'xlsx';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const ReportsView = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [consolidatedData, setConsolidatedData] = useState([]);

  // Filters and supporting datasets
  const [companies, setCompanies] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [period, setPeriod] = useState('monthly'); // 'monthly' | 'quarterly' | 'yearly'

  // Charts data
  const [seriesData, setSeriesData] = useState([]);
  const [statusDistribution, setStatusDistribution] = useState([]);
  const [completionSeriesData, setCompletionSeriesData] = useState([]);
  const [completionDistribution, setCompletionDistribution] = useState([]);
  // Derived grouping label for charts
  const groupLabel = period === 'monthly' ? 'Daily' : 'Weekly';
  // Chart group toggle: 'in' | 'out'
  const [chartGroup, setChartGroup] = useState('in');
  // Departments dropdown UI state
  const [deptQuery, setDeptQuery] = useState('');
  const [deptOpen, setDeptOpen] = useState(false);
  const deptDropdownRef = useRef(null);
  const statusColorMap = {
    Early: '#42a5f5',
    'On Time': '#66bb6a',
    Late: '#ff9800',
    Absent: '#ef5350',
    Complete: '#26a69a',
    Incomplete: '#ab47bc'
  };

  // Auto-load control
  const [autoLoaded, setAutoLoaded] = useState(false);

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

  // Fetch companies and departments (for filters)
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const [companiesSnap, departmentsSnap] = await Promise.all([
          getDocs(collection(db, 'companies')),
          getDocs(collection(db, 'departments'))
        ]);
        setCompanies(companiesSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        setDepartments(departmentsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error('Error fetching companies/departments:', e);
        toast.error('Failed to load companies/departments');
      }
    };
    fetchMeta();
  }, []);

  // Set default date range to current month (1st day to today) on first load
  useEffect(() => {
    if (!startDate && !endDate) {
      const now = new Date();
      const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const fmt = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
      };
      setStartDate(fmt(firstOfMonth));
      setEndDate(fmt(now));
    }
  }, [startDate, endDate]);

  // Auto-generate report once when defaults are set
  useEffect(() => {
    if (!autoLoaded && startDate && endDate) {
      handleSearch();
      setAutoLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLoaded, startDate, endDate]);

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

      // Compute analytics (series and distribution)
      computeAnalytics(records);
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
        completeCount: 0,
        absentCount: 0
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
      const hasTimeIn = dayRecords.some(r => (r.type || '').toLowerCase() === 'in');
      const hasTimeOut = dayRecords.some(r => (r.type || '').toLowerCase() === 'out');
      
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
        if ((record.type || '').toLowerCase() === 'absent') userDataMap[userId].absentCount += 1;
      });
      
      // Calculate hours worked if we have both IN and OUT
      if (hasTimeIn && hasTimeOut) {
        const inRec = dayRecords.find(r => (r.type || '').toLowerCase() === 'in');
        const outRec = dayRecords.find(r => (r.type || '').toLowerCase() === 'out');
        if (inRec && outRec && inRec.timestamp && outRec.timestamp) {
          const timeIn = inRec.timestamp.toDate();
          const timeOut = outRec.timestamp.toDate();
          
          // Calculate hours worked
          const hoursWorked = (timeOut - timeIn) / (1000 * 60 * 60);
          
          // Add to total hours worked (if reasonable - less than 24 hours)
          if (hoursWorked > 0 && hoursWorked < 24) {
            userDataMap[userId].totalHoursWorked += hoursWorked;
          }
        }
      }
    });
    
    // Convert map to array and set state
    const consolidated = Object.values(userDataMap);
    setConsolidatedData(consolidated);
  };

  // Compute distribution and time-series based on filters and period
  const computeAnalytics = (records) => {
    try {
      // Build allowed user set based on filters
      const allowedUserIds = new Set(
        users
          .filter(u => {
            const matchesCompany = !selectedCompany || (Array.isArray(u.companies) && u.companies.includes(selectedCompany)) || u.company === selectedCompany;
            const matchesDept = selectedDepartments.length === 0 || selectedDepartments.some(did => (Array.isArray(u.departments) && u.departments.includes(did)) || u.departmentId === did);
            return matchesCompany && matchesDept;
          })
          .map(u => u.id)
      );

      const filtered = records.filter(r => !selectedCompany && selectedDepartments.length === 0 ? true : allowedUserIds.has(r.userId));

      // Distributions (separated)
      const inDistribution = { Early: 0, 'On Time': 0, Late: 0, Absent: 0 };
      const outDistribution = { Complete: 0, Incomplete: 0 };

      // Time buckets (separated)
      const bucketInMap = new Map(); // key -> { key, label, early, onTime, late, absent, total }
      const bucketOutMap = new Map(); // key -> { key, label, complete, incomplete, total }

      const getBucketKeyLabel = (date) => {
        const y = date.getFullYear();
        if (period === 'monthly') {
          // Daily buckets
          const key = `${y}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
          const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          return { key, label };
        }
        // Weekly buckets (ISO week number)
        const getISOWeekInfo = (d) => {
          const dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
          const dayNum = dt.getUTCDay() || 7; // Sun=0 -> 7
          dt.setUTCDate(dt.getUTCDate() + 4 - dayNum); // Thursday of this week
          const weekYear = dt.getUTCFullYear();
          const yearStart = new Date(Date.UTC(weekYear, 0, 1));
          const week = Math.ceil(((dt - yearStart) / 86400000 + 1) / 7);
          return { weekYear, week };
        };
        const { weekYear, week } = getISOWeekInfo(date);
        const key = `${weekYear}-W${String(week).padStart(2, '0')}`;
        const label = `W${week} ${weekYear}`;
        return { key, label };
      };

      filtered.forEach(r => {
        if (!r.timestamp) return;
        const d = r.timestamp.toDate();
        const { key, label } = getBucketKeyLabel(d);
        const type = (r.type || '').toLowerCase();
        const status = r.status;

        // Ensure buckets exist
        if (!bucketInMap.has(key)) {
          bucketInMap.set(key, { key, label, total: 0, early: 0, onTime: 0, late: 0, absent: 0 });
        }
        if (!bucketOutMap.has(key)) {
          bucketOutMap.set(key, { key, label, total: 0, complete: 0, incomplete: 0 });
        }

        // Time In statuses
        if (type === 'in') {
          if (status === 'Early') { bucketInMap.get(key).early += 1; inDistribution.Early += 1; bucketInMap.get(key).total += 1; }
          else if (status === 'On Time') { bucketInMap.get(key).onTime += 1; inDistribution['On Time'] += 1; bucketInMap.get(key).total += 1; }
          else if (status === 'Late') { bucketInMap.get(key).late += 1; inDistribution.Late += 1; bucketInMap.get(key).total += 1; }
        }

        // Absent is a special record
        if (type === 'absent') {
          bucketInMap.get(key).absent += 1;
          inDistribution.Absent += 1;
          bucketInMap.get(key).total += 1;
        }

        // Time Out completion statuses
        if (type === 'out') {
          if (status === 'Complete') { bucketOutMap.get(key).complete += 1; outDistribution.Complete += 1; bucketOutMap.get(key).total += 1; }
          else if (status === 'Incomplete') { bucketOutMap.get(key).incomplete += 1; outDistribution.Incomplete += 1; bucketOutMap.get(key).total += 1; }
        }
      });

      // Sort buckets chronologically
      const seriesIn = Array.from(bucketInMap.values()).sort((a, b) => a.key.localeCompare(b.key));
      const seriesOut = Array.from(bucketOutMap.values()).sort((a, b) => a.key.localeCompare(b.key));
      setSeriesData(seriesIn);
      setCompletionSeriesData(seriesOut);
      setStatusDistribution(
        Object.entries(inDistribution)
          .map(([name, value]) => ({ name, value }))
          .filter(item => item.value > 0)
      );
      setCompletionDistribution(
        Object.entries(outDistribution)
          .map(([name, value]) => ({ name, value }))
          .filter(item => item.value > 0)
      );
    } catch (e) {
      console.error('Error computing analytics:', e);
      setSeriesData([]);
      setStatusDistribution([]);
      setCompletionSeriesData([]);
      setCompletionDistribution([]);
    }
  };

  // Recompute analytics when filters or data change
  useEffect(() => {
    if (attendanceData && attendanceData.length > 0) {
      computeAnalytics(attendanceData);
    } else {
      setSeriesData([]);
      setStatusDistribution([]);
      setCompletionSeriesData([]);
      setCompletionDistribution([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, selectedCompany, selectedDepartments, attendanceData]);

  // Ensure consolidated table reflects data once users are available
  useEffect(() => {
    if (users && users.length > 0 && attendanceData && attendanceData.length > 0) {
      processAttendanceData(attendanceData);
    }
  }, [users]);

  // Close departments dropdown when clicking outside
  useEffect(() => {
    if (!deptOpen) return;
    const handler = (e) => {
      if (deptDropdownRef.current && !deptDropdownRef.current.contains(e.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [deptOpen]);

  // Handlers for departments selector
  const toggleDept = (id) => {
    setSelectedDepartments((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const selectAllDepts = () => setSelectedDepartments(departments.map((d) => d.id));
  const clearAllDepts = () => setSelectedDepartments([]);

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
        'Absent Count': user.absentCount,
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
        // Group records by user and type (IN/OUT/Absent)
        const userRecords = {};
        
        records.forEach(record => {
          const userId = record.userId;
          if (!userId) return;
          
          if (!userRecords[userId]) {
            userRecords[userId] = {
              name: record.name || 'Unknown',
              inRecord: null,
              outRecord: null,
              absentRecord: null
            };
          }
          
          // Assign record to in, out, or absent
          if (record.type === 'In') {
            userRecords[userId].inRecord = record;
          } else if (record.type === 'Out') {
            userRecords[userId].outRecord = record;
          } else if (record.type === 'Absent') {
            userRecords[userId].absentRecord = record;
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
          
          // If this is an absent record
          if (user.absentRecord) {
            return {
              'Name': user.name,
              'Time IN': 'N/A',
              'IN Status': 'Absent',
              'Time Difference': 'N/A',
              'IN Notes': user.absentRecord.notes || '',
              'Time OUT': 'N/A',
              'OUT Status': 'N/A',
              'Duration': 'N/A',
              'OUT Notes': ''
            };
          }
          
          // For regular attendance records
          return {
            'Name': user.name,
            'Time IN': user.inRecord ? formatTime(user.inRecord.timestamp) : 'N/A',
            'IN Status': user.inRecord ? (user.inRecord.status || 'No Schedule') : 'N/A',
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

          <FilterGroup>
            <FilterLabel>Company</FilterLabel>
            <Select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="">All Companies</option>
              {companies.map(c => (
                <option key={c.id} value={c.id}>{c.name || c.code || c.id}</option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Departments</FilterLabel>
            <Dropdown ref={deptDropdownRef}>
              <DropdownButton type="button" onClick={() => setDeptOpen((o) => !o)}>
                {selectedDepartments.length > 0
                  ? `${selectedDepartments.length} selected`
                  : 'All Departments'}
              </DropdownButton>
              {deptOpen && (
                <DropdownPanel>
                  <SearchInput
                    type="text"
                    placeholder="Search departments..."
                    value={deptQuery}
                    onChange={(e) => setDeptQuery(e.target.value)}
                  />
                  <ActionBar>
                    <SmallButton type="button" onClick={selectAllDepts} disabled={departments.length === 0}>
                      Select all
                    </SmallButton>
                    <SmallButton type="button" onClick={clearAllDepts} disabled={selectedDepartments.length === 0}>
                      Clear
                    </SmallButton>
                  </ActionBar>
                  <CheckboxList>
                    {departments
                      .filter((d) => {
                        const q = deptQuery.trim().toLowerCase();
                        if (!q) return true;
                        const name = (d.name || '').toLowerCase();
                        const code = (d.code || '').toLowerCase();
                        return name.includes(q) || code.includes(q);
                      })
                      .map((d) => {
                        const checked = selectedDepartments.includes(d.id);
                        return (
                          <CheckboxItem key={d.id}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleDept(d.id)}
                            />
                            <span>{d.name}{d.code ? ` (${d.code})` : ''}</span>
                          </CheckboxItem>
                        );
                      })}
                    {departments.filter((d) => {
                      const q = deptQuery.trim().toLowerCase();
                      if (!q) return false;
                      const name = (d.name || '').toLowerCase();
                      const code = (d.code || '').toLowerCase();
                      return !(name.includes(q) || code.includes(q));
                    }).length === departments.length && (
                      <EmptyState>No departments found</EmptyState>
                    )}
                  </CheckboxList>
                </DropdownPanel>
              )}
            </Dropdown>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Period</FilterLabel>
            <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </Select>
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

      {/* Statistics & Graphs */}
      {!loading && consolidatedData.length > 0 && (
        <>
          <StatsContainer>
            <StatCard>
              <StatLabel>Total Users</StatLabel>
              <StatValue>
                <Users size={18} style={{ marginRight: '6px' }} />
                {consolidatedData.length}
              </StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Total Days</StatLabel>
              <StatValue>{consolidatedData.reduce((s, u) => s + (u.totalDays || 0), 0)}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Total Hours Worked</StatLabel>
              <StatValue>{consolidatedData.reduce((s, u) => s + (u.totalHoursWorked || 0), 0).toFixed(2)}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Absent Count</StatLabel>
              <StatValue>{consolidatedData.reduce((s, u) => s + (u.absentCount || 0), 0)}</StatValue>
            </StatCard>
          </StatsContainer>

          <ChartsHeader>
            <ToggleGroup role="tablist" aria-label="Chart Group">
              <ToggleButton
                type="button"
                aria-pressed={chartGroup === 'in'}
                className={chartGroup === 'in' ? 'active' : ''}
                onClick={() => setChartGroup('in')}
              >
                Time In
              </ToggleButton>
              <ToggleButton
                type="button"
                aria-pressed={chartGroup === 'out'}
                className={chartGroup === 'out' ? 'active' : ''}
                onClick={() => setChartGroup('out')}
              >
                Time Out
              </ToggleButton>
            </ToggleGroup>
          </ChartsHeader>

          <ChartsGrid>
            {chartGroup === 'in' ? (
              <>
                <ChartCard>
                  <ChartTitle>
                    <ChartBar size={18} />
                    Attendance Trend (Time In) — {groupLabel}
                  </ChartTitle>
                  <div style={{ width: '100%', height: '320px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={seriesData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="early" name="Early" stackId="a" fill={statusColorMap.Early} />
                        <Bar dataKey="onTime" name="On Time" stackId="a" fill={statusColorMap['On Time']} />
                        <Bar dataKey="late" name="Late" stackId="a" fill={statusColorMap.Late} />
                        <Bar dataKey="absent" name="Absent" stackId="a" fill={statusColorMap.Absent} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartCard>

                <ChartCard>
                  <ChartTitle>
                    <ChartPie size={18} />
                    Status Distribution (Time In)
                  </ChartTitle>
                  <div style={{ width: '100%', height: '320px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie dataKey="value" data={statusDistribution} nameKey="name" outerRadius={120} label>
                          {statusDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={statusColorMap[entry.name] || '#8884d8'} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </ChartCard>
              </>
            ) : (
              <>
                <ChartCard>
                  <ChartTitle>
                    <ChartBar size={18} />
                    Completion Trend (Time Out) — {groupLabel}
                  </ChartTitle>
                  <div style={{ width: '100%', height: '320px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={completionSeriesData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="complete" name="Complete" stackId="b" fill={statusColorMap.Complete} />
                        <Bar dataKey="incomplete" name="Incomplete" stackId="b" fill={statusColorMap.Incomplete} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartCard>

                <ChartCard>
                  <ChartTitle>
                    <ChartPie size={18} />
                    Completion Distribution (Time Out)
                  </ChartTitle>
                  <div style={{ width: '100%', height: '320px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie dataKey="value" data={completionDistribution} nameKey="name" outerRadius={120} label>
                          {completionDistribution.map((entry, index) => (
                            <Cell key={`cell-comp-${index}`} fill={statusColorMap[entry.name] || '#8884d8'} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </ChartCard>
              </>
            )}
          </ChartsGrid>
        </>
      )}

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

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const MultiSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  min-height: 120px;
  background-color: #fff;
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

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1rem;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ChartCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

// Departments searchable dropdown styles
const Dropdown = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    border-color: #cfcfcf;
  }
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 20;
  width: 320px;
  max-height: 320px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: 0.5rem;
  overflow: hidden;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.15);
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SmallButton = styled.button`
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fafafa;
  cursor: pointer;
  &:hover { background: #f2f2f2; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const CheckboxList = styled.div`
  overflow: auto;
  max-height: 220px;
  padding: 0.25rem;
  border-top: 1px solid #f0f0f0;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  input { cursor: pointer; }
  &:hover { background: #fafafa; }
`;

// Charts toggle styles
const ChartsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.25rem 0 1rem 0;
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;
  border: none;
  background: #fff;
  color: #333;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
  &:hover {
    background: #f7f7f7;
  }
  &.active {
    background: #6e8efb;
    color: #fff;
  }
`;