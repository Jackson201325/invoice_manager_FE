import React, { Component } from "react";

import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginForm } from "../forms/LoginForm";

import { IAuthenticationState } from "../../redux/Authentication/reducer";
import { login } from "../../redux/Authentication/action";

interface IProps {
  isLoggedIn: boolean;
  login: Function;
  errorMessage: string;
}

class AuthLogin extends Component<IProps, {}> {
  render() {
    // console.log(this.props);
    if (this.props.isLoggedIn) {
      return <Redirect to="/admin/dashboard" />;
    } else {
      return <LoginForm login={this.props.login} />;
    }
  }
}

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(AuthLogin)
);
