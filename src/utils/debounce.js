/**
 * Debounce utility to prevent multiple rapid function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @param {boolean} immediate - Whether to execute the function immediately
 * @returns {Function} - The debounced function
 */
export const debounce = (func, wait = 500, immediate = false) => {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
};

/**
 * Prevents multiple submissions by disabling the function for a specified time
 * @param {Function} func - The function to protect
 * @param {number} cooldown - The cooldown time in milliseconds
 * @returns {Function} - The protected function that can only be called once within the cooldown period
 */
export const preventMultiSubmit = (func, cooldown = 2000) => {
  let isSubmitting = false;
  let timeoutId = null;
  
  return function(...args) {
    if (isSubmitting) return;
    
    isSubmitting = true;
    
    try {
      return func.apply(this, args);
    } finally {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set a new timeout to reset the submitting state
      timeoutId = setTimeout(() => {
        isSubmitting = false;
      }, cooldown);
    }
  };
};
