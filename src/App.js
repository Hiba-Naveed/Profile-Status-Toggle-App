import React, { useState, useEffect, useCallback } from 'react';
import ProfileStatus from './ProfileStatus';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(() => {
    const savedStatus = localStorage.getItem('profile_status');
    return savedStatus !== null ? JSON.parse(savedStatus) : true;
  });

  useEffect(() => {
    localStorage.setItem('profile_status', JSON.stringify(isOnline));
    console.log(`[Status Tracker]: Profile status updated to -> ${isOnline ? 'ONLINE' : 'OFFLINE'}`);
  }, [isOnline]);

  const handleToggleStatus = useCallback(() => {
    setIsOnline((prevStatus) => !prevStatus);
  }, []);

  return (
    <div className="app-container">
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
            alt="Profile Avatar"
            className="avatar-img"
          />
          <span className={`status-dot ${isOnline ? 'online' : 'offline'}`} />
        </div>

        <h2 className="user-name">Hiba Naveed</h2>
        <p className="user-role">BSAI Student & Web Developer</p>

        {/* Child Component */}
        <ProfileStatus isOnline={isOnline} />

        {/* Custom Toggle Switch */}
        <div className="toggle-control-wrapper">
          <span className="toggle-label">
            {isOnline ? 'Status: Online' : 'Status: Offline'}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnline}
              onChange={handleToggleStatus}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;