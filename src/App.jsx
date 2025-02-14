import React, { useState, useEffect } from 'react';

const UserOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);  // lets assume the user is online.
  const [isUserActive, setIsUserActive] = useState(true);  // Tracks user activity

  useEffect(() => {
    let timeout;
    const activityTimeout = 10000; // 10 seconds timeout for inactivity

    // Event handlers for detecting user activity
    const handleActivity = () => {
      if (!isUserActive) {
        setIsUserActive(true);
      }

      // Clear the previous timeout and set a new one
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsUserActive(false);
        setIsOnline(false);  // Mark as offline after 10 seconds of inactivity
      }, activityTimeout);
    };

    // Listen to user activity events
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // Initial check for online status
    const checkInitialStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Detecting online/offline events to reflect the actual network status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);


    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    checkInitialStatus();

    // Cleanup listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timeout);
    };
  }, [isUserActive]);

  useEffect(() => {
    // If the user becomes inactive and we're still online, show offline
    if (!isUserActive) {
      setIsOnline(false);
    }
  }, [isUserActive]);

  return (
    <div>
      <h2>Status: {isOnline ? 'Online' : 'Offline'}</h2>
      <p>{isUserActive ? 'You are active.' : 'You are inactive.'}</p>
    </div>
  );
};

export default UserOnlineStatus;