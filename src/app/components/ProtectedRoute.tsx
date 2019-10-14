import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  pageName,
  // isLoggedIn,
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
