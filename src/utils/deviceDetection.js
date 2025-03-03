/**
 * Utility functions for device detection
 */

/**
 * Checks if the current device is a mobile device
 * @returns {boolean} - True if the device is a mobile device, false otherwise
 */
export const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Regular expressions for mobile device detection
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  
  // Check if the screen size is typical for mobile devices
  const isMobileScreenSize = window.innerWidth < 768;
  
  return mobileRegex.test(userAgent) || isMobileScreenSize;
};

/**
 * Checks if the current device is a PC
 * @returns {boolean} - True if the device is a PC, false otherwise
 */
export const isPCDevice = () => {
  return !isMobileDevice();
};
