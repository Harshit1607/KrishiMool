import React from 'react';
import map from '../../Assets/map.png'
import './HotzonesMap.css';

const HotzonesMap = () => {
  return (
    <div className="hotzones-map">
      <div>
      <img src={map} alt='graph'/>
      <div className="upcoming-peak">
        <span><span className="dot"></span><span>Upcoming Peak</span></span>
        <span><span className="dot"></span><span>Upcoming Peak</span></span>
        <span><span className="dot"></span><span>Upcoming Peak</span></span>
        <span><span className="dot"></span><span>Upcoming Peak</span></span>
      </div>
      </div>
    </div>
  );
};

export default HotzonesMap;
