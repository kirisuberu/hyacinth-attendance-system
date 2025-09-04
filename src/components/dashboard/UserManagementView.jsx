import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { doc, setDoc, updateDoc, deleteDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db } from '../../firebase';
import { Users, UserCircle, Pencil, Trash, X, Check, Calendar, Plus, ArrowRight, ArrowLeft, DownloadSimple, FloppyDisk, PencilSimple, Funnel, CaretDown, List, Buildings, BookmarkSimple } from 'phosphor-react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';
import { Card, CardTitle, CardContent, Grid } from './DashboardComponents';
import { useAuth } from '../../contexts/AuthContext';


function UserManagementView({ isSuperAdmin }) {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [addUserPage, setAddUserPage] = useState(1); // Track the current page of the add user modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    selectedDays: [],
    timeIn: '09:00',
    timeRegion: 'Asia/Manila',
    shiftHours: '8',
    shiftMinutes: '0',
  });
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showColumnControl, setShowColumnControl] = useState(false);
  const [draggedColumnIndex, setDraggedColumnIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [showPresetModal, setShowPresetModal] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [savedPresets, setSavedPresets] = useState([]);
  
  // Define default columns configuration
  const defaultColumns = [
    { id: 'name', label: 'Name', visible: true, required: true, width: 200 },
    { id: 'employmentStatus', label: 'Employment Status', visible: true, width: 180 },
    { id: 'preemploymentDate', label: 'Pre-employment Date', visible: true, width: 180 },
    { id: 'dateHired', label: 'Hired Date', visible: true, width: 180 },
    { id: 'regularDate', label: 'Regular Date', visible: true, width: 180 },
    { id: 'email', label: 'Email Address', visible: true, width: 250 },
    { id: 'position', label: 'Position', visible: true, width: 200 },
    { id: 'departments', label: 'Departments', visible: true, width: 200 },
    { id: 'role', label: 'Role', visible: true, width: 120 },
    { id: 'status', label: 'Status', visible: true, width: 120 },
    { id: 'shifts', label: 'Shifts', visible: true, width: 150 },
    { id: 'dateOfBirth', label: 'Date of Birth', visible: false, width: 180 },
    { id: 'phoneNumber', label: 'Phone Number', visible: false, width: 180 },
    { id: 'address', label: 'Address', visible: false, width: 250 },
    { id: 'emergencyContactName', label: 'Emergency Contact Name', visible: false, width: 220 },
    { id: 'emergencyContactPhone', label: 'Emergency Contact Phone', visible: false, width: 220 },
    { id: 'emergencyContactRelationship', label: 'Emergency Contact Relationship', visible: false, width: 220 },
    { id: 'actions', label: 'Actions', visible: true, required: true, width: 180 }
  ];
  
  const [allColumns, setAllColumns] = useState(defaultColumns);
  
  // State for tracking column resizing
  const [resizingColumnId, setResizingColumnId] = useState(null);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);
  const [editUserData, setEditUserData] = useState({
    firstName: '',
    lastName: '',
    middleInitial: '',
    preferredName: '',
    email: '',
    position: '',
    employmentStatus: 'regular',
    role: 'member',
    dateOfBirth: '',
    dateHired: '',
    preemploymentDate: '',
    regularDate: '',
    phoneNumber: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    departments: [],
    companies: []
  });
  const [editUserPage, setEditUserPage] = useState(1); // Track the current page of the edit user modal
  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    middleInitial: '',
    email: '',
    position: '',
    employmentStatus: 'regular',
    role: 'member',
    status: 'active',
    address: '',
    contactNumber: '',
    preemploymentDate: '',
    regularDate: '',
    departments: [],
    companies: []
  });
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Calculate total hours from all shifts
  const calculateTotalHours = (schedules) => {
    if (!schedules || !Array.isArray(schedules) || schedules.length === 0) {
      return 0;
    }
    
    const totalHours = schedules.reduce((sum, schedule) => {
      return sum + (parseFloat(schedule.shiftDuration) || 0);
    }, 0);
    
    return Math.round(totalHours * 100) / 100;
  };

  // Format decimal hours to "Xh Ym"
  const formatDuration = (durationHours) => {
    const total = Number(durationHours) || 0;
    const h = Math.floor(total);
    const m = Math.round((total - h) * 60);
    return m ? `${h}h ${m}m` : `${h}h`;
  };

  useEffect(() => {
    // Set up real-time listeners for users, departments, and companies
    const unsubUsers = setupUsersListener();
    const unsubDepts = setupDepartmentsListener();
    const unsubCompanies = setupCompaniesListener();
    
    // Load saved column configuration
    loadColumnConfiguration();
    
    // Clean up listeners on unmount
    return () => {
      if (unsubUsers) unsubUsers();
      if (unsubDepts) unsubDepts();
      if (unsubCompanies) unsubCompanies();
    };
  }, [currentUser]);
  
  // Save column configuration whenever it changes
  useEffect(() => {
    if (currentUser) {
      saveColumnConfiguration();
    }
  }, [allColumns, currentUser]);
  
  const setupDepartmentsListener = () => {
    try {
      const departmentsCollection = collection(db, 'departments');
      const departmentsQuery = query(departmentsCollection, orderBy('name'));
      
      // Set up real-time listener
      return onSnapshot(departmentsQuery, (snapshot) => {
        const departmentsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDepartments(departmentsList);
        console.log('Real-time departments data update:', departmentsList.length);
      }, (error) => {
        console.error('Error in departments listener:', error);
        toast.error('Failed to load departments');
      });
    } catch (error) {
      console.error('Error setting up departments listener:', error);
      toast.error('Failed to load departments');
      return null;
    }
  };

  const setupCompaniesListener = () => {
    try {
      const companiesCollection = collection(db, 'companies');
      const companiesQuery = query(companiesCollection, orderBy('name'));
      
      // Set up real-time listener
      return onSnapshot(companiesQuery, (snapshot) => {
        const companiesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCompanies(companiesList);
        console.log('Real-time companies data update:', companiesList.length);
      }, (error) => {
        console.error('Error in companies listener:', error);
        toast.error('Failed to load companies');
      });
    } catch (error) {
      console.error('Error setting up companies listener:', error);
      toast.error('Failed to load companies');
      return null;
    }
  };

  const setupUsersListener = () => {
    try {
      setLoading(true);
      const usersCollection = collection(db, 'users');
      
      // Set up real-time listener
      return onSnapshot(usersCollection, (snapshot) => {
        const usersList = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            // Store both the document ID and the userId field if it exists
            id: doc.id,
            userId: data.userId || doc.id, // Ensure we have a userId, fallback to doc.id
            ...data,
            schedule: data.schedule || []
          };
        });
        setUsers(usersList);
        setLoading(false);
        console.log('Real-time users data update:', usersList.length);
      }, (error) => {
        console.error('Error in users listener:', error);
        toast.error('Failed to load users');
        setLoading(false);
      });
    } catch (error) {
      console.error('Error setting up users listener:', error);
      toast.error('Failed to load users');
      setLoading(false);
      return null;
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleEditClick = (user) => {
    // Parse the name into first name, last name, and middle initial
    let firstName = '', lastName = '', middleInitial = '';
    
    // 1) Parse combined name first (if present) into parsed components
    let parsedFirst = '', parsedLast = '', parsedMI = '';
    if (user.name) {
      const raw = String(user.name).trim().replace(/\s+/g, ' ');
      if (raw.includes(',')) {
        // Format: "Last, First [Second ...] [MI]"
        const [lastPart, restPart] = raw.split(',', 2);
        const tokens = (restPart || '').trim().split(' ').filter(Boolean);
        if (tokens.length > 0) {
          const lastToken = tokens[tokens.length - 1];
          if (/^[A-Za-z]\.?$/.test(lastToken)) {
            parsedMI = lastToken.replace('.', '').toUpperCase();
            parsedFirst = tokens.slice(0, -1).join(' ');
          } else {
            parsedFirst = tokens.join(' ');
          }
        }
        parsedLast = (lastPart || '').trim();
      } else {
        // Format: "First [Second ...] [MI] Last"
        const tokens = raw.split(' ').filter(Boolean);
        if (tokens.length === 1) {
          parsedFirst = tokens[0];
        } else if (tokens.length >= 2) {
          const lastToken = tokens[tokens.length - 1];
          const penultimate = tokens[tokens.length - 2];
          if (/^[A-Za-z]\.?$/.test(penultimate)) {
            // e.g., "Juan Miguel S. Cruz" => first: "Juan Miguel", MI: "S", last: "Cruz"
            parsedMI = penultimate.replace('.', '').toUpperCase();
            parsedLast = lastToken;
            parsedFirst = tokens.slice(0, -2).join(' ');
          } else if (tokens.length >= 3 && /^[A-Za-z]\.?$/.test(tokens[1])) {
            // e.g., "Juan S. Cruz" => first: "Juan", MI: "S", last: "Cruz"
            parsedMI = tokens[1].replace('.', '').toUpperCase();
            parsedLast = lastToken;
            parsedFirst = tokens[0];
          } else {
            // No explicit MI token, everything except last token is first name
            parsedLast = lastToken;
            parsedFirst = tokens.slice(0, -1).join(' ');
          }
        }
      }
    }

    // 2) Merge with explicit fields, preferring explicit but upgrading first name when parsed has more detail
    const explicitFirst = (user.firstName || '').trim();
    const explicitLast = (user.lastName || '').trim();
    const explicitMI = (user.middleInitial || '').replace('.', '').toUpperCase();

    // Choose first name: if explicit is single token but parsed has multiple tokens, use parsed
    if (explicitFirst) {
      const explicitHasSpace = explicitFirst.includes(' ');
      const parsedHasSpace = parsedFirst.includes(' ');
      firstName = (!explicitHasSpace && parsedHasSpace) ? parsedFirst : explicitFirst;
    } else {
      firstName = parsedFirst;
    }

    // Choose last name: prefer explicit, else parsed
    lastName = explicitLast || parsedLast;

    // Choose middle initial: prefer explicit, else parsed
    middleInitial = explicitMI || parsedMI;
    
    // First set the selected user to ensure it's available when the modal opens
    setSelectedUser(user);
    
    setEditUserData({
      firstName,
      lastName,
      middleInitial,
      preferredName: user.preferredName || '',
      email: user.email || '',
      position: user.position || '',
      employmentStatus: user.employmentStatus || 'regular',
      role: user.role || 'member',
      dateOfBirth: user.dateOfBirth || '',
      dateHired: user.dateHired || '',
      preemploymentDate: user.preemploymentDate || '',
      regularDate: user.regularDate || '',
      phoneNumber: user.phoneNumber || '',
      address: user.address || '',
      emergencyContactName: user.emergencyContactName || '',
      emergencyContactPhone: user.emergencyContactPhone || '',
      emergencyContactRelationship: user.emergencyContactRelationship || '',
      departments: user.departments || [],
      companies: user.companies || (user.company ? [user.company] : [])
    });
    
    // Set the modal visibility after setting the selected user
    setShowEditModal(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;
    
    try {
      // Use the userId field if available, otherwise fall back to id
      const documentId = userToDelete.userId || userToDelete.id;
      
      // Delete the user document from Firestore
      await deleteDoc(doc(db, 'users', documentId));
      
      // Update the local state
      setUsers(users.filter(user => {
        // Filter out the deleted user by matching either ID
        return !(user.userId === userToDelete.userId || user.id === userToDelete.id);
      }));
      
      toast.success(`User ${userToDelete.name || userToDelete.email} has been deleted`);
      setShowDeleteModal(false);
      setUserToDelete(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error(`Failed to delete user: ${error.message}`);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const toggleUserStatus = async (user, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    let firebaseAuthUpdateSuccessful = true;
    
    try {
      // Use the userId field if available, otherwise fall back to id
      const documentId = user.userId || user.id;
      
      // Update user status in Firestore
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        status: newStatus
      });
      
      // If deactivating user (status changing to 'inactive'), disable the user in Firebase Auth
      if (newStatus === 'inactive') {
        try {
          const functions = getFunctions();
          const toggleUserEnabled = httpsCallable(functions, 'toggleUserEnabled');
          
          // Call the Cloud Function to disable the user in Firebase Auth
          const result = await toggleUserEnabled({
            userId: documentId,
            disabled: true // disable the user
          });
          
          console.log('Firebase Auth user disabled:', result.data);
          // Success! No need for warning toast
        } catch (authError) {
          console.error('Error disabling user in Firebase Auth:', authError);
          firebaseAuthUpdateSuccessful = false;
        }
      } else if (newStatus === 'active') {
        // If activating user, enable them in Firebase Auth
        try {
          const functions = getFunctions();
          const toggleUserEnabled = httpsCallable(functions, 'toggleUserEnabled');
          
          // Call the Cloud Function to enable the user in Firebase Auth
          const result = await toggleUserEnabled({
            userId: documentId,
            disabled: false // enable the user
          });
          
          console.log('Firebase Auth user enabled:', result.data);
          // Success! No need for warning toast
        } catch (authError) {
          console.error('Error enabling user in Firebase Auth:', authError);
          firebaseAuthUpdateSuccessful = false;
        }
      }
      
      // Update the local state
      setUsers(users.map(u => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (u.userId && u.userId === user.userId) || 
                       (u.id === user.id);
        return isMatch ? { ...u, status: newStatus } : u;
      }));
      
      // Show appropriate success message, with warning if Firebase Auth update failed
      if (firebaseAuthUpdateSuccessful) {
        toast.success(`User status updated to ${newStatus}`);
      } else {
        // Only show this if Firestore was updated but Firebase Auth failed
        toast.warning(`User status updated to ${newStatus} in database, but there was an issue updating login access.`);
      }
    } catch (error) {
      console.error('Error updating user status:', error);
      toast.error(`Failed to update user status: ${error.message}`);
    }
  };

  const handleScheduleClick = (user) => {
    setSelectedUser(user);
    setScheduleData(user.schedule || []);
    setShowScheduleModal(true);
    setIsEditing(false);
    setEditingSchedule(null);
  };

  const handleUpdateUser = async () => {
    try {
      // Format the name
      let fullName = editUserData.firstName;
      if (editUserData.middleInitial) {
        fullName += ` ${editUserData.middleInitial}.`;
      }
      if (editUserData.lastName) {
        fullName += ` ${editUserData.lastName}`;
      }
      
      // Validate required fields
      if (!fullName.trim() || !editUserData.email.trim()) {
        toast.error('Name and email are required');
        return;
      }
      // First, we need to determine the correct document ID to use
      // If userId exists, use that as the document ID, otherwise fall back to id
      const documentId = selectedUser.userId || selectedUser.id;

      // Check if email is being changed and update via Cloud Function (admin path)
      const trimmedNewEmail = editUserData.email.trim();
      const isEmailChanged = (selectedUser.email || '').trim().toLowerCase() !== trimmedNewEmail.toLowerCase();
      if (isEmailChanged) {
        try {
          const functions = getFunctions();
          const updateUserEmail = httpsCallable(functions, 'updateUserEmail');
          await updateUserEmail({ userId: documentId, newEmail: trimmedNewEmail });
          toast.success('Authentication email updated');
        } catch (emailErr) {
          console.error('Failed to update auth email via function:', emailErr);
          const msg = (emailErr && emailErr.message) || 'Failed to update authentication email.';
          toast.error(msg);
          // Abort to prevent Firestore/Auth divergence
          return;
        }
      }
      
      console.log('Updating user with document ID:', documentId);
      
      // Update the user document
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        name: fullName.trim(),
        firstName: editUserData.firstName,
        middleInitial: editUserData.middleInitial || '',
        lastName: editUserData.lastName,
        email: trimmedNewEmail,
        preferredName: editUserData.preferredName || '',
        position: editUserData.position.trim(),
        employmentStatus: editUserData.employmentStatus,
        role: editUserData.role,
        dateOfBirth: editUserData.dateOfBirth,
        dateHired: editUserData.dateHired,
        preemploymentDate: editUserData.preemploymentDate,
        regularDate: editUserData.regularDate,
        phoneNumber: editUserData.phoneNumber,
        address: editUserData.address,
        emergencyContactName: editUserData.emergencyContactName,
        emergencyContactPhone: editUserData.emergencyContactPhone,
        emergencyContactRelationship: editUserData.emergencyContactRelationship,
        departments: editUserData.departments || [],
        companies: editUserData.companies || [],
        updatedAt: serverTimestamp(),
      });
      
      // Update local state
      setUsers(users.map(u => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (u.userId && u.userId === selectedUser.userId) || 
                       (u.id === selectedUser.id);
        return isMatch ? {
          ...u,
          name: fullName.trim(),
          firstName: editUserData.firstName,
          middleInitial: editUserData.middleInitial || '',
          lastName: editUserData.lastName,
          email: trimmedNewEmail,
          preferredName: editUserData.preferredName || '',
          position: editUserData.position.trim(),
          employmentStatus: editUserData.employmentStatus,
          role: editUserData.role,
          dateOfBirth: editUserData.dateOfBirth,
          dateHired: editUserData.dateHired,
          preemploymentDate: editUserData.preemploymentDate,
          regularDate: editUserData.regularDate,
          phoneNumber: editUserData.phoneNumber,
          address: editUserData.address,
          emergencyContactName: editUserData.emergencyContactName,
          emergencyContactPhone: editUserData.emergencyContactPhone,
          emergencyContactRelationship: editUserData.emergencyContactRelationship,
          departments: editUserData.departments || [],
          companies: editUserData.companies || [],
          updatedAt: new Date(),
        } : u;
      }));
      
      toast.success('User information updated successfully');
      
      setShowEditModal(false);
      setEditUserPage(1); // Reset to first page
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(`Failed to update user: ${error.message}`);
    }
  };

  const handleAddUser = async () => {
    try {
      // Format the name
      let fullName = newUserData.firstName;
      if (newUserData.middleInitial) {
        fullName += ` ${newUserData.middleInitial}.`;
      }
      if (newUserData.lastName) {
        fullName += ` ${newUserData.lastName}`;
      }
      
      // Validate required fields
      if (!fullName.trim() || !newUserData.email.trim()) {
        toast.error('Name and email are required');
        return;
      }
      
      // Generate a unique userId
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 8);
      const userId = `user_${timestamp}_${randomString}`;
      
      // Create a new user document
      const newUser = {
        userId,
        name: fullName.trim(),
        firstName: newUserData.firstName,
        middleInitial: newUserData.middleInitial || '',
        lastName: newUserData.lastName,
        email: newUserData.email.trim(),
        position: newUserData.position.trim(),
        employmentStatus: newUserData.employmentStatus,
        role: newUserData.role,
        status: 'active',
        preemploymentDate: newUserData.preemploymentDate || '',
        regularDate: newUserData.regularDate || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        departments: newUserData.departments || [],
        companies: newUserData.companies || [],
        // Additional fields can be added here as needed
      };
      
      // Add the user to the database
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, newUser);
      
      // No need to manually update state as the listener will handle it
      // But we'll add to local state anyway for immediate feedback
      newUser.id = userId; // Add id for consistency with fetched users
      
      // Convert server timestamp to regular Date for immediate display
      const now = new Date();
      newUser.createdAt = {
        toDate: () => now
      };
      newUser.updatedAt = {
        toDate: () => now
      };
      
      setUsers([...users, newUser]);
      
      toast.success(`User ${fullName.trim()} added successfully`);
      setShowAddUserModal(false);
      setAddUserPage(1); // Reset to first page
      
      // Reset the form
      setNewUserData({
        firstName: '',
        lastName: '',
        middleInitial: '',
        email: '',
        position: '',
        employmentStatus: 'regular',
        role: 'member',
        status: 'active',
        address: '',
        contactNumber: '',
        preemploymentDate: '',
        regularDate: '',
        departments: [],
        companies: []
      });
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error(`Failed to add user: ${error.message}`);
    }
  };

  const handleAddSchedule = () => {
    // Check if at least one day is selected
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    // Convert time to UTC for storage
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    // Compute and validate shift duration from hours/minutes fields
    const durHours = parseInt(newSchedule.shiftHours || '0', 10);
    const durMinutes = parseInt(newSchedule.shiftMinutes || '0', 10);
    const safeHours = isNaN(durHours) ? 0 : durHours;
    const safeMinutes = isNaN(durMinutes) ? 0 : durMinutes;
    const totalMinutes = safeHours * 60 + safeMinutes;
    if (totalMinutes <= 0) {
      toast.warning('Please enter a valid shift duration');
      return;
    }
    if (totalMinutes > 24 * 60) {
      toast.warning('Shift duration cannot exceed 24 hours');
      return;
    }
    const durationInHours = totalMinutes / 60;
    
    // Create schedule entries for each selected day
    const newScheduleEntries = newSchedule.selectedDays.map(day => ({
      id: `${Date.now()}-${day}`, // Unique ID for each schedule entry
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: durationInHours,
      utcTimeIn: localTime.toISOString() // Store UTC time
    }));
    
    // Add to the current schedule data
    const updatedSchedule = [...scheduleData, ...newScheduleEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Added schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    // Reset form
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
  };

  const handleSaveSchedule = async () => {
    if (!selectedUser) return;
    
    try {
      // First, we need to determine the correct document ID to use
      // If userId exists, use that as the document ID, otherwise fall back to id
      const documentId = selectedUser.userId || selectedUser.id;
      
      console.log('Updating schedule for user with document ID:', documentId);
      
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        schedule: scheduleData
      });
      
      // Update local state
      setUsers(users.map(user => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (user.userId && user.userId === selectedUser.userId) || 
                       (user.id === selectedUser.id);
        return isMatch ? { ...user, schedule: scheduleData } : user;
      }));
      
      toast.success('Schedule updated successfully');
      setShowScheduleModal(false);
    } catch (error) {
      console.error('Error updating schedule:', error);
      toast.error(`Failed to update schedule: ${error.message}`);
    }
  };

  const handleDeleteSchedule = (scheduleId) => {
    const updatedSchedule = scheduleData.filter(item => item.id !== scheduleId);
    setScheduleData(updatedSchedule);
  };

  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule);
    setIsEditing(true);
    setNewSchedule({
      selectedDays: [schedule.dayOfWeek],
      timeIn: schedule.timeIn,
      timeRegion: schedule.timeRegion,
      shiftHours: Math.floor(Number(schedule.shiftDuration || 0)).toString(),
      shiftMinutes: Math.round((Number(schedule.shiftDuration || 0) - Math.floor(Number(schedule.shiftDuration || 0))) * 60).toString(),
    });
  };

  const handleUpdateSchedule = () => {
    if (!editingSchedule) return;
    
    // Validate that at least one day is selected
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    // Convert time to UTC for storage
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    // Compute and validate shift duration from hours/minutes fields
    const durHours = parseInt(newSchedule.shiftHours || '0', 10);
    const durMinutes = parseInt(newSchedule.shiftMinutes || '0', 10);
    const safeHours = isNaN(durHours) ? 0 : durHours;
    const safeMinutes = isNaN(durMinutes) ? 0 : durMinutes;
    const totalMinutes = safeHours * 60 + safeMinutes;
    if (totalMinutes <= 0) {
      toast.warning('Please enter a valid shift duration');
      return;
    }
    if (totalMinutes > 24 * 60) {
      toast.warning('Shift duration cannot exceed 24 hours');
      return;
    }
    const durationInHours = totalMinutes / 60;
    
    // Remove the old schedule entry
    let updatedSchedule = scheduleData.filter(item => item.id !== editingSchedule.id);
    
    // Create updated schedule entries for each selected day
    const updatedEntries = newSchedule.selectedDays.map(day => ({
      id: day === editingSchedule.dayOfWeek ? editingSchedule.id : `${Date.now()}-${day}`,
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: durationInHours,
      utcTimeIn: localTime.toISOString()
    }));
    
    // Add the updated entries to the schedule data
    updatedSchedule = [...updatedSchedule, ...updatedEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Updated schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    // Reset form and editing state
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
    setIsEditing(false);
    setEditingSchedule(null);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingSchedule(null);
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
  };
  
  const exportUsersToExcel = () => {
    try {
      // Get visible columns in their current order, excluding actions
      const exportColumns = visibleColumns.filter(col => col.id !== 'actions');
      
      // Format the data for Excel export based on visible columns
      const formattedData = users.map(user => {
        const rowData = {};
        
        exportColumns.forEach(column => {
          switch (column.id) {
            case 'name':
              rowData[column.label] = user.name || '';
              break;
            case 'email':
              rowData[column.label] = user.email || '';
              break;
            case 'position':
              rowData[column.label] = user.position || '';
              break;
            case 'employmentStatus':
              rowData[column.label] = user.employmentStatus || '';
              break;
            case 'role':
              rowData[column.label] = user.role || '';
              break;
            case 'status':
              rowData[column.label] = user.status || '';
              break;
            case 'departments':
              if (user.departments && user.departments.length > 0) {
                const deptNames = user.departments.map(deptId => {
                  const dept = departments.find(d => d.id === deptId);
                  return dept ? dept.name : deptId;
                }).join(', ');
                rowData[column.label] = deptNames;
              } else {
                rowData[column.label] = 'None assigned';
              }
              break;
            case 'shifts':
              if (user.schedule && Array.isArray(user.schedule)) {
                rowData[column.label] = `${user.schedule.length} shifts (${calculateTotalHours(user.schedule)}h total)`;
              } else {
                rowData[column.label] = 'No shifts';
              }
              break;
            case 'preemploymentDate':
            case 'dateHired':
            case 'regularDate':
            case 'dateOfBirth':
              if (user[column.id]) {
                const date = user[column.id].seconds ? 
                  new Date(user[column.id].seconds * 1000) : 
                  new Date(user[column.id]);
                rowData[column.label] = date.toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                });
              } else {
                rowData[column.label] = 'Not specified';
              }
              break;
            case 'phoneNumber':
              rowData[column.label] = user.phoneNumber || user.contactNumber || 'Not specified';
              break;
            case 'address':
              rowData[column.label] = user.address || 'Not specified';
              break;
            case 'emergencyContactName':
              rowData[column.label] = user.emergencyContactName || 'Not specified';
              break;
            case 'emergencyContactPhone':
              rowData[column.label] = user.emergencyContactPhone || 'Not specified';
              break;
            case 'emergencyContactRelationship':
              rowData[column.label] = user.emergencyContactRelationship || 'Not specified';
              break;
            default:
              rowData[column.label] = user[column.id] || '';
          }
        });
        
        return rowData;
      });
      
      // Create a new workbook and add the data
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      
      // Set column widths based on the configured widths
      const columnWidths = exportColumns.map(col => ({
        wch: Math.max(col.width / 8, 10) // Convert pixels to character width, minimum 10
      }));
      worksheet['!cols'] = columnWidths;
      
      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
      
      // Generate a filename with current date
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      const fileName = `hyacinth_users_${formattedDate}.xlsx`;
      
      // Write the workbook and trigger download
      XLSX.writeFile(workbook, fileName);
      
      toast.success(`Users data exported successfully with ${exportColumns.length} columns`);
    } catch (error) {
      console.error('Error exporting users data:', error);
      toast.error(`Failed to export users data: ${error.message}`);
    }
  };
  
  // Column visibility control functions
  const toggleColumnVisibility = (columnId) => {
    setAllColumns(prev => prev.map(col => {
      if (col.id === columnId && !col.required) {
        return { ...col, visible: !col.visible };
      }
      return col;
    }));
  };
  
  const showAllColumns = () => {
    setAllColumns(prev => prev.map(col => ({ ...col, visible: true })));
  };
  
  const hideAllColumns = () => {
    setAllColumns(prev => prev.map(col => {
      if (col.required) {
        return col;
      }
      return { ...col, visible: false };
    }));
  };
  
  const resetColumns = () => {
    setAllColumns([...defaultColumns]);
  };
  
  // Column configuration persistence functions
  const getStorageKey = () => {
    return `userManagement_columns_${currentUser?.uid || 'default'}`;
  };
  
  const loadColumnConfiguration = () => {
    try {
      const savedConfig = localStorage.getItem(getStorageKey());
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        // Ensure all default columns exist in saved config
        const mergedColumns = defaultColumns.map(defaultCol => {
          const savedCol = parsedConfig.find(col => col.id === defaultCol.id);
          return savedCol ? { ...defaultCol, ...savedCol } : defaultCol;
        });
        setAllColumns(mergedColumns);
      }
      
      // Load saved presets
      const presetsKey = `userManagement_presets_${currentUser?.uid || 'default'}`;
      const savedPresets = localStorage.getItem(presetsKey);
      if (savedPresets) {
        setSavedPresets(JSON.parse(savedPresets));
      }
    } catch (error) {
      console.error('Error loading column configuration:', error);
    }
  };
  
  const saveColumnConfiguration = () => {
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(allColumns));
    } catch (error) {
      console.error('Error saving column configuration:', error);
    }
  };
  
  const savePreset = () => {
    if (!presetName.trim()) {
      toast.error('Please enter a preset name');
      return;
    }
    
    try {
      const newPreset = {
        id: Date.now().toString(),
        name: presetName.trim(),
        columns: [...allColumns],
        createdAt: new Date().toISOString()
      };
      
      const updatedPresets = [...savedPresets, newPreset];
      setSavedPresets(updatedPresets);
      
      const presetsKey = `userManagement_presets_${currentUser?.uid || 'default'}`;
      localStorage.setItem(presetsKey, JSON.stringify(updatedPresets));
      
      toast.success(`Preset "${presetName}" saved successfully`);
      setPresetName('');
      setShowPresetModal(false);
    } catch (error) {
      console.error('Error saving preset:', error);
      toast.error('Failed to save preset');
    }
  };
  
  const loadPreset = (preset) => {
    setAllColumns([...preset.columns]);
    toast.success(`Loaded preset "${preset.name}"`);
  };
  
  const deletePreset = (presetId) => {
    try {
      const updatedPresets = savedPresets.filter(p => p.id !== presetId);
      setSavedPresets(updatedPresets);
      
      const presetsKey = `userManagement_presets_${currentUser?.uid || 'default'}`;
      localStorage.setItem(presetsKey, JSON.stringify(updatedPresets));
      
      toast.success('Preset deleted successfully');
    } catch (error) {
      console.error('Error deleting preset:', error);
      toast.error('Failed to delete preset');
    }
  };
  
  // Column reordering functions
  const handleColumnDragStart = (e, index) => {
    setDraggedColumnIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleColumnDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };
  
  const handleColumnDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedColumnIndex === null || draggedColumnIndex === dropIndex) {
      setDraggedColumnIndex(null);
      setDragOverIndex(null);
      return;
    }
    
    const newColumns = [...allColumns];
    const draggedColumn = newColumns[draggedColumnIndex];
    
    // Remove the dragged column
    newColumns.splice(draggedColumnIndex, 1);
    
    // Insert at the new position
    newColumns.splice(dropIndex, 0, draggedColumn);
    
    setAllColumns(newColumns);
    setDraggedColumnIndex(null);
    setDragOverIndex(null);
  };
  
  const handleColumnDragEnd = () => {
    setDraggedColumnIndex(null);
    setDragOverIndex(null);
  };
  
  // Column resize handlers
  const handleResizeStart = (e, columnId) => {
    // Prevent default to avoid text selection during resize
    e.preventDefault();
    
    // Find the column being resized
    const column = allColumns.find(col => col.id === columnId);
    if (!column) return;
    
    // Set resizing state
    setResizingColumnId(columnId);
    setStartX(e.clientX);
    setStartWidth(column.width);
    
    // Add event listeners for mouse move and mouse up
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  };
  
  const handleResizeMove = (e) => {
    if (!resizingColumnId) return;
    
    // Calculate the new width based on mouse movement
    const deltaX = e.clientX - startX;
    const newWidth = Math.max(100, startWidth + deltaX); // Minimum width of 100px
    
    // Update the column width
    setAllColumns(prevColumns => 
      prevColumns.map(col => 
        col.id === resizingColumnId ? { ...col, width: newWidth } : col
      )
    );
  };
  
  const handleResizeEnd = () => {
    // Clear resizing state
    setResizingColumnId(null);
    
    // Remove event listeners
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);
  };
  
  // Clean up event listeners when component unmounts
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
    };
  }, []);
  
  // Get visible columns
  const visibleColumns = allColumns.filter(col => col.visible);
  
  const filteredUsers = users.filter(user => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (user.name && user.name.toLowerCase().includes(searchTermLower)) ||
      (user.email && user.email.toLowerCase().includes(searchTermLower)) ||
      (user.position && user.position.toLowerCase().includes(searchTermLower)) ||
      (user.role && user.role.toLowerCase().includes(searchTermLower))
    );
  });

  // Summary statistics and distributions
  const totalUsers = users.length;
  const statusCounts = useMemo(() => {
    const counts = { active: 0, inactive: 0, pending: 0 };
    users.forEach(u => {
      const s = (u.status || '').toLowerCase();
      if (s === 'active') counts.active += 1;
      else if (s === 'inactive') counts.inactive += 1;
      else if (s === 'pending') counts.pending += 1;
    });
    return counts;
  }, [users]);

  const roleCounts = useMemo(() => {
    const counts = { superadmin: 0, admin: 0, member: 0 };
    users.forEach(u => {
      const r = (u.role || '').toLowerCase();
      if (r === 'superadmin') counts.superadmin += 1;
      else if (r === 'admin') counts.admin += 1;
      else counts.member += 1; // default bucket
    });
    return counts;
  }, [users]);

  const companiesCount = companies?.length || 0;
  const departmentsCount = departments?.length || 0;

  const statusData = [
    { key: 'Active', value: statusCounts.active, color: '#4caf50' },
    { key: 'Inactive', value: statusCounts.inactive, color: '#f44336' },
    { key: 'Pending', value: statusCounts.pending, color: '#ff9800' },
  ];

  const roleData = [
    { key: 'Superadmin', value: roleCounts.superadmin, color: '#800000' },
    { key: 'Admin', value: roleCounts.admin, color: '#ff9800' },
    { key: 'Member', value: roleCounts.member, color: '#9e9e9e' },
  ];

  const getPercent = (value, total) => {
    if (!total) return 0;
    return Math.round((value / total) * 100);
  };

  return (
    <Container>
      <Title>
        <Users size={24} weight="bold" />
        User Management
      </Title>
       
      <TopActions>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <SearchBar
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <ColumnControlContainer>
            <ColumnControlButton onClick={() => setShowColumnControl(!showColumnControl)}>
              <List size={18} />
              Columns
              <CaretDown size={14} />
            </ColumnControlButton>
            
            {showColumnControl && (
              <ColumnControlDropdown>
                <DropdownLayout>
                  <DropdownMain>
                    <div style={{ marginBottom: '10px', fontWeight: '500' }}>Manage Columns</div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '8px' }}>Column Order (Drag to Reorder)</div>
                      <ColumnOrderList>
                        {allColumns.map((column, index) => (
                          <ColumnOrderItem
                            key={column.id}
                            draggable={!column.required}
                            onDragStart={(e) => handleColumnDragStart(e, index)}
                            onDragOver={(e) => handleColumnDragOver(e, index)}
                            onDrop={(e) => handleColumnDrop(e, index)}
                            onDragEnd={handleColumnDragEnd}
                            isDragging={draggedColumnIndex === index}
                            isDragOver={dragOverIndex === index}
                            isRequired={column.required}
                          >
                            <DragHandle>⋮⋮</DragHandle>
                            <ColumnItemContent>
                              <input
                                type="checkbox"
                                checked={column.visible}
                                onChange={() => toggleColumnVisibility(column.id)}
                                disabled={column.required}
                              />
                              <span>{column.label}</span>
                              {column.required && <RequiredBadge>Required</RequiredBadge>}
                            </ColumnItemContent>
                          </ColumnOrderItem>
                        ))}
                      </ColumnOrderList>
                    </div>
                    
                    {false && savedPresets.length > 0 && null}
                  </DropdownMain>
                  <ActionsColumn>
                    <ColumnControlButton2 onClick={showAllColumns}>Show All</ColumnControlButton2>
                    <ColumnControlButton2 onClick={hideAllColumns}>Hide All</ColumnControlButton2>
                    <ColumnControlButton2 onClick={resetColumns}>Reset</ColumnControlButton2>
                    <ColumnControlButton2 onClick={() => setShowPresetModal(true)}>
                      <BookmarkSimple size={14} />
                      Save Preset
                    </ColumnControlButton2>
                    {savedPresets.length > 0 && (
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Saved Presets</div>
                        <PresetsList>
                          {savedPresets.map(preset => (
                            <PresetItem key={preset.id}>
                              <PresetInfo>
                                <PresetName>{preset.name}</PresetName>
                                <PresetDate>{new Date(preset.createdAt).toLocaleDateString()}</PresetDate>
                              </PresetInfo>
                              <PresetActions>
                                <PresetButton onClick={() => loadPreset(preset)}>Load</PresetButton>
                                <PresetButton danger onClick={() => deletePreset(preset.id)}>Delete</PresetButton>
                              </PresetActions>
                            </PresetItem>
                          ))}
                        </PresetsList>
                      </div>
                    )}
                  </ActionsColumn>
                </DropdownLayout>
              </ColumnControlDropdown>
            )}
          </ColumnControlContainer>
        </div>
        
        <ExportButton onClick={exportUsersToExcel}>
          <DownloadSimple size={20} />
          Export Users
        </ExportButton>
      </TopActions>
      
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <TableContainer>
          <UserTable>
            <TableHead>
              <TableRow>
                {visibleColumns.map(column => (
                  <TableHeader 
                    key={column.id}
                    className={`col-${column.id} ${column.id === 'name' ? 'sticky-left' : column.id === 'actions' ? 'sticky-right' : ''} ${resizingColumnId === column.id ? 'resizing' : ''}`}
                    style={{ width: `${column.width}px` }}
                  >
                    {column.label}
                    {column.id !== 'actions' && (
                      <div 
                        className="resizer" 
                        onMouseDown={(e) => handleResizeStart(e, column.id)}
                      />
                    )}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <TableRow key={user.id}>
                    {visibleColumns.map(column => {
                      if (column.id === 'name') {
                        return (
                          <TableCell key={column.id} className="col-name sticky-left" style={{ width: `${column.width}px` }}>
                            {user.name || 'N/A'}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'email') {
                        return <TableCell key={column.id} className="col-email" style={{ width: `${column.width}px` }}>{user.email}</TableCell>;
                      }
                      
                      if (column.id === 'employmentStatus') {
                        return <TableCell key={column.id} className="col-employmentStatus" style={{ width: `${column.width}px` }}>{user.employmentStatus || user.position || 'N/A'}</TableCell>;
                      }
                      
                      if (column.id === 'position') {
                        return <TableCell key={column.id} className="col-position" style={{ width: `${column.width}px` }}>{user.position || 'N/A'}</TableCell>;
                      }
                      
                      if (column.id === 'departments') {
                        return (
                          <TableCell key={column.id} className="col-departments" style={{ width: `${column.width}px` }}>
                            {user.departments && user.departments.length > 0 ? (
                              <DepartmentTagsContainer>
                                {user.departments.map(deptId => {
                                  const dept = departments.find(d => d.id === deptId);
                                  return dept ? (
                                    <DepartmentTag key={deptId}>
                                      {dept.code}
                                    </DepartmentTag>
                                  ) : null;
                                })}
                              </DepartmentTagsContainer>
                            ) : (
                              <span style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                None assigned
                              </span>
                            )}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'role') {
                        return (
                          <TableCell key={column.id} className="col-role" style={{ width: `${column.width}px` }}>
                            <RoleTag role={user.role}>{user.role || 'member'}</RoleTag>
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'status') {
                        return (
                          <TableCell key={column.id} className="col-status" style={{ width: `${column.width}px` }}>
                            <StatusTag status={user.status || 'active'}>
                              {user.status || 'active'}
                            </StatusTag>
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'company') {
                        return (
                          <TableCell key={column.id} className="col-company" style={{ width: `${column.width}px` }}>
                            {user.companies && user.companies.length > 0 ? (
                              <DepartmentTagsContainer>
                                {user.companies.map(companyId => {
                                  const company = companies.find(c => c.id === companyId);
                                  return company ? (
                                    <DepartmentTag key={companyId} style={{ backgroundColor: '#fff8e1', color: '#ff8f00' }}>
                                      {company.name}
                                    </DepartmentTag>
                                  ) : null;
                                })}
                              </DepartmentTagsContainer>
                            ) : user.company ? (
                              <DepartmentTag style={{ backgroundColor: '#fff8e1', color: '#ff8f00' }}>
                                {(() => {
                                  const company = companies.find(c => c.id === user.company);
                                  return company ? company.name : user.company;
                                })()}
                              </DepartmentTag>
                            ) : (
                              <span style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                None assigned
                              </span>
                            )}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'shifts') {
                        return (
                          <TableCell key={column.id} className="col-shifts" style={{ width: `${column.width}px` }}>
                            {user.schedule && Array.isArray(user.schedule) ? (
                              <div>
                                <div><strong>{user.schedule.length}</strong> shifts</div>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                                  {calculateTotalHours(user.schedule)} total hours
                                </div>
                              </div>
                            ) : (
                              'No shifts'  
                            )}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'preemploymentDate') {
                        return (
                          <TableCell key={column.id} className="col-preemploymentDate" style={{ width: `${column.width}px` }}>
                            {user.preemploymentDate ? (
                              user.preemploymentDate.seconds ? 
                                new Date(user.preemploymentDate.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 
                                new Date(user.preemploymentDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                            ) : 'Not specified'}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'dateHired') {
                        return (
                          <TableCell key={column.id} className="col-dateHired" style={{ width: `${column.width}px` }}>
                            {user.dateHired ? (
                              user.dateHired.seconds ? 
                                new Date(user.dateHired.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 
                                new Date(user.dateHired).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                            ) : 'Not specified'}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'regularDate') {
                        return (
                          <TableCell key={column.id} className="col-regularDate" style={{ width: `${column.width}px` }}>
                            {user.regularDate ? (
                              user.regularDate.seconds ? 
                                new Date(user.regularDate.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 
                                new Date(user.regularDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                            ) : 'Not specified'}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'dateOfBirth') {
                        return (
                          <TableCell key={column.id} className="col-dateOfBirth" style={{ width: `${column.width}px` }}>
                            {user.dateOfBirth ? (
                              user.dateOfBirth.seconds ? 
                                new Date(user.dateOfBirth.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 
                                new Date(user.dateOfBirth).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                            ) : 'Not specified'}
                          </TableCell>
                        );
                      }
                      
                      if (column.id === 'phoneNumber') {
                        return <TableCell key={column.id} className="col-phoneNumber" style={{ width: `${column.width}px` }}>{user.phoneNumber || user.contactNumber || 'Not specified'}</TableCell>;
                      }
                      
                      if (column.id === 'address') {
                        return <TableCell key={column.id} className="col-address" style={{ width: `${column.width}px` }}>{user.address || 'Not specified'}</TableCell>;
                      }
                      
                      if (column.id === 'emergencyContactName') {
                        return <TableCell key={column.id} className="col-emergencyContactName" style={{ width: `${column.width}px` }}>{user.emergencyContactName || 'Not specified'}</TableCell>;
                      }
                      
                      if (column.id === 'emergencyContactPhone') {
                        return <TableCell key={column.id} className="col-emergencyContactPhone" style={{ width: `${column.width}px` }}>{user.emergencyContactPhone || 'Not specified'}</TableCell>;
                      }
                      
                      if (column.id === 'emergencyContactRelationship') {
                        return <TableCell key={column.id} className="col-emergencyContactRelationship" style={{ width: `${column.width}px` }}>{user.emergencyContactRelationship || 'Not specified'}</TableCell>;
                      }
                      
                      if (column.id === 'actions') {
                        return (
                          <TableCell key={column.id} className="col-actions sticky-right" style={{ width: `${column.width}px` }}>
                            <ActionButton 
                              color="#000000"
                              onClick={() => handleScheduleClick(user)}
                              title="Manage Schedule"
                            >
                              <Calendar size={20} />
                            </ActionButton>
                            <ActionButton 
                              color="#1a73e8"
                              onClick={() => handleEditClick(user)}
                              title="Edit User"
                            >
                              <Pencil size={20} />
                            </ActionButton>
                            <ActionButton 
                              color={user.status === 'active' ? '#f44336' : '#4caf50'}
                              onClick={() => toggleUserStatus(user, user.status || 'active')}
                              title={user.status === 'active' ? 'Deactivate user' : 'Activate user'}
                            >
                              {user.status === 'active' ? <X size={20} /> : <Check size={20} />}
                            </ActionButton>
                            <ActionButton 
                              color="#f44336" 
                              onClick={() => handleDeleteClick(user)}
                              title="Delete user"
                            >
                              <Trash size={20} />
                            </ActionButton>
                          </TableCell>
                        );
                      }
                      
                      return null;
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={visibleColumns.length} style={{ textAlign: 'center' }}>
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </tbody>
          </UserTable>
        </TableContainer>
      )}
      
      {showDeleteModal && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>Confirm Deletion</ModalTitle>
            <ModalText>
              Are you sure you want to delete the user {userToDelete?.name || userToDelete?.email}? 
              This action cannot be undone.
            </ModalText>
            <ModalButtons>
              <Button onClick={cancelDelete}>Cancel</Button>
              <Button primary onClick={confirmDelete}>Delete</Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showEditModal && selectedUser && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCircle size={24} />
                Edit User: {selectedUser.name || selectedUser.email}
              </div>
            </ModalTitle>
            
            {/* All information in a single page with two columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Left Column - Basic Information */}
              <div>
                <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Basic Information</h4>
                
                <FormGroup>
                  <Label>First Name</Label>
                  <Input 
                    type="text" 
                    value={editUserData.firstName}
                    onChange={(e) => setEditUserData({...editUserData, firstName: e.target.value})}
                    placeholder="First Name"
                  />
                </FormGroup>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                  <FormGroup>
                    <Label>Middle Initial</Label>
                    <Input 
                      type="text" 
                      value={editUserData.middleInitial}
                      onChange={(e) => setEditUserData({...editUserData, middleInitial: e.target.value})}
                      placeholder="M.I."
                      maxLength={1}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input 
                      type="text" 
                      value={editUserData.lastName}
                      onChange={(e) => setEditUserData({...editUserData, lastName: e.target.value})}
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </div>
                
                <FormGroup>
                  <Label>You can call me as (Preferred Name)</Label>
                  <Input 
                    type="text" 
                    value={editUserData.preferredName || ''}
                    onChange={(e) => setEditUserData({...editUserData, preferredName: e.target.value})}
                    placeholder="Preferred Name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    value={editUserData.email}
                    onChange={(e) => setEditUserData({...editUserData, email: e.target.value})}
                    placeholder="Email Address"
                  />
                </FormGroup>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <FormGroup>
                    <Label>Employment Status</Label>
                    <Select
                      value={editUserData.employmentStatus || editUserData.position}
                      onChange={(e) => setEditUserData({...editUserData, employmentStatus: e.target.value})}
                    >
                      <option value="regular">Regular</option>
                      <option value="probationary">Probationary</option>
                      <option value="intern">Intern</option>
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Date Hired</Label>
                    <Input 
                      type="date" 
                      value={editUserData.dateHired || ''}
                      onChange={(e) => setEditUserData({...editUserData, dateHired: e.target.value})}
                    />
                  </FormGroup>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <FormGroup>
                    <Label>Preemployment Date</Label>
                    <Input 
                      type="date" 
                      value={editUserData.preemploymentDate || ''}
                      onChange={(e) => setEditUserData({...editUserData, preemploymentDate: e.target.value})}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Regular Date</Label>
                    <Input 
                      type="date" 
                      value={editUserData.regularDate || ''}
                      onChange={(e) => setEditUserData({...editUserData, regularDate: e.target.value})}
                    />
                  </FormGroup>
                </div>
                
                <FormGroup>
                  <Label>Position</Label>
                  <Input 
                    type="text" 
                    value={editUserData.position || ''}
                    onChange={(e) => setEditUserData({...editUserData, position: e.target.value})}
                    placeholder="Job Position"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Companies</Label>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    Select one or more companies to assign to this user
                  </div>
                  <CheckboxContainer>
                    {companies.map(company => (
                      <CheckboxLabel 
                        key={company.id} 
                        checked={editUserData.companies?.includes(company.id)}
                      >
                        <input
                          type="checkbox"
                          checked={editUserData.companies?.includes(company.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setEditUserData({
                                ...editUserData, 
                                companies: [...(editUserData.companies || []), company.id]
                              });
                            } else {
                              setEditUserData({
                                ...editUserData, 
                                companies: (editUserData.companies || []).filter(id => id !== company.id)
                              });
                            }
                          }}
                        />
                        {company.name}
                      </CheckboxLabel>
                    ))}
                  </CheckboxContainer>
                  {companies.length === 0 && (
                    <div style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      No companies available. Add companies in the Company Management page.
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>Role {!isSuperAdmin && <span style={{ fontSize: '0.8rem', color: '#f44336' }}>(Super Admin only)</span>}</Label>
                  <Select
                    value={editUserData.role}
                    onChange={(e) => setEditUserData({...editUserData, role: e.target.value})}
                    disabled={!isSuperAdmin}
                    style={!isSuperAdmin ? { backgroundColor: '#f5f5f5', cursor: 'not-allowed' } : {}}
                  >
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                    <option value="super_admin">Super Admin</option>
                  </Select>
                  {!isSuperAdmin && (
                    <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#666' }}>
                      Only Super Admins can change user roles
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>Date of Birth</Label>
                  <Input 
                    type="date" 
                    value={editUserData.dateOfBirth}
                    onChange={(e) => setEditUserData({...editUserData, dateOfBirth: e.target.value})}
                  />
                </FormGroup>
              </div>
              
              {/* Right Column - Additional Information */}
              <div>
                <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Additional Information</h4>
                
                <FormGroup>
                  <Label>Phone #</Label>
                  <Input 
                    type="text" 
                    value={editUserData.phoneNumber}
                    onChange={(e) => setEditUserData({...editUserData, phoneNumber: e.target.value})}
                    placeholder="Phone Number"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Address</Label>
                  <Input 
                    type="text" 
                    value={editUserData.address}
                    onChange={(e) => setEditUserData({...editUserData, address: e.target.value})}
                    placeholder="Complete Address"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Emergency Contact Name</Label>
                  <Input 
                    type="text" 
                    value={editUserData.emergencyContactName}
                    onChange={(e) => setEditUserData({...editUserData, emergencyContactName: e.target.value})}
                    placeholder="Emergency Contact Name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Emergency Contact Phone</Label>
                  <Input 
                    type="text" 
                    value={editUserData.emergencyContactPhone}
                    onChange={(e) => setEditUserData({...editUserData, emergencyContactPhone: e.target.value})}
                    placeholder="Emergency Contact Phone"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Relationship</Label>
                  <Input 
                    type="text" 
                    value={editUserData.emergencyContactRelationship}
                    onChange={(e) => setEditUserData({...editUserData, emergencyContactRelationship: e.target.value})}
                    placeholder="Relationship to Employee"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Departments</Label>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    Select one or more departments to assign to this user
                  </div>
                  <CheckboxContainer>
                    {departments.map(dept => (
                      <CheckboxLabel 
                        key={dept.id} 
                        checked={editUserData.departments?.includes(dept.id)}
                      >
                        <input
                          type="checkbox"
                          checked={editUserData.departments?.includes(dept.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setEditUserData({
                                ...editUserData, 
                                departments: [...(editUserData.departments || []), dept.id]
                              });
                            } else {
                              setEditUserData({
                                ...editUserData, 
                                departments: (editUserData.departments || []).filter(id => id !== dept.id)
                              });
                            }
                          }}
                        />
                        {dept.name} ({dept.code})
                      </CheckboxLabel>
                    ))}
                  </CheckboxContainer>
                  {departments.length === 0 && (
                    <div style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      No departments available. Please add departments in the Department Management page.
                    </div>
                  )}
                </FormGroup>
              </div>
            </div>
            
            <ModalButtons>
              <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
              <Button primary onClick={handleUpdateUser}>
                <Icon><FloppyDisk size={16} /></Icon>
                Save Changes
              </Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showAddUserModal && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '500px', width: '100%' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCircle size={24} />
                Add New User {addUserPage > 1 && `- Page ${addUserPage} of 2`}
              </div>
            </ModalTitle>
            
            {/* Page 1 - Basic Information */}
            {addUserPage === 1 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <FormGroup>
                  <Label>First Name <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="text" 
                    value={newUserData.firstName}
                    onChange={(e) => setNewUserData({...newUserData, firstName: e.target.value})}
                    placeholder="First Name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Middle Initial</Label>
                  <Input 
                    type="text" 
                    value={newUserData.middleInitial}
                    onChange={(e) => setNewUserData({...newUserData, middleInitial: e.target.value})}
                    placeholder="Middle Initial"
                    maxLength={1}
                  />
                  <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#666' }}>
                    Just the first letter, without period
                  </div>
                </FormGroup>
                
                <FormGroup>
                  <Label>Last Name <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="text" 
                    value={newUserData.lastName}
                    onChange={(e) => setNewUserData({...newUserData, lastName: e.target.value})}
                    placeholder="Last Name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Email <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="email" 
                    value={newUserData.email}
                    onChange={(e) => setNewUserData({...newUserData, email: e.target.value})}
                    placeholder="Email Address"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Employment Status</Label>
                  <Select
                    value={newUserData.employmentStatus}
                    onChange={(e) => setNewUserData({...newUserData, employmentStatus: e.target.value})}
                  >
                    <option value="regular">Regular</option>
                    <option value="probationary">Probationary</option>
                    <option value="intern">Intern</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label>Position</Label>
                  <Input 
                    type="text" 
                    value={newUserData.position}
                    onChange={(e) => setNewUserData({...newUserData, position: e.target.value})}
                    placeholder="Job Position"
                  />
                </FormGroup>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <FormGroup>
                    <Label>Date Hired</Label>
                    <Input 
                      type="date" 
                      value={newUserData.dateHired}
                      onChange={(e) => setNewUserData({...newUserData, dateHired: e.target.value})}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Preemployment Date</Label>
                    <Input 
                      type="date" 
                      value={newUserData.preemploymentDate || ''}
                      onChange={(e) => setNewUserData({...newUserData, preemploymentDate: e.target.value})}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Regular Date</Label>
                    <Input 
                      type="date" 
                      value={newUserData.regularDate || ''}
                      onChange={(e) => setNewUserData({...newUserData, regularDate: e.target.value})}
                    />
                  </FormGroup>
                </div>
                
                <FormGroup>
                  <Label>Role {!isSuperAdmin && <span style={{ fontSize: '0.8rem', color: '#f44336' }}>(Super Admin only)</span>}</Label>
                  <Select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({...newUserData, role: e.target.value})}
                    disabled={!isSuperAdmin}
                    style={!isSuperAdmin ? { backgroundColor: '#f5f5f5', cursor: 'not-allowed' } : {}}
                  >
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                    <option value="super_admin">Super Admin</option>
                  </Select>
                  {!isSuperAdmin && (
                    <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#666' }}>
                      Only Super Admins can change user roles
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>Status</Label>
                  <Select
                    value={newUserData.status}
                    onChange={(e) => setNewUserData({...newUserData, status: e.target.value})}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label>Departments</Label>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    Select one or more departments to assign to this user
                  </div>
                  <CheckboxContainer>
                    {departments.map(dept => (
                      <CheckboxLabel 
                        key={dept.id} 
                        checked={newUserData.departments?.includes(dept.id)}
                      >
                        <input
                          type="checkbox"
                          checked={newUserData.departments?.includes(dept.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNewUserData({
                                ...newUserData, 
                                departments: [...(newUserData.departments || []), dept.id]
                              });
                            } else {
                              setNewUserData({
                                ...newUserData, 
                                departments: (newUserData.departments || []).filter(id => id !== dept.id)
                              });
                            }
                          }}
                        />
                        {dept.name} ({dept.code})
                      </CheckboxLabel>
                    ))}
                  </CheckboxContainer>
                  {departments.length === 0 && (
                    <div style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      No departments available. Please add departments in the Department Management page.
                    </div>
                  )}
                </FormGroup>
              </div>
            )}
            
            {/* Page 2 - Additional Information */}
            {addUserPage === 2 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <FormGroup>
                  <Label>Companies</Label>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    Select one or more companies to assign to this user
                  </div>
                  <CheckboxContainer>
                    {companies.map(company => (
                      <CheckboxLabel 
                        key={company.id} 
                        checked={newUserData.companies?.includes(company.id)}
                      >
                        <input
                          type="checkbox"
                          checked={newUserData.companies?.includes(company.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNewUserData({
                                ...newUserData, 
                                companies: [...(newUserData.companies || []), company.id]
                              });
                            } else {
                              setNewUserData({
                                ...newUserData, 
                                companies: (newUserData.companies || []).filter(id => id !== company.id)
                              });
                            }
                          }}
                        />
                        {company.name}
                      </CheckboxLabel>
                    ))}
                  </CheckboxContainer>
                  {companies.length === 0 && (
                    <div style={{ color: '#999', fontStyle: 'italic', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      No companies available. Add companies in the Company Management page.
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>Address</Label>
                  <Input 
                    type="text" 
                    value={newUserData.address}
                    onChange={(e) => setNewUserData({...newUserData, address: e.target.value})}
                    placeholder="Complete Address"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Contact Number</Label>
                  <Input 
                    type="text" 
                    value={newUserData.contactNumber}
                    onChange={(e) => setNewUserData({...newUserData, contactNumber: e.target.value})}
                    placeholder="Contact Number"
                  />
                </FormGroup>
                

              </div>
            )}
            
            <ModalButtons>
              {addUserPage === 1 ? (
                <>
                  <Button onClick={() => setShowAddUserModal(false)}>Cancel</Button>
                  <Button primary onClick={() => setAddUserPage(2)}>
                    <Icon><ArrowRight size={16} /></Icon>
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setAddUserPage(1)}>
                    <Icon><ArrowLeft size={16} /></Icon>
                    Back
                  </Button>
                  <Button primary onClick={handleAddUser}>
                    <Icon><FloppyDisk size={16} /></Icon>
                    Add User
                  </Button>
                </>
              )}
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showScheduleModal && selectedUser && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={24} />
                Manage Schedule for {selectedUser.name || selectedUser.email}
              </div>
            </ModalTitle>
            
            <div style={{ marginBottom: '1rem', background: '#f5f9ff', padding: '0.75rem', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>Total Shifts:</strong> {scheduleData.length}
                </div>
                <div>
                  <strong>Total Hours:</strong> {calculateTotalHours(scheduleData)} hours/week
                </div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Left Column - Current Schedule */}
              <div>
                <h4 style={{ marginTop: '0', marginBottom: '0.75rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Current Schedule</h4>
                
                {scheduleData.length > 0 ? (
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <ScheduleGrid>
                      {scheduleData.map(schedule => (
                        <ScheduleCard key={schedule.id}>
                          <ScheduleHeader>
                            <ScheduleDay>{schedule.dayOfWeek}</ScheduleDay>
                            <div>
                              <ActionButton 
                                color="#000000" 
                                onClick={() => handleEditSchedule(schedule)}
                                title="Edit schedule"
                                style={{ marginRight: '4px' }}
                              >
                                <PencilSimple size={16} />
                              </ActionButton>
                              <ActionButton 
                                color="#f44336" 
                                onClick={() => handleDeleteSchedule(schedule.id)}
                                title="Delete schedule"
                              >
                                <Trash size={16} />
                              </ActionButton>
                            </div>
                          </ScheduleHeader>
                          <ScheduleTime>
                            <div><strong>Time In:</strong> {schedule.timeIn}</div>
                            <div><strong>Region:</strong> {schedule.timeRegion}</div>
                            <div><strong>Duration:</strong> {formatDuration(schedule.shiftDuration)}</div>
                          </ScheduleTime>
                        </ScheduleCard>
                      ))}
                    </ScheduleGrid>
                  </div>
                ) : (
                  <p>No schedules found. Add a new schedule.</p>
                )}
              </div>
              
              {/* Right Column - Add/Edit Schedule */}
              <div>
                <h4 style={{ marginTop: '0', marginBottom: '0.75rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</h4>
                
                <FormGroup>
                  <Label>Days of Week (select multiple)</Label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {daysOfWeek.map(day => (
                      <DayCheckbox key={day}>
                        <input
                          type="checkbox"
                          id={`day-${day}`}
                          checked={newSchedule.selectedDays.includes(day)}
                          onChange={() => {
                            const updatedDays = newSchedule.selectedDays.includes(day)
                              ? newSchedule.selectedDays.filter(d => d !== day)
                              : [...newSchedule.selectedDays, day];
                            setNewSchedule({...newSchedule, selectedDays: updatedDays});
                          }}
                        />
                        <label htmlFor={`day-${day}`}>{day}</label>
                      </DayCheckbox>
                    ))}
                  </div>
                </FormGroup>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <FormGroup>
                    <Label>Time In</Label>
                    <Input 
                      type="time" 
                      value={newSchedule.timeIn}
                      onChange={(e) => setNewSchedule({...newSchedule, timeIn: e.target.value})}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Shift Duration</Label>
                    <DurationRow>
                      <div style={{ flex: 1 }}>
                        <SmallLabel>Hours</SmallLabel>
                        <Input 
                          type="number" 
                          min="0" 
                          max="24" 
                          value={newSchedule.shiftHours}
                          onChange={(e) => setNewSchedule({...newSchedule, shiftHours: e.target.value})}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <SmallLabel>Minutes</SmallLabel>
                        <Input 
                          type="number" 
                          min="0" 
                          max="59" 
                          value={newSchedule.shiftMinutes}
                          onChange={(e) => setNewSchedule({...newSchedule, shiftMinutes: e.target.value})}
                        />
                      </div>
                    </DurationRow>
                  </FormGroup>
                </div>
                
                <FormGroup>
                  <Label>Time Region</Label>
                  <Select 
                    value={newSchedule.timeRegion}
                    onChange={(e) => setNewSchedule({...newSchedule, timeRegion: e.target.value})}
                  >
                    <optgroup label="Asia & Pacific">
                      <option value="Asia/Manila">Asia/Manila (PHT)</option>
                      <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                      <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                    </optgroup>
                    <optgroup label="Americas">
                      <option value="America/New_York">America/New_York (Eastern)</option>
                      <option value="America/Chicago">America/Chicago (Central)</option>
                      <option value="America/Denver">America/Denver (Mountain)</option>
                      <option value="America/Los_Angeles">America/Los_Angeles (Pacific)</option>
                      <option value="America/Anchorage">America/Anchorage (Alaska)</option>
                      <option value="America/Adak">America/Adak (Hawaii-Aleutian)</option>
                      <option value="Pacific/Honolulu">Pacific/Honolulu (Hawaii)</option>
                      <option value="America/Phoenix">America/Phoenix (Arizona)</option>
                      <option value="America/Toronto">America/Toronto (Eastern Canada)</option>
                      <option value="America/Vancouver">America/Vancouver (Pacific Canada)</option>
                    </optgroup>
                    <optgroup label="Europe & Africa">
                      <option value="Europe/London">Europe/London (GMT/BST)</option>
                      <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                      <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                      <option value="Europe/Moscow">Europe/Moscow (MSK)</option>
                    </optgroup>
                  </Select>
                </FormGroup>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  {isEditing ? (
                    <>
                      <Button 
                        primary 
                        onClick={handleUpdateSchedule}
                      >
                        Update Schedule
                      </Button>
                      <Button 
                        onClick={cancelEdit}
                      >
                        Cancel Edit
                      </Button>
                    </>
                  ) : (
                    <Button 
                      primary 
                      onClick={handleAddSchedule}
                    >
                      Add Schedule
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <ModalButtons>
              <Button onClick={() => setShowScheduleModal(false)}>Cancel</Button>
              <Button primary onClick={handleSaveSchedule}>
                <FloppyDisk size={16} />
                Save Schedule
              </Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {/* Save Preset Modal */}
      {showPresetModal && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '400px' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookmarkSimple size={24} />
                Save Column Preset
              </div>
            </ModalTitle>
            
            <FormGroup>
              <Label>Preset Name</Label>
              <Input 
                type="text" 
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                placeholder="Enter a name for this column configuration"
                onKeyPress={(e) => e.key === 'Enter' && savePreset()}
              />
            </FormGroup>
            
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
              This will save the current column visibility and order settings.
            </div>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowPresetModal(false);
                setPresetName('');
              }}>Cancel</Button>
              <Button primary onClick={savePreset}>
                <BookmarkSimple size={16} />
                Save Preset
              </Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
    </Container>
  );
}

export default UserManagementView;

const Container = styled.div`
  /* Local theme tokens */
  --primary: #800000;
  --primary-600: #600000;
  --primary-700: #4a0000;
  --accent: #4caf50;
  --bg: #f7f8fa;
  --card: #ffffff;
  --border: #e5e7eb;
  --muted: #667085;
  --text: #1f2937;

  padding: 2rem;
  background: var(--bg);
  min-height: 100%;
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background-color: var(--card);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  position: relative;
  max-height: calc(100vh - 250px);
  overflow-y: auto;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`;

const TableHead = styled.thead`
  background-color: #fafafa;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fbfbfb;
  }
  
  &:hover {
    background-color: #f5f7fb;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  background-color: #fafafa;
  white-space: nowrap;
  position: relative;
  
  /* Default minimum width for all columns */
  min-width: 180px;
  
  /* Specific column widths */
  &.col-name { min-width: 200px; }
  &.col-email { min-width: 250px; }
  &.col-employmentStatus { min-width: 180px; }
  &.col-position { min-width: 200px; }
  &.col-role { min-width: 120px; }
  &.col-status { min-width: 120px; }
  &.col-shifts { min-width: 150px; }
  &.col-dateHired { min-width: 180px; }
  &.col-dateOfBirth { min-width: 180px; }
  &.col-phoneNumber { min-width: 180px; }
  &.col-address { min-width: 250px; max-width: 300px; }
  &.col-emergencyContactName { min-width: 220px; }
  &.col-emergencyContactPhone { min-width: 220px; }
  &.col-emergencyContactRelationship { min-width: 220px; }
  &.col-actions { min-width: 180px; }
  
  &.sticky-left {
    position: sticky;
    left: 0;
    z-index: 20;
    box-shadow: 2px 0 5px -2px rgba(0,0,0,0.1);
    background-color: #fafafa !important;
  }
  
  &.sticky-right {
    position: sticky;
    right: 0;
    z-index: 20;
    box-shadow: -2px 0 5px -2px rgba(0,0,0,0.1);
    background-color: #fafafa !important;
  }
  
  /* Resizer handle */
  .resizer {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: rgba(0, 0, 0, 0.08);
    cursor: col-resize;
    user-select: none;
    touch-action: none;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  &:hover .resizer {
    opacity: 1;
  }
  
  &.resizing {
    cursor: col-resize;
    
    .resizer {
      opacity: 1;
      background: rgba(128, 0, 0, 0.4);
    }
  }
`;

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
  background-color: var(--card);
  
  /* Match the widths from TableHeader */
  &.col-name { min-width: 200px; }
  &.col-email { min-width: 250px; }
  &.col-employmentStatus { min-width: 180px; }
  &.col-position { min-width: 200px; }
  &.col-role { min-width: 120px; }
  &.col-status { min-width: 120px; }
  &.col-shifts { min-width: 150px; }
  &.col-dateHired { min-width: 180px; }
  &.col-dateOfBirth { min-width: 180px; }
  &.col-phoneNumber { min-width: 180px; }
  &.col-address { 
    min-width: 250px; 
    max-width: 300px; 
    white-space: normal; /* Allow text wrapping for address */
    word-break: break-word;
  }
  &.col-emergencyContactName { min-width: 220px; }
  &.col-emergencyContactPhone { min-width: 220px; }
  &.col-emergencyContactRelationship { min-width: 220px; }
  &.col-actions { min-width: 180px; }
  
  &.sticky-left {
    position: sticky;
    left: 0;
    z-index: 10;
    background-color: var(--card) !important;
    box-shadow: 2px 0 5px -2px rgba(0,0,0,0.1);
  }
  
  &.sticky-right {
    position: sticky;
    right: 0;
    z-index: 10;
    background-color: var(--card) !important;
    box-shadow: -2px 0 5px -2px rgba(0,0,0,0.1);
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.color || 'var(--text)'};
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

const RoleTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  
  &.superadmin {
    background-color: var(--primary);
    color: white;
  }
  
  &.admin {
    background-color: #ff9800;
    color: white;
  }
  
  &.member {
    background-color: #e0e0e0;
    color: #333;
  }
`;

const DepartmentTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #e3f2fd;
  color: #1565c0;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`;

const DepartmentTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  max-width: 100%;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${props => props.checked ? '#e3f2fd' : '#f5f5f5'};
  border: 1px solid ${props => props.checked ? '#1565c0' : '#ddd'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.checked ? '#bbdefb' : '#e0e0e0'};
  }
  
  input {
    margin-right: 0.5rem;
  }
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch(props.status) {
      case 'active':
        return '#4caf50';
      case 'inactive':
        return '#f44336';
      case 'pending':
        return '#ff9800';
      default:
        return '#9e9e9e';
    }
  }};
  color: white;
`;

const SearchBar = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  width: 300px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ColumnControlContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ColumnControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1rem;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const ColumnControlDropdown = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100% + 8px);
  width: 520px;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  z-index: 100;
  padding: 0.75rem;
  margin-top: 0;
  max-height: 85vh;
  overflow-y: auto;
  transform: translateY(calc(-50% + 16px));

  @media (max-width: 768px) {
    top: 100%;
    left: 0;
    width: 95vw;
    margin-top: 5px;
    transform: none;
  }
`;

// Two-column layout for dropdown content: main content on the left, actions on the right
const DropdownLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px;
  gap: 12px;
  align-items: start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const DropdownMain = styled.div`
  min-width: 0; /* allow content to shrink within grid */
`;

const ActionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  width: 120px;
  min-width: 120px;
  position: sticky;
  top: 0; /* keep actions visible while scrolling */
`;

const ColumnCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  & > input {
    margin-right: 10px;
  }
`;

const ColumnControlActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;

const ColumnOrderList = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
  background: white;
`;

const ColumnOrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: ${props => props.isRequired ? 'default' : 'move'};
  background-color: ${props => {
    if (props.isDragging) return '#e3f2fd';
    if (props.isDragOver) return '#f3e5f5';
    return 'white';
  }};
  opacity: ${props => props.isDragging ? 0.5 : 1};
  transition: background-color 0.2s, opacity 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => props.isRequired ? 'white' : '#f8f9fa'};
  }
`;

const DragHandle = styled.div`
  margin-right: 8px;
  color: #999;
  font-size: 12px;
  cursor: grab;
  user-select: none;
  
  &:active {
    cursor: grabbing;
  }
`;

const ColumnItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  
  input[type="checkbox"] {
    margin: 0;
  }
  
  span {
    flex: 1;
    font-size: 0.9rem;
  }
`;

const RequiredBadge = styled.span`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const ColumnControlButton2 = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.primary ? 'var(--primary)' : 'var(--card)'};
  color: ${props => props.primary ? 'white' : 'var(--text)'};
  border: 1px solid ${props => props.primary ? 'var(--primary)' : 'var(--border)'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-600)' : '#f3f4f6'};
  }
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #388e3c;
  }
  
  &:active {
    background-color: #2e7d32;
  }
`;

const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--card);
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: var(--text);
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: var(--muted);
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background-color: ${props => props.primary ? 'var(--primary)' : 'var(--card)'};
  color: ${props => props.primary ? 'white' : 'var(--text)'};
  border: 1px solid ${props => props.primary ? 'var(--primary)' : 'var(--border)'};
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-600)' : '#f3f4f6'};
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;

// Form elements for schedule editing
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const DayCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: var(--bg);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f2f5;
  }
  
  input {
    margin-right: 0.5rem;
  }
  
  input:checked + label {
    font-weight: 600;
    color: var(--primary);
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ScheduleCard = styled.div`
  background-color: var(--card);
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScheduleDay = styled.h4`
  margin: 0;
  color: var(--text);
`;

const ScheduleTime = styled.div`
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
`;

const ScheduleActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;

const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

// Summary tiles
const StatTileValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
`;

const StatTileLabel = styled.div`
  color: var(--muted);
`;

// Lightweight bar charts
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ChartRow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr 48px;
  align-items: center;
  gap: 0.75rem;
`;

const ChartLabel = styled.div`
  color: var(--text);
  font-size: 0.9rem;
`;

const ChartBarTrack = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: #eee;
  overflow: hidden;
`;

const ChartBarFill = styled.div`
  height: 100%;
  border-radius: 999px;
`;

const ChartValue = styled.div`
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--muted);
`;

// Shift duration input layout
const DurationRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
`;

const SmallLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
  color: var(--muted);
`;

const PresetsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const PresetItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
`;

const PresetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

const PresetName = styled.div`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

const PresetDate = styled.div`
  font-size: 0.75rem;
  color: var(--muted);
`;

const PresetActions = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;

const PresetButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  background-color: ${props => props.danger ? '#fee' : '#e3f2fd'};
  color: ${props => props.danger ? '#d32f2f' : '#1976d2'};
  
  &:hover {
    background-color: ${props => props.danger ? '#ffcdd2' : '#bbdefb'};
  }
`;