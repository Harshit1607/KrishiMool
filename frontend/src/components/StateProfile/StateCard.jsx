import React from 'react';
import StateMetrics from './StateMetrics';
import './StateCard.css';

const StateCard = ({ state }) => {
  return (
    <div className="state-card">
      <div className="state-status">
        <span>{state.name}</span>
        <span className="state-circle"></span>
      </div>
      <div className="state-img">

      </div>
      <div className="state-info">
        <span>Lorem Ipsum</span>
        <span>Lorem ipsum dolor sit amet consectetur</span>
        <StateMetrics />
      </div>
    </div>
  );
};

export default StateCard;
