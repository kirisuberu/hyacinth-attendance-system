import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';
import { Calendar } from 'phosphor-react';

const AttendanceGrid = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    if (!auth.currentUser) return;

    try {
      setLoading(true);
      
      // Get attendance data for the last 365 days
      const endDate = new Date();
      const startDate = subDays(endDate, 364); // 365 days total including today
      
      // Fetch both attendance and absence records in parallel
      const [attendanceSnapshot, absencesSnapshot] = await Promise.all([
        getDocs(query(
          collection(db, 'attendance'),
          where('userId', '==', auth.currentUser.uid),
          where('timestamp', '>=', startDate),
          orderBy('timestamp', 'desc')
        )),
        getDocs(query(
          collection(db, 'absences'),
          where('userId', '==', auth.currentUser.uid),
          where('date', '>=', format(startDate, 'yyyy-MM-dd'))
        ))
      ]);

      // Process attendance records
      const attendanceRecords = (attendanceSnapshot?.docs || []).map(doc => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp.toDate()
      }));

      // Process absence records and convert to attendance format
      const absenceRecords = (absencesSnapshot?.docs || []).map(doc => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          type: 'In',
          status: data.type === 'pto' ? 'PTO' : 'Absent',
          timestamp: new Date(data.date + 'T00:00:00')
        };
      });

      // Combine all records
      const allRecords = [...attendanceRecords, ...absenceRecords];
      setAttendanceData(allRecords);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Generate grid data for the last 52 weeks (364 days)
  const generateGridData = () => {
    const gridData = [];
    const today = new Date();
    
    // Calculate the starting point: 52 weeks ago from the most recent Sunday
    const todayDayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, etc.
    const mostRecentSunday = new Date(today);
    mostRecentSunday.setDate(today.getDate() - todayDayOfWeek);
    
    // Start from 51 weeks ago (52 weeks total including current week)
    const startDate = new Date(mostRecentSunday);
    startDate.setDate(mostRecentSunday.getDate() - (51 * 7));
    
    // Generate 52 weeks of data
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      
      for (let day = 0; day < 7; day++) {
        // Calculate date: start date + (week * 7) + day
        // This ensures day 0 is always Sunday, day 1 is Monday, etc.
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + day);
        
        const dayStart = startOfDay(currentDate);
        
        // Verify the day of week matches our expectation
        const actualDayOfWeek = currentDate.getDay();
        if (actualDayOfWeek !== day) {
          console.warn(`Day mismatch: expected ${day}, got ${actualDayOfWeek} for date ${currentDate.toDateString()}`);
        }
        
        // Find attendance record for this day
        const dayRecords = attendanceData.filter(record => 
          isSameDay(record.timestamp, dayStart)
        );
        
        // Determine the status for this day
        let status = 'dayoff'; // default for no records
        let hasTimeIn = false;
        let hasTimeOut = false;
        let hasAbsentRecord = false;
        
        dayRecords.forEach(record => {
          if (record.type === 'In') {
            hasTimeIn = true;
            if (record.status === 'Early') status = 'early';
            else if (record.status === 'On Time') status = 'ontime';
            else if (record.status === 'Late') status = 'late';
            else if (record.status === 'PTO') {
              status = 'pto';
              hasAbsentRecord = true;
            }
            else if (record.status === 'Absent') {
              status = 'absent';
              hasAbsentRecord = true;
            }
            else if (record.status === 'NCNS') {
              status = 'ncns';
              hasAbsentRecord = true;
            }
          }
          if (record.type === 'Out') {
            hasTimeOut = true;
          }
        });
        
        // If no time in record found, check if it's a future date
        if (!hasTimeIn && currentDate > today) {
          status = 'future';
        }
        // If no records at all and not future, it's a day off (empty)
        else if (!hasTimeIn && !hasAbsentRecord && currentDate <= today) {
          status = 'dayoff';
        }
        
        weekData.push({
          date: currentDate,
          status,
          hasTimeIn,
          hasTimeOut,
          records: dayRecords,
          dayOfWeek: currentDate.getDay() // Add this for debugging
        });
      }
      
      gridData.push(weekData);
    }
    
    return gridData;
  };

  const gridData = generateGridData();
  
  // Get month labels for the top of the grid
  const getMonthLabels = () => {
    const labels = [];
    const today = new Date();
    
    // Calculate which week each month starts in
    const monthsWithWeekPositions = [];
    
    for (let week = 0; week < 52; week++) {
      // Get the first day of this week
      const weekStartDate = subDays(today, (51 - week) * 7 + 6); // Sunday of this week
      const weekStartMonth = weekStartDate.getMonth();
      const weekStartYear = weekStartDate.getFullYear();
      
      // Check if this is the first week of a new month
      const isFirstWeekOfMonth = weekStartDate.getDate() <= 7;
      
      if (isFirstWeekOfMonth) {
        const monthKey = `${weekStartYear}-${weekStartMonth}`;
        const existingMonth = monthsWithWeekPositions.find(m => m.key === monthKey);
        
        if (!existingMonth) {
          monthsWithWeekPositions.push({
            key: monthKey,
            weekIndex: week,
            label: format(weekStartDate, 'MMM'),
            date: new Date(weekStartYear, weekStartMonth, 1)
          });
        }
      }
    }
    
    return monthsWithWeekPositions.sort((a, b) => a.weekIndex - b.weekIndex);
  };

  const monthLabels = getMonthLabels();

  const getTooltipText = (dayData) => {
    if (dayData.status === 'future') {
      return `${format(dayData.date, 'MMM d, yyyy')} - Future date`;
    }
    
    if (dayData.records.length === 0) {
      return `${format(dayData.date, 'MMM d, yyyy')} - Day off`;
    }
    
    const timeInRecord = dayData.records.find(r => r.type === 'In');
    const timeOutRecord = dayData.records.find(r => r.type === 'Out');
    
    let tooltip = `${format(dayData.date, 'MMM d, yyyy')}`;
    
    if (timeInRecord) {
      if (timeInRecord.status === 'PTO') {
        tooltip += `\nPTO: ${timeInRecord.reason || 'No reason provided'}`;
      } else if (timeInRecord.status === 'Absent') {
        const absentReason = timeInRecord.absentReason ? ` (${timeInRecord.absentReason})` : '';
        tooltip += `\nAbsent${absentReason}: ${timeInRecord.reason || 'No reason provided'}`;
      } else if (timeInRecord.status === 'NCNS') {
        tooltip += `\nNo Call No Show: ${timeInRecord.reason || 'No reason provided'}`;
      } else {
        tooltip += `\nTime In: ${format(timeInRecord.timestamp, 'h:mm a')} (${timeInRecord.status})`;
      }
    }
    
    if (timeOutRecord) {
      tooltip += `\nTime Out: ${format(timeOutRecord.timestamp, 'h:mm a')}`;
    }
    
    return tooltip;
  };

  if (loading) {
    return (
      <ContainerWrapper>
        <Header>
          <Calendar size={20} />
          <Title>Attendance History</Title>
        </Header>
        <LoadingText>Loading attendance history...</LoadingText>
      </ContainerWrapper>
    );
  }

  return (
    <ContainerWrapper>
      <Header>
        <Calendar size={20} />
        <Title>Attendance History</Title>
        <SubTitle>Past year of attendance</SubTitle>
      </Header>
      
      <GridContainer>
        {/* Month labels - positioned to align with centered grid */}
        <MonthLabelsContainer>
          {/* Day labels spacer */}
          <div style={{ width: '2rem', flexShrink: 0 }}></div>
          {/* Grid area for month labels */}
          <div style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', display: 'flex', gap: '2px' }}>
              {Array.from({ length: 52 }, (_, weekIndex) => {
                const monthLabel = monthLabels.find(m => m.weekIndex === weekIndex);
                return (
                  <div 
                    key={weekIndex} 
                    style={{ 
                      width: '12px',
                      height: '1rem',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {monthLabel && (
                      <MonthLabel style={{ position: 'absolute', top: 0, left: 0, whiteSpace: 'nowrap' }}>
                        {monthLabel.label}
                      </MonthLabel>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </MonthLabelsContainer>
        
        <GridWrapper>
          {/* Day labels */}
          <DayLabelsContainer>
            <DayLabel>Sun</DayLabel>
            <DayLabel></DayLabel>
            <DayLabel>Tue</DayLabel>
            <DayLabel></DayLabel>
            <DayLabel>Thu</DayLabel>
            <DayLabel></DayLabel>
            <DayLabel>Sat</DayLabel>
          </DayLabelsContainer>
          
          {/* Grid */}
          <Grid>
            {gridData.map((week, weekIndex) => (
              <WeekColumn key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <GridSquare
                    key={dayIndex}
                    status={day.status}
                    title={getTooltipText(day)}
                  />
                ))}
              </WeekColumn>
            ))}
          </Grid>
        </GridWrapper>
      </GridContainer>
      
      <Legend>
        <LegendItem>
          <LegendSquare status="dayoff" />
          <LegendLabel>Day Off</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="pto" />
          <LegendLabel>PTO</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="absent" />
          <LegendLabel>Absent</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="ncns" />
          <LegendLabel>NCNS</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="late" />
          <LegendLabel>Late</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="ontime" />
          <LegendLabel>On Time</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSquare status="early" />
          <LegendLabel>Early</LegendLabel>
        </LegendItem>
      </Legend>
    </ContainerWrapper>
  );
};

export default AttendanceGrid;

const ContainerWrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #eee;
  margin-bottom: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const SubTitle = styled.span`
  margin-left: auto;
  font-size: 0.8rem;
  color: #666;
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const GridContainer = styled.div`
  margin-bottom: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const MonthLabelsContainer = styled.div`
  position: relative;
  height: 1rem;
  margin-bottom: 0.5rem;
  min-width: fit-content;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MonthLabelsInner = styled.div`
  position: relative;
  display: flex;
`;

const MonthLabel = styled.div`
  position: absolute;
  font-size: 0.75rem;
  color: #666;
  white-space: nowrap;
`;

const GridWrapper = styled.div`
  display: flex;
  min-width: fit-content;
  width: 100%;
  justify-content: center;
`;

const DayLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  width: 1.5rem;
  flex-shrink: 0;
`;

const DayLabel = styled.div`
  height: 12px;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 2px;
  line-height: 1;
`;

const Grid = styled.div`
  display: flex;
  gap: 2px;
  min-width: fit-content;
  
  @media (max-width: 768px) {
    gap: 1px;
  }
`;

const WeekColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  @media (max-width: 768px) {
    gap: 1px;
  }
`;

const GridSquare = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${props => {
    switch (props.status) {
      case 'early': return '#55B6FF'; // light blue
      case 'ontime': return '#66BB6A'; // green
      case 'late': return '#FFA500'; // orange
      case 'pto': return '#9c27b0'; // purple
      case 'absent': return '#dc2626'; // red
      case 'ncns': return '#000000'; // black
      case 'future': return '#f3f4f6'; // light gray
      case 'dayoff': return 'transparent'; // empty/transparent for day off
      default: return '#e5e7eb'; // gray
    }
  }};
  border: ${props => {
    // Add subtle border for dayoff to make it visible
    if (props.status === 'dayoff') return '1px solid #e5e7eb';
    return 'none';
  }};
  
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
  
  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease;
    ${props => props.status === 'dayoff' && 'background-color: #f9f9f9;'}
  }
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #666;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.65rem;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const LegendLabel = styled.span`
  font-size: 0.75rem;
  color: #555;
  font-weight: 500;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

const LegendSquare = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
  background-color: ${props => {
    switch (props.status) {
      case 'early': return '#55B6FF';
      case 'ontime': return '#66BB6A';
      case 'late': return '#FFA500';
      case 'pto': return '#9c27b0';
      case 'absent': return '#dc2626';
      case 'ncns': return '#000000';
      case 'dayoff': return 'transparent';
      default: return '#e5e7eb';
    }
  }};
  border: ${props => {
    if (props.status === 'dayoff') return '1px solid #e5e7eb';
    return 'none';
  }};
  
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;
