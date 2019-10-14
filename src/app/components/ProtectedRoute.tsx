import React from 'react';
import { Route } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  sidebar: Sidebar,
  pageName,
  isLoggedIn,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={props => {
        return (
          <Layout pageName={pageName}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
