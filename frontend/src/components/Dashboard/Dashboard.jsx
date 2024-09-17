import React from 'react';
import { useSelector } from 'react-redux';
import CommodityCard from './CommodityCard';
import HotzonesMap from './HotzonesMap';
import './Dashboard.css';
import Graph from './Graph';
import Trend from './Trend';
import Carousel from '../../Utils/Carousel';

const Dashboard = () => {
  const {commodities} = useSelector(state=>state.dashboard)
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header>
          <h1>Welcome Teena!</h1>
          <span>Lorem ipsum dolor sit amet consectetur inske Velit.</span>
        </header>
        <div className="commodity-search">
          <h2>Commodities Trend</h2>
          <input placeholder='Search Commodity' />
        </div>
        <div className="commodity-trend">
          <Carousel length={4}>
            {commodities.map((commodity) => (
                <CommodityCard key={commodity.name} data={commodity} />
              ))}
          </Carousel>

        </div>
        <div className="chart-placeholder">
          <div className="chart-placeholder-left">
            <Graph />
            <Trend />
          </div>
          <div className="chart-placeholder-right">
            <HotzonesMap />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
