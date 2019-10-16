import React from 'react';
import { Link } from 'react-router-dom';
export const Dashboard = props => {
  return (
    <div className="Dashboard">
      {props.location.pathname}
      <h1>Dashboard</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};
