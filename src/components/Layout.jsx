// Layout.jsx dqwdqwdfwdqw wqwdwefewfe huligyugygygy
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/saved-jobs">Saved Jobs</Link></li>
          <li><Link to="/login">Logout</Link></li>
                       </ul>
      </nav>
      <div className="layout-container">
        {children}
      </div>
    </>
  );
};

export default Layout;
