import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';
import { NavbarFooterAdmin } from '../layouts/NavbarFooterAdmin';
import { Dashboard } from '../views/admin-views/Dashboard';
import Invoices from '../containers/Invoices';
import { NotFound } from '../views/NotFound';
import { Sidebar } from './Sidebar';

export const ROUTES = {
  DASHBOARD: '/admin/dashboard',
  INVOICES: '/admin/invoices'
};

export const AdminLayout = props => {
  return (
    <div
      style={{
        background: '#f0f0f0',
        display: 'flex'
      }}
    >
      <Sidebar />
      <Switch>
        <ProtectedRoute
          exact
          path={ROUTES.DASHBOARD}
          pageName="dashboard"
          component={Dashboard}
          layout={NavbarFooterAdmin}
        />
        <ProtectedRoute
          exact
          path={ROUTES.INVOICES}
          pageName="invoices"
          component={Invoices}
          layout={NavbarFooterAdmin}
        />
        <Redirect from="/" to="/admin/dashboard" />
        <Route path="*" pageName="Not Found" component={NotFound} />
      </Switch>
    </div>
  );
};
