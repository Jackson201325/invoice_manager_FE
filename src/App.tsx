import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AdminLayout from './app/layouts/AdminLayout';
import { NotFound } from './app/views/NotFound';
import AuthLogin from './app/views/auth-views/AuthLogin';
import SignUp from './app/views/auth-views/SignUp';
import { NavbarFooterAuth } from './app/layouts/NavbarFooterAuth';
import ProtectedRoute from './app/components/ProtectedRoute';
import { IAuthenticationState } from './app/redux/Authentication/reducer';
import { login } from './app/redux/Authentication/action';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <ProtectedRoute
          exact
          path="/login"
          pageName="login"
          component={AuthLogin}
          layout={NavbarFooterAuth}
        />
        <ProtectedRoute
          exact
          path="/signup"
          pageName="signup"
          component={SignUp}
          layout={NavbarFooterAuth}
        />
        <Route path="*" pageName="Not Found" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { login }
)(App);
