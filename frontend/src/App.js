import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import StateProfile from './components/StateProfile/StateProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/state-profile" element={<StateProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
