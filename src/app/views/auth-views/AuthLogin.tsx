import React from 'react';
import { Link } from 'react-router-dom';
export const AuthLogin = () => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <ul>
        <li>
          <p>Username</p>
        </li>
        <li>
          <p>Password</p>
        </li>
        <li>
          <Link to="/admin/dashboard">Login</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </div>
  );
};
