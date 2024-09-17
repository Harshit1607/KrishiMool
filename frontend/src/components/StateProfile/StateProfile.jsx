import React from 'react';
import { useSelector } from 'react-redux';
import StateProfileHeader from './StateProfileHeader';
import StateCardContainer from './StateCardContainer';
import './StateProfile.css';

const StateProfile = () => {
  const states = useSelector((state) => state.stateProfile.states);

  return (
    <div className="state-profile-container">
      <StateProfileHeader />
      <StateCardContainer states={states} />
    </div>
  );
};

export default StateProfile;
