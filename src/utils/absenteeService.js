import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';

const ABSENCE_THRESHOLD_HOURS = 3;

export const markAbsentUsers = async () => {
  try {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    // Get all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const userSchedule = userData.schedule || {};
      
      // Check if user has a schedule for today
      const todayShift = Object.values(userSchedule).find(shift => shift.startDay === dayOfWeek);
      
      if (todayShift) {
        const [scheduleHours, scheduleMinutes] = todayShift.startTime.split(':').map(Number);
        const scheduleDate = new Date(now);
        scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
        
        // Check if current time is more than 3 hours after schedule
        const timeDiff = now.getTime() - scheduleDate.getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff >= ABSENCE_THRESHOLD_HOURS) {
          // Check if user has already timed in today or been marked absent
          const startOfDay = new Date(now);
          startOfDay.setHours(0, 0, 0, 0);
          
          const attendanceRef = collection(db, 'attendance');
          const attendanceQuery = query(
            attendanceRef,
            where('userId', '==', userDoc.id),
            where('timestamp', '>=', startOfDay)
          );
          
          const attendanceSnapshot = await getDocs(attendanceQuery);
          
          // If no attendance record exists for today, mark as absent
          if (attendanceSnapshot.empty) {
            await addDoc(collection(db, 'attendance'), {
              userId: userDoc.id,
              email: userData.email,
              name: userData.name,
              type: 'IN',
              status: 'Absent',
              timestamp: serverTimestamp(),
              scheduleTime: todayShift.startTime
            });
            
            console.log(`Marked user ${userData.email} as absent`);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in markAbsentUsers:', error);
  }
};
