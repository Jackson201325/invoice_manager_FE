import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './components/Login';
import Invoice from './containers/Invoice';
import { NavbarFooter } from './layouts/NavbarFooter';

// import Team from './containers/Team';

export const ROUTES = {
  LOGIN: '/auth/login',
  INVOICES: '/invoices'
};

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute
        exact
        isLoggedIn
        path={ROUTES.INVOICES}
        component={Invoice}
        layout={NavbarFooter}
        pageName="Invoices"
      />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
