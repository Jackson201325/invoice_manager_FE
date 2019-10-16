import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { NotFound } from './views/auth-views/NotFound';
import { AdminLayout } from './layouts/AdminLayout';
import { AuthLayout } from './layouts/AuthLayout';
// import { NavbarFooterAuth } from '../layouts/NavbarFooterAuth';
// import Team from './containers/Team';
import { ProtectedRoute } from './components/ProtectedRoute';

export const ROUTES = {
  ADMIN: '/admin',
  AUTH: '/'
};

// const AppRoutes = props => (
//   // <BrowserRouter>
//   //   <Switch>
//   //     {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
//   //     {/* <ProtectedRoute
//   //           // exact
//   //           path={ROUTES.AUTH}
//   //           pageName="Login"
//   //           component={AdminLayout}
//   //           layout={NavbarFooterAuth}
//   //         /> */}
//   //     <Route path="/admin" render={props => <AdminLayout {...props} />} />
//   //     <Route exact path="/login" render={props => <AuthLayout {...props} />} />
//   //     {/* <Route path="/auth" render={props => <p>AUTH</p>} /> */}
//   //     <Redirect from="/" to="/login" />
//   //     <Route path="*" pageName="Not Found" component={NotFound} />
//   //   </Switch>
//   // </BrowserRouter>
// );

// export default AppRoutes;
