import { collection, query, where, getDocs, addDoc, Timestamp, doc, getDoc, updateDoc, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { checkAndMarkAbsentUsers } from './attendanceService';

/**
 * Service to manage scheduled jobs for the system
 * These functions can be called by various triggers or manual actions
 */

/**
 * Scheduled job to mark users as absent if they haven't timed in
 * This can be triggered by a cron job, Cloud Function, or manually
 * @returns {Promise<{success: boolean, count: number, timestamp: string}>} Result of the job
 */
export const runAbsentMarkingJob = async () => {
  try {
    console.log('Running absent marking job at', new Date().toISOString());
    
    // Track job execution in the database
    const jobRef = await addDoc(collection(db, 'scheduledJobs'), {
      type: 'absent_marking',
      status: 'running',
      startedAt: Timestamp.now(),
      completedAt: null,
      result: null
    });
    
    // Run the absent check
    const markedCount = await checkAndMarkAbsentUsers();
    
    // Update the job record with the result
    await updateDoc(doc(db, 'scheduledJobs', jobRef.id), {
      status: 'completed',
      completedAt: Timestamp.now(),
      result: {
        success: true,
        count: markedCount
      }
    });
    
    console.log(`Absent marking job completed: ${markedCount} users marked absent`);
    
    return {
      success: true,
      count: markedCount,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error running absent marking job:', error);
    
    // If we have a job reference, update it with the error
    try {
      const jobsRef = collection(db, 'scheduledJobs');
      const q = query(
        jobsRef,
        where('type', '==', 'absent_marking'),
        where('status', '==', 'running'),
        orderBy('startedAt', 'desc'),
        limit(1)
      );
      
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        await updateDoc(doc(db, 'scheduledJobs', snapshot.docs[0].id), {
          status: 'failed',
          completedAt: Timestamp.now(),
          result: {
            success: false,
            error: error.message
          }
        });
      }
    } catch (logError) {
      console.error('Error updating job status:', logError);
    }
    
    return {
      success: false,
      count: 0,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * Get the most recent job executions
 * @param {string} jobType - Type of job to get history for
 * @param {number} limit - Maximum number of records to return
 * @returns {Promise<Array>} - Array of job execution records
 */
export const getJobHistory = async (jobType, recordLimit = 10) => {
  try {
    const jobsRef = collection(db, 'scheduledJobs');
    const q = query(
      jobsRef,
      where('type', '==', jobType),
      orderBy('startedAt', 'desc'),
      limit(recordLimit)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error getting ${jobType} job history:`, error);
    return [];
  }
};
