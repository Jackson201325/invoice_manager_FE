import React from 'react';
import { Link } from 'react-router-dom';
export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <ul>
        <li>
          <p>Username</p>
        </li>
        <li>
          <p>Password</p>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
