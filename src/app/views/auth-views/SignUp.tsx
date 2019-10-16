import React from 'react';
import { Link } from 'react-router-dom';
export const SignUp = () => {
  return (
    <div className="Login">
      <h1>Register</h1>
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
