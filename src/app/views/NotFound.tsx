import React from 'react';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <ul>
        <li>
          <p>Not Found</p>
        </li>
        <li>
          <p>Not Found</p>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
