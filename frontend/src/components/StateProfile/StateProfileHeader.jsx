import React from 'react';
import './StateProfileHeader.css';

const StateProfileHeader = () => {
  return (
    <div className="state-profile-header">
      <header>
          <h1>State Profile</h1>
          <span>Lorem ipsum dolor sit amet consectetur inske Velit.</span>
      </header>
      <input type="text" placeholder="Search State" className="search-bar" />
    </div>
  );
};

export default StateProfileHeader;
