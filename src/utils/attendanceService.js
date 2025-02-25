import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

const calculateAttendanceStatus = (scheduleTime, actualTime, type) => {
  if (!scheduleTime) {
    return {
      status: 'No Schedule',
      timeDiff: {
        hours: 0,
        minutes: 0,
        totalMinutes: 0
      }
    };
  }

  const [scheduleHours, scheduleMinutes] = scheduleTime.split(':').map(Number);
  const scheduleDate = new Date(actualTime);
  scheduleDate.setHours(scheduleHours, scheduleMinutes, 0);

  const diffMinutes = Math.round((actualTime - scheduleDate) / (1000 * 60));

  const formatTimeDiff = (diffMins) => {
    const hours = Math.floor(Math.abs(diffMins) / 60);
    const minutes = Math.abs(diffMins) % 60;
    return {
      hours,
      minutes,
      totalMinutes: diffMins
    };
  };

  const timeDiff = formatTimeDiff(diffMinutes);

  if (type === 'IN') {
    if (diffMinutes < -15) {
      return {
        status: 'Early',
        timeDiff
      };
    }
    if (diffMinutes <= 15) {
      return {
        status: 'On Time',
        timeDiff
      };
    }
    return {
      status: 'Late',
      timeDiff
    };
  } else {
    if (diffMinutes < -15) {
      return {
        status: 'Early Out',
        timeDiff
      };
    }
    if (diffMinutes <= 15) {
      return {
        status: 'On Time',
        timeDiff
      };
    }
    return {
      status: 'Overtime',
      timeDiff
    };
  }
};

export const recordAttendance = async (userId, email, name, type, notes = '') => {
  console.log('Recording attendance with type:', type);
  try {
    // Get the current date and time
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const previousDay = new Date(now);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayOfWeek = previousDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    // Get user's schedule and type
    const usersRef = collection(db, 'users');
    const userDoc = doc(usersRef, userId);
    const userSnapshot = await getDoc(userDoc);
    
    let scheduleTime = null;
    let userType = null;

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      userType = userData.userType;
      
      // For other users, use their custom schedule
      const userSchedule = userData.schedule || {};
      
      // Handle shifts that might span across days
      if (type === 'IN') {
        // For time in, look for shifts that start on the current day
        Object.values(userSchedule).forEach(shift => {
          if (shift.startDay.toLowerCase() === dayOfWeek) {
            scheduleTime = shift.startTime;
          }
        });
      } else {
        // For time out, look for shifts that either:
        // 1. End on the current day
        // 2. Started the previous day and end today
        Object.values(userSchedule).forEach(shift => {
          if (shift.endDay.toLowerCase() === dayOfWeek) {
            scheduleTime = shift.endTime;
          } else if (shift.startDay.toLowerCase() === previousDayOfWeek && shift.endDay.toLowerCase() === dayOfWeek) {
            scheduleTime = shift.endTime;
          }
        });
      }
    }

    console.log('Found schedule time:', {
      type,
      userType,
      dayOfWeek,
      previousDayOfWeek,
      scheduleTime
    });

    // Calculate attendance status
    const { status, timeDiff } = calculateAttendanceStatus(scheduleTime, now, type);

    // Create the attendance record
    const attendanceRecord = {
      userId,
      email,
      name,
      type,
      userType,
      timestamp: serverTimestamp(),
      date: now.setHours(0, 0, 0, 0),  // Store the date at midnight for easier querying
      scheduleTime,  // This will be '09:00' or '18:00' for accountants
      status,
      timeDiffHours: timeDiff.hours,
      timeDiffMinutes: timeDiff.minutes,
      totalMinutesDiff: timeDiff.totalMinutes,
      dayOfWeek,
      notes
    };

    // Save to Firestore
    const attendanceRef = collection(db, 'attendance');
    const docRef = await addDoc(attendanceRef, attendanceRecord);
    console.log('Saved attendance record:', { id: docRef.id, ...attendanceRecord });

    return {
      success: true,
      status,
      timeDiff
    };

  } catch (error) {
    console.error('Error recording attendance:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
