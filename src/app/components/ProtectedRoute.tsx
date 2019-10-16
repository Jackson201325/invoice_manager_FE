import React from 'react';
import { Route } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  // isLoggedIn,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
