const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

/**
 * Cloud function to delete a user from Firebase Authentication
 * This function is triggered by an HTTP request
 * It requires the caller to be authenticated as a super_admin
 */
exports.deleteAuthUser = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  try {
    // Check if the caller is a super_admin
    const callerUid = context.auth.uid;
    const callerDoc = await admin.firestore().collection('users').doc(callerUid).get();
    
    if (!callerDoc.exists || callerDoc.data().role !== 'super_admin') {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Only super admins can delete users.'
      );
    }

    // Get the user ID to delete
    const { userId } = data;
    if (!userId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function must be called with a userId to delete.'
      );
    }

    // Delete the user from Firebase Authentication
    await admin.auth().deleteUser(userId);
    
    // Log the deletion
    await admin.firestore().collection('system_logs').add({
      action: 'delete_user',
      userId: userId,
      deletedBy: callerUid,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new functions.https.HttpsError(
      'internal',
      'An error occurred while deleting the user.',
      error.message
    );
  }
});

/**
 * Cloud function to decline a registration request
 * This function is triggered by an HTTP request
 * It requires the caller to be authenticated as a super_admin
 * It will:
 * 1. Move the request to declined_registrations collection
 * 2. Delete the user from Firebase Authentication
 * 3. Delete the request from registration_requests collection
 */
exports.declineRegistration = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  try {
    // Check if the caller is a super_admin
    const callerUid = context.auth.uid;
    const callerDoc = await admin.firestore().collection('users').doc(callerUid).get();
    
    if (!callerDoc.exists || callerDoc.data().role !== 'super_admin') {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Only super admins can decline registration requests.'
      );
    }

    // Get the request ID and user ID
    const { requestId, userId } = data;
    if (!requestId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function must be called with a requestId to decline.'
      );
    }

    // Get the request data
    const requestDoc = await admin.firestore().collection('registration_requests').doc(requestId).get();
    if (!requestDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Registration request not found.'
      );
    }

    const requestData = requestDoc.data();

    // Add to declined_registrations collection
    await admin.firestore().collection('declined_registrations').doc(requestId).set({
      ...requestData,
      declinedAt: admin.firestore.FieldValue.serverTimestamp(),
      declinedBy: callerUid
    });

    // Delete the user from Firebase Authentication if the user ID is provided
    if (userId && !userId.startsWith('temp_')) {
      try {
        await admin.auth().deleteUser(userId);
      } catch (authError) {
        console.error('Error deleting user from Authentication:', authError);
        // Don't throw this error, as we still want to decline the registration
      }
    }

    // Delete from registration_requests collection
    await admin.firestore().collection('registration_requests').doc(requestId).delete();

    // Log the action
    await admin.firestore().collection('system_logs').add({
      action: 'decline_registration',
      requestId: requestId,
      userId: userId,
      declinedBy: callerUid,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true, message: 'Registration request declined successfully' };
  } catch (error) {
    console.error('Error declining registration request:', error);
    throw new functions.https.HttpsError(
      'internal',
      'An error occurred while declining the registration request.',
      error.message
    );
  }
});
