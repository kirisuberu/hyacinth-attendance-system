import React from 'react';
import { Card, CardTitle, CardContent, Grid, StatusBadge } from './DashboardComponents';

const DashboardHome = ({ attendanceStatus, lastRecord }) => {
  return (
    <>
      <Grid>
        <Card>
          <CardTitle>Today's Schedule</CardTitle>
          <CardContent>
            <p>No schedule for today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardTitle>Attendance Status</CardTitle>
          <CardContent>
            {attendanceStatus ? (
              <>
                <p>Current Status: 
                  <StatusBadge status={attendanceStatus}>
                    {attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}
                  </StatusBadge>
                </p>
                {lastRecord && (
                  <p>Last action: {new Date(lastRecord.timestamp.toDate()).toLocaleString()}</p>
                )}
              </>
            ) : (
              <p>You haven't clocked in today</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardTitle>Recent Activity</CardTitle>
          <CardContent>
            {lastRecord ? (
              <p>Last {lastRecord.type === 'In' ? 'Time In' : 'Time Out'}: {new Date(lastRecord.timestamp.toDate()).toLocaleString()}</p>
            ) : (
              <p>No recent activity</p>
            )}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default DashboardHome;
