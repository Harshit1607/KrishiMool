import React from 'react';
import StateCard from './StateCard';
import './StateCardContainer.css';

const StateCardContainer = ({ states }) => {
  return (
    <div className="state-card-container">
      {states.map((state, index) => (
        <StateCard key={index} state={state} />
      ))}
    </div>
  );
};

export default StateCardContainer;
