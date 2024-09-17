import React from 'react';
import StateCard from './StateCard';
import './StateCardContainer.css';
import Carousel from '../../Utils/Carousel';

const StateCardContainer = ({ states }) => {
  return (
    <div className="state-card-container">
      <Carousel length={3} >
        {states.map((state, index) => (
          <StateCard key={index} state={state} />
        ))}
      </Carousel>
    </div>
  );
};

export default StateCardContainer;
