import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { IAuthenticationState } from '../../redux/Authentication/reducer';
import { signUp } from '../../redux/Authentication/action';
import { SignUpForm } from '../auth-views/SignUpForm';

const SignUp = props => {
  return <SignUpForm signUp={props.signUp} />;
};

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signUp }
  )(SignUp)
);
