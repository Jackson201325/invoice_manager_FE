import React from 'react';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
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
        <li>
          <Link to="/admin/dashboard">Register</Link>
        </li>
      </ul>
    </div>
  );
};
