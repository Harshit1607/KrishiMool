import React from 'react';
import './CommodityCard.css';
import Commodity from '../../Assets/Commodity.png'

const CommodityCard = ({ data }) => {
  return (
    <div className="commodity-card">
      <div className="commodity-card-top">
        <div className="commodity-card-left">
          <span>{data.name}</span>
          <span className="price">
            <span>{data.price}</span>
            <span>Current Price</span>
          </span>
        </div>
        <div className="commodity-card-right">
          <img src={Commodity} alt='graph' />
        </div>
      </div>
      <div className="commodity-card-bottom">
        <span className="change">Since last week ↑ {data.change}</span>
      </div>
    </div>
  );
};

export default CommodityCard;
