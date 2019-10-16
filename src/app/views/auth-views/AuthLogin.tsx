import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarFooterAuth } from '../../layouts/NavbarFooterAuth';

export const AuthLogin = props => {
  return (
    <NavbarFooterAuth>
      <div className="Login">
        <h1>Login</h1>
        <ul>
          <li>
            <p>Username: {props.location.pathname}</p>
          </li>
          <li>
            <p>Password</p>
          </li>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </NavbarFooterAuth>
  );
};
