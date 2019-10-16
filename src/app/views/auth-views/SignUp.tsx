import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarFooterAuth } from '../../layouts/NavbarFooterAuth';
export const SignUp = props => {
  return (
    <NavbarFooterAuth>
      <div className="signup">
        {props.location.pathname}

        <h1>Hello this is SignUp</h1>
        <Link to="/login">Login</Link>
      </div>
    </NavbarFooterAuth>
  );
};
