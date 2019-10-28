import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const SignUp = props => {
  return (
    <div className="signup">
      {props.location.pathname}

      <h1>Hello this is SignUp</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default withRouter(SignUp);
