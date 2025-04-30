import { useEffect, useState } from 'react';
import { checkAndMarkAbsentUsers } from '../services/attendanceService';
import { toast } from 'react-toastify';

/**
 * A background service component that periodically checks for absent users
 * and marks them as absent if they missed their scheduled shifts.
 * This component doesn't render anything visible.
 */
const AbsentService = () => {
  const [lastCheck, setLastCheck] = useState(null);
  
  useEffect(() => {
    // Function to check for absent users
    const checkAbsentUsers = async () => {
      try {
        console.log('Checking for absent users...');
        const absentCount = await checkAndMarkAbsentUsers();
        
        if (absentCount > 0) {
          console.log(`Marked ${absentCount} users as absent`);
          toast.info(`Marked ${absentCount} users as absent for missing their shifts`);
        }
        
        setLastCheck(new Date());
      } catch (error) {
        console.error('Error in absent service:', error);
      }
    };
    
    // Run the check immediately when the component mounts
    checkAbsentUsers();
    
    // Set up an interval to check every hour
    const intervalId = setInterval(checkAbsentUsers, 60 * 60 * 1000); // 1 hour in milliseconds
    
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default AbsentService;
