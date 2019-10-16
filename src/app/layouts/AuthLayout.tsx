import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthLogin } from '../views/auth-views/AuthLogin';
import { SignUp } from '../views/auth-views/SignUp';
import { NotFound } from '../views/auth-views/NotFound';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { NavbarFooterAuth } from '../layouts/NavbarFooterAuth';

export const ROUTES = {
  AUTH_LOGIN: '/login',
  SIGNUP: '/signup'
};

export const AuthLayout = () => {
  return (
    <div
      style={{
        background: '#f0f0f0'
      }}
    >
      <Switch>
        <ProtectedRoute
          // exact
          path={ROUTES.AUTH_LOGIN}
          pageName="Login"
          component={AuthLogin}
          layout={NavbarFooterAuth}
        />
        <ProtectedRoute
          // exact
          path={ROUTES.SIGNUP}
          pageName="SignUp"
          component={SignUp}
          layout={NavbarFooterAuth}
        />
      </Switch>
    </div>
  );
};
