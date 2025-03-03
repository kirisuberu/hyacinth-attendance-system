import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp, Timestamp, doc, setDoc } from 'firebase/firestore';

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
          
          // Create a timestamp for the start of the day
          const startOfDayTimestamp = Timestamp.fromDate(startOfDay);
          
          const attendanceRef = collection(db, 'attendance');
          
          // Query for today's attendance records for this user
          // Using a different approach to avoid the composite index requirement
          const attendanceQuery = query(
            attendanceRef,
            where('userId', '==', userDoc.id),
            where('date', '>=', startOfDay.getTime())
          );
          
          const attendanceSnapshot = await getDocs(attendanceQuery);
          
          // If no attendance record exists for today, mark as absent
          if (attendanceSnapshot.empty) {
            // Create a custom document ID with the format: yyyymmdd_tttt_(IN/OUT)_status_name
            const formatNumber = (num) => num.toString().padStart(2, '0');
            const year = now.getFullYear();
            const month = formatNumber(now.getMonth() + 1);
            const day = formatNumber(now.getDate());
            const hours = formatNumber(now.getHours());
            const minutes = formatNumber(now.getMinutes());
            
            // Format the time portion (tttt)
            const timeFormat = `${hours}${minutes}`;
            
            // Format the date portion (yyyymmdd)
            const dateFormat = `${year}${month}${day}`;
            
            // Create the custom document ID
            const customDocId = `${dateFormat}_${timeFormat}_IN_Absent_${userData.name.replace(/\s+/g, '_')}`;
            
            // Create the attendance record
            const attendanceRecord = {
              userId: userDoc.id,
              email: userData.email,
              name: userData.name,
              type: 'IN',
              status: 'Absent',
              timestamp: serverTimestamp(),
              date: startOfDay.getTime(),
              dateISO: now.toISOString(),
              scheduleTime: todayShift.startTime,
              dayOfWeek: dayOfWeek
            };
            
            // Create a document reference with the custom ID
            const attendanceRef = collection(db, 'attendance');
            const customDocRef = doc(attendanceRef, customDocId);
            
            // Use setDoc to create the document with the custom ID
            await setDoc(customDocRef, attendanceRecord);
            
            console.log(`Marked user ${userData.email} as absent with ID: ${customDocId}`);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in markAbsentUsers:', error);
  }
};
