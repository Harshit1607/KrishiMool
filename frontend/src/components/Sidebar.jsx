import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router';


const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <ul>
        <li className="active" onClick={()=>navigate('/')}>Dashboard</li>
        <li onClick={()=>navigate('/state-profile')}>State Profile</li>
        <li>Buffer Stock</li>
        <li>Alerts</li>
        <li>Contact Us</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
