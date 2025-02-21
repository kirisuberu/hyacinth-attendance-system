import { useEffect } from 'react';
import { markAbsentUsers } from '../utils/absenteeService';

const CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes

const AbsenteeService = () => {
  useEffect(() => {
    // Run initial check
    markAbsentUsers();

    // Set up periodic checks
    const intervalId = setInterval(markAbsentUsers, CHECK_INTERVAL);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component doesn't render anything
};

export default AbsenteeService;
