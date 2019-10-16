import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarFooterAuth } from '../../layouts/NavbarFooterAuth';

export const AuthLogin = props => {
  return (
    <NavbarFooterAuth>
      <div className="Login">
        {props.location.pathname}
        <h1>Hello this is login</h1>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/signup">Register</Link>
      </div>
    </NavbarFooterAuth>
  );
};
