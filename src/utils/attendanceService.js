import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const recordAttendance = async (userId, email, name, type) => {
  console.log('Recording attendance with type:', type); // Debug log
  try {
    const attendanceRef = collection(db, 'attendance');
    const docData = {
      userId,
      email,
      name,
      type, // 'IN' or 'OUT'
      timestamp: serverTimestamp(),
      userType: 'admin'
    };
    console.log('Saving attendance data:', docData); // Debug log
    await addDoc(attendanceRef, docData);
    return { success: true };
  } catch (error) {
    console.error('Error recording attendance:', error);
    return { success: false, error: error.message };
  }
};
