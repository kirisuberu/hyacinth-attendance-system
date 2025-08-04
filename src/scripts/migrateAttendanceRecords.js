/**
 * Migration script to recalculate statuses for historical attendance records
 * using the new timezone-aware logic
 * 
 * This script should be run from an admin page or utility function
 */
import { collection, query, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  determineTimeInStatus, 
  determineTimeOutStatus,
  calculateDuration
} from '../services/attendanceService';
import { timestampToZonedDate } from '../utils/timeZoneUtils';

/**
 * Migrates all historical attendance records to use the timezone-aware status logic
 * @param {Object} options - Migration options
 * @param {boolean} options.dryRun - If true, doesn't write to database
 * @param {Function} options.progressCallback - Called with progress updates
 * @param {Date} options.startDate - Optional start date for migration
 * @param {Date} options.endDate - Optional end date for migration
 * @returns {Promise<Object>} - Migration results
 */
export const migrateAttendanceRecords = async (options = {}) => {
  const { 
    dryRun = true, 
    progressCallback = () => {}, 
    startDate,
    endDate = new Date() 
  } = options;
  
  const results = {
    total: 0,
    changed: 0,
    errors: 0,
    details: []
  };
  
  try {
    // Query attendance records
    let attendanceQuery = collection(db, 'attendance');
    
    // Get all records
    progressCallback({ status: 'Starting migration query' });
    const querySnapshot = await getDocs(attendanceQuery);
    const totalRecords = querySnapshot.size;
    results.total = totalRecords;
    
    progressCallback({ 
      status: 'Found records', 
      totalRecords,
      processing: 0
    });
    
    // Process each record
    let processedCount = 0;
    
    for (const attendanceDoc of querySnapshot.docs) {
      try {
        const record = attendanceDoc.data();
        const recordId = attendanceDoc.id;
        
        // Skip records outside date range if specified
        if (startDate && record.timestamp && record.timestamp.toDate() < startDate) {
          continue;
        }
        
        if (endDate && record.timestamp && record.timestamp.toDate() > endDate) {
          continue;
        }
        
        // We need the user's time region for timezone-aware calculations
        const userId = record.userId;
        if (!userId) {
          results.details.push({
            id: recordId,
            error: 'Missing userId'
          });
          results.errors++;
          continue;
        }
        
        // Get user data to determine their time region
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (!userDoc.exists()) {
          results.details.push({
            id: recordId,
            error: 'User not found'
          });
          results.errors++;
          continue;
        }
        
        const userData = userDoc.data();
        const userTimeRegion = userData.timeRegion || 'Asia/Manila';
        
        // Process the record based on its type
        let oldStatus, newStatus, updates = {};
        
        if (record.type === 'IN') {
          oldStatus = record.status;
          newStatus = await determineTimeInStatus(userId, record.timestamp, userTimeRegion);
          
          if (oldStatus !== newStatus) {
            updates.status = newStatus;
          }
        } else if (record.type === 'OUT') {
          oldStatus = record.status;
          
          // Find the matching IN record for the day
          const inRecordQuery = query(
            collection(db, 'attendance'),
            where('userId', '==', userId),
            where('type', '==', 'IN'),
            where('date', '==', record.date)
          );
          
          const inRecordSnap = await getDocs(inRecordQuery);
          let inRecord = null;
          
          if (!inRecordSnap.empty) {
            inRecord = inRecordSnap.docs[0].data();
          }
          
          if (inRecord) {
            newStatus = await determineTimeOutStatus(userId, record.timestamp, inRecord.timestamp, userTimeRegion);
            
            // Also recalculate duration if we have both in and out records
            const inDate = timestampToZonedDate(inRecord.timestamp, userTimeRegion);
            const outDate = timestampToZonedDate(record.timestamp, userTimeRegion);
            
            const newDuration = Math.floor((outDate - inDate) / (60 * 1000));
            
            if (oldStatus !== newStatus) {
              updates.status = newStatus;
            }
            
            if (record.duration !== newDuration) {
              updates.duration = newDuration;
            }
          }
        }
        
        // Update the record if needed and not in dry run mode
        if (Object.keys(updates).length > 0) {
          results.changed++;
          results.details.push({
            id: recordId,
            userId,
            type: record.type,
            oldStatus,
            newStatus,
            changes: updates
          });
          
          if (!dryRun) {
            await updateDoc(doc(db, 'attendance', recordId), updates);
          }
        }
        
        // Update progress
        processedCount++;
        if (processedCount % 10 === 0 || processedCount === totalRecords) {
          progressCallback({
            status: 'Processing',
            totalRecords,
            processing: processedCount,
            changed: results.changed,
            errors: results.errors
          });
        }
      } catch (error) {
        console.error('Error processing record:', error);
        results.errors++;
      }
    }
    
    progressCallback({
      status: 'Complete',
      totalRecords,
      processing: processedCount,
      changed: results.changed,
      errors: results.errors,
      dryRun
    });
    
    return results;
  } catch (error) {
    console.error('Migration error:', error);
    progressCallback({
      status: 'Error',
      error: error.message
    });
    throw error;
  }
};

/**
 * Admin UI component for running the migration
 * This can be integrated into an admin dashboard
 */
export const MigrationUtility = () => {
  // Implementation would go here - creating a React component 
  // that uses the migration function above with progress tracking
  // Left as a separate task as it requires admin UI integration
};
