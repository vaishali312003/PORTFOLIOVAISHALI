// NameHeader.js
import React from 'react';
import vaishalipic from './vaishalipic.jfif'; // Import your image

const NameHeader = () => {
  return (
    <div className="name-header">
      {/* eslint-disable-next-line */}
      <img src={vaishalipic} alt="Profile picture of Vaishali Gupta" className="profile-pic" />
      <h1>Vaishali Gupta</h1>
    </div>
  );
};

export default NameHeader;
