import React from 'react';

const ProfileStatus = React.memo(({ isOnline }) => {
  return (
    <div className="status-badge-container">
      <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`} />
      <span className="status-text">
        {isOnline ? 'Active Now' : 'Currently Away'}
      </span>
    </div>
  );
});

export default ProfileStatus;