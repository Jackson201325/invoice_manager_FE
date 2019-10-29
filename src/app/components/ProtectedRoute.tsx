import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  isLoggedIn,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={props => {
        const AuthLayouts = ['/login', '/signup'];
        const inAuthLayout = AuthLayouts.includes(props.location.pathname);
        console.log(isLoggedIn);
        console.log(inAuthLayout);
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
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
