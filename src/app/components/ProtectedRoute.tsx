import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { IAuthenticationState } from '../redux/Authentication/reducer';
import { logout } from '../redux/Authentication/action';
import { connect } from 'react-redux';

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  isLoggedIn,
  logout,
  ...props
}) => {

  return (
    <Route
      {...props}
      render={props => {
        const AuthLayouts = ['/login', '/signup'];
        const inAuthLayout = AuthLayouts.includes(props.location.pathname);
        if (!isLoggedIn && !inAuthLayout) {
          return <Redirect to="/login" />;
        } else if (isLoggedIn && inAuthLayout) {
          return <Redirect to="/admin/dashboard" />;
        } else {
          return (
            <Layout>
              <Component {...props} />;
            </Layout>
          );
        }
      }
      }
    />
  );
};

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logout }
)(ProtectedRoute));

