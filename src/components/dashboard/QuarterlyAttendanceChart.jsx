import React from 'react';
import styled from 'styled-components';
import { Card } from './DashboardComponents';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartBar } from 'phosphor-react';


/**
 * QuarterlyAttendanceChart - Displays a bar chart of quarterly attendance data
 * 
 * @param {Array} data - Array of objects containing monthly attendance data
 * @returns {JSX.Element} - The quarterly attendance chart component
 */
const QuarterlyAttendanceChart = ({ data }) => {
  return (
    <ChartCard>
      <ChartTitle>
        <ChartBar size={20} />
        Quarterly Attendance Breakdown
      </ChartTitle>
      <div style={{ width: '100%', height: '330px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data || []}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" name="Total" fill="#8884d8" />
            <Bar dataKey="early" name="Early" fill="#42a5f5" />
            <Bar dataKey="onTime" name="On Time" fill="#66bb6a" />
            <Bar dataKey="late" name="Late" fill="#ff9800" />
            <Bar dataKey="pto" name="PTO" fill="#9c27b0" />
            <Bar dataKey="absent" name="Absent" fill="#f44336" />
            <Bar dataKey="ncns" name="NCNS" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};

export default QuarterlyAttendanceChart;

const ChartCard = styled(Card)`
  padding: 1.5rem;
  margin-top: 1.5rem;
  height: 400px;
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;