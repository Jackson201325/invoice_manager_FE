import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { NavbarFooterAdmin } from '../layouts/NavbarFooterAdmin';
import { Dashboard } from '../views/admin-views/Dashboard';
import Invoices from '../containers/Invoices';

export const ROUTES = {
  DASHBOARD: '/admin/dashboard',
  INVOICES: '/admin/invoices'
};

export const AdminLayout = props => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          // exact
          path={ROUTES.DASHBOARD}
          pageName="Dashboard"
          component={Dashboard}
          layout={NavbarFooterAdmin}
        />
        <Route></Route>
        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};
