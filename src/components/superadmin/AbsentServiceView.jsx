import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardContent } from '../dashboard/DashboardComponents';
import { runAbsentCheck, getAllAttendanceRecords } from '../../services/attendanceService';
import { runAbsentMarkingJob, getJobHistory } from '../../services/scheduledJobsService';
import { getAttendanceRules } from '../../services/systemSettingsService';
import { toast } from 'react-toastify';
import { ClockClockwise, ArrowClockwise, Calendar, UserCircle, CalendarX } from 'phosphor-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RunContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #600000;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const InfoBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1rem;
  border-left: 4px solid #800000;
`;

const ResultBox = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props => props.success ? '#e8f5e9' : '#ffebee'};
  border-radius: 4px;
  border-left: 4px solid ${props => props.success ? '#4caf50' : '#f44336'};
`;

const AbsencesContainer = styled.div`
  margin-top: 1.5rem;
`;

const AbsencesList = styled.div`
  margin-top: 1rem;
`;

const AbsenceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
`;

const UserEmail = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const AbsenceTime = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;

const JobHistoryItem = styled.div`
  padding: 0.75rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  border-left: 4px solid ${props => props.status === 'completed' && props.success ? '#4caf50' : props.status === 'failed' ? '#f44336' : props.status === 'running' ? '#2196f3' : '#9e9e9e'};
`;

const JobStatus = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => props.status === 'completed' ? '#e8f5e9' : props.status === 'failed' ? '#ffebee' : props.status === 'running' ? '#e3f2fd' : '#f5f5f5'};
  color: ${props => props.status === 'completed' ? '#2e7d32' : props.status === 'failed' ? '#c62828' : props.status === 'running' ? '#1565c0' : '#757575'};
  margin-left: 0.5rem;
`;

const TabContainer = styled.div`
  margin-top: 1.5rem;
`;

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  color: ${props => props.active ? '#800000' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.active ? '#800000' : 'transparent'};
    border-radius: 3px 3px 0 0;
  }
  
  &:hover {
    color: #800000;
  }
`;

const AbsentServiceView = () => {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [recentAbsences, setRecentAbsences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [absentThreshold, setAbsentThreshold] = useState(300); // Default 5 hours
  const [activeTab, setActiveTab] = useState('manual');
  const [jobHistory, setJobHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    // Fetch the current absent threshold
    const fetchAbsentThreshold = async () => {
      try {
        const rules = await getAttendanceRules();
        setAbsentThreshold(rules.absent?.threshold || 300);
      } catch (error) {
        console.error('Error fetching absent threshold:', error);
      }
    };

    // Fetch recent absences
    const fetchRecentAbsences = async () => {
      try {
        setLoading(true);
        const absenceRecords = await getAllAttendanceRecords({
          type: 'Absent',
          limit: 20, // Show the 20 most recent absences
        });
        setRecentAbsences(absenceRecords);
      } catch (error) {
        console.error('Error fetching recent absences:', error);
        toast.error('Failed to load recent absences');
      } finally {
        setLoading(false);
      }
    };
    
    // Fetch job history
    const fetchJobHistory = async () => {
      try {
        setLoadingHistory(true);
        const history = await getJobHistory('absent_marking', 10);
        setJobHistory(history);
      } catch (error) {
        console.error('Error fetching job history:', error);
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchAbsentThreshold();
    fetchRecentAbsences();
    fetchJobHistory();
  }, []);

  const handleRunAbsentCheck = async () => {
    try {
      setRunning(true);
      setResult(null);

      const count = await runAbsentCheck();
      
      // Set the result
      setResult({
        success: true,
        count,
        timestamp: new Date().toISOString()
      });

      // If any users were marked absent, refresh the list
      if (count > 0) {
        const absenceRecords = await getAllAttendanceRecords({
          type: 'Absent',
          limit: 20,
        });
        setRecentAbsences(absenceRecords);
      }

      toast.success(`Absent check completed. ${count} user(s) marked as absent.`);
    } catch (error) {
      console.error('Error running absent check:', error);
      setResult({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      toast.error('Failed to run absent check');
    } finally {
      setRunning(false);
    }
  };
  
  const handleRunScheduledJob = async () => {
    try {
      setRunning(true);
      setResult(null);
      
      // Run the scheduled job and get the result
      const jobResult = await runAbsentMarkingJob();
      
      // Set the result
      setResult({
        success: jobResult.success,
        count: jobResult.count,
        timestamp: jobResult.timestamp,
        isScheduledJob: true
      });
      
      // Refresh the job history
      const history = await getJobHistory('absent_marking', 10);
      setJobHistory(history);
      
      // If any users were marked absent, refresh the list
      if (jobResult.count > 0) {
        const absenceRecords = await getAllAttendanceRecords({
          type: 'Absent',
          limit: 20,
        });
        setRecentAbsences(absenceRecords);
      }
      
      toast.success(`Scheduled job completed. ${jobResult.count} user(s) marked as absent.`);
    } catch (error) {
      console.error('Error running scheduled job:', error);
      setResult({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
        isScheduledJob: true
      });
      toast.error('Failed to run scheduled job');
    } finally {
      setRunning(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    let date;
    if (timestamp.seconds) {
      // Firestore timestamp
      date = new Date(timestamp.seconds * 1000);
    } else {
      // ISO string or other date format
      date = new Date(timestamp);
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <Card>
      <CardTitle>
        <Icon><CalendarX size={24} weight="bold" /></Icon>
        Absent Service
      </CardTitle>
      <CardContent>
        <Container>
          <InfoBox>
            <p>
              The Absent Service automatically marks users as "Absent" when they fail to time in after{' '}
              <strong>{absentThreshold}</strong> minutes ({Math.round((absentThreshold / 60) * 10) / 10} hours) 
              past their scheduled shift. You can run a manual check below or adjust the threshold in the Rules section.
            </p>
          </InfoBox>
          
          <TabContainer>
            <TabButtons>
              <TabButton 
                active={activeTab === 'manual'} 
                onClick={() => setActiveTab('manual')}
              >
                Manual Check
              </TabButton>
              <TabButton 
                active={activeTab === 'scheduled'} 
                onClick={() => setActiveTab('scheduled')}
              >
                Scheduled Jobs
              </TabButton>
            </TabButtons>
            
            {activeTab === 'manual' ? (
              <RunContainer>
                <h3>Run Manual Absent Check</h3>
                <p>
                  Click the button below to manually run the absent check for all users with scheduled shifts today.
                  This will mark users as absent if they haven't timed in and the threshold time has passed since their scheduled start time.
                </p>
                <div>
                  <ActionButton 
                    onClick={handleRunAbsentCheck} 
                    disabled={running}
                  >
                    {running ? (
                      <>
                        <Icon><ArrowClockwise size={16} /></Icon>
                        Running...
                      </>
                    ) : (
                      <>
                        <Icon><ClockClockwise size={16} /></Icon>
                        Run Absent Check Now
                      </>
                    )}
                  </ActionButton>
                </div>

                {result && !result.isScheduledJob && (
                  <ResultBox success={result.success}>
                    <p>
                      <strong>Last run:</strong> {formatDate(result.timestamp)}
                    </p>
                    {result.success ? (
                      <p>
                        <strong>Result:</strong> {result.count} user(s) marked as absent
                      </p>
                    ) : (
                      <p>
                        <strong>Error:</strong> {result.error || 'Unknown error'}
                      </p>
                    )}
                  </ResultBox>
                )}
              </RunContainer>
            ) : (
              <RunContainer>
                <h3>Scheduled Absent Checks</h3>
                <p>
                  Scheduled jobs automatically check for absent users and mark them accordingly.
                  You can manually trigger a scheduled job run using the button below, or configure automatic execution through a cron job or Firebase Cloud Function.
                </p>
                <div>
                  <ActionButton 
                    onClick={handleRunScheduledJob} 
                    disabled={running}
                  >
                    {running ? (
                      <>
                        <Icon><ArrowClockwise size={16} /></Icon>
                        Running...
                      </>
                    ) : (
                      <>
                        <Icon><CalendarX size={16} /></Icon>
                        Run Scheduled Job Now
                      </>
                    )}
                  </ActionButton>
                </div>
                
                {result && result.isScheduledJob && (
                  <ResultBox success={result.success}>
                    <p>
                      <strong>Last run:</strong> {formatDate(result.timestamp)}
                    </p>
                    {result.success ? (
                      <p>
                        <strong>Result:</strong> {result.count} user(s) marked as absent
                      </p>
                    ) : (
                      <p>
                        <strong>Error:</strong> {result.error || 'Unknown error'}
                      </p>
                    )}
                  </ResultBox>
                )}
                
                <div style={{ marginTop: '1.5rem' }}>
                  <h4>Job History</h4>
                  {loadingHistory ? (
                    <p>Loading job history...</p>
                  ) : jobHistory.length > 0 ? (
                    <div>
                      {jobHistory.map((job, index) => (
                        <JobHistoryItem 
                          key={index} 
                          status={job.status}
                          success={job.result?.success}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <div>
                              <strong>Job ID:</strong> {job.id.slice(0, 8)}...
                              <JobStatus status={job.status}>{job.status}</JobStatus>
                            </div>
                            <div>
                              {formatDate(job.startedAt)}
                            </div>
                          </div>
                          <div>
                            {job.status === 'completed' && (
                              <p><strong>Users marked absent:</strong> {job.result?.count || 0}</p>
                            )}
                            {job.status === 'failed' && (
                              <p><strong>Error:</strong> {job.result?.error || 'Unknown error'}</p>
                            )}
                          </div>
                        </JobHistoryItem>
                      ))}
                    </div>
                  ) : (
                    <EmptyState>No job history found</EmptyState>
                  )}
                </div>
              </RunContainer>
            )}
          </TabContainer>

          <AbsencesContainer>
            <h3>Recent Absences</h3>
            <AbsencesList>
              {loading ? (
                <p>Loading recent absences...</p>
              ) : recentAbsences.length > 0 ? (
                recentAbsences.map((absence, index) => (
                  <AbsenceItem key={index}>
                    <Icon><UserCircle size={20} /></Icon>
                    <UserInfo>
                      <UserName>{absence.name}</UserName>
                      <UserEmail>{absence.email}</UserEmail>
                    </UserInfo>
                    <AbsenceTime>
                      <Icon><Calendar size={16} /></Icon>
                      {formatDate(absence.timestamp)}
                    </AbsenceTime>
                  </AbsenceItem>
                ))
              ) : (
                <EmptyState>No recent absences found</EmptyState>
              )}
            </AbsencesList>
          </AbsencesContainer>
        </Container>
      </CardContent>
    </Card>
  );
};

export default AbsentServiceView;
