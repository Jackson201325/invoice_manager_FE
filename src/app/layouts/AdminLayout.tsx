import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';
import { IAuthenticationState } from '../redux/Authentication/reducer';
import { logout } from '../redux/Authentication/action';
import { NavbarFooterAdmin } from '../layouts/NavbarFooterAdmin';
import { Dashboard } from '../views/admin-views/Dashboard';
import Invoices from '../containers/Invoices';
import { NotFound } from '../views/NotFound';
import { Sidebar } from './Sidebar';

export const ROUTES = {
  DASHBOARD: '/admin/dashboard',
  INVOICES: '/admin/invoices'
};

const AdminLayout = props => {
  return (
    <div
      style={{
        background: '#f0f0f0',
        display: 'flex'
      }}
    >
      <Sidebar logout={props.logout} />
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
          path={`${ROUTES.INVOICES}`}
          pageName="invoices"
          component={Invoices}
          layout={NavbarFooterAdmin}
        />
        <Route path="*" pageName="Not Found" component={NotFound} />
      </Switch>
    </div>
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
)(AdminLayout));

