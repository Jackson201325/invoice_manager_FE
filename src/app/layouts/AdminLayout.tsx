import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, Link } from 'react-router-dom';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { NavbarFooterAdmin } from '../layouts/NavbarFooterAdmin';
import { Dashboard } from '../views/admin-views/Dashboard';
import Invoices from '../containers/Invoices';
import { NotFound } from '../views/NotFound';



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
      <div className="sidebar">
        <Link to="/admin/dashboard">dashboard</Link>
        <Link to="/admin/invoices">invoices</Link>
      </div>
      <Switch>
        <ProtectedRoute
          exact
          path={ROUTES.DASHBOARD}
          pageName="Login"
          component={Dashboard}
          layout={NavbarFooterAdmin}
        />
        <ProtectedRoute
          exact
          path={ROUTES.INVOICES}
          pageName="SignUp"
          component={Invoices}
          layout={NavbarFooterAdmin}
        />
        <Redirect from="/admin" to="/admin/dashboard" />
        <Route path="*" pageName="Not Found" component={NotFound} />

      </Switch>
    </div>
  );
};
