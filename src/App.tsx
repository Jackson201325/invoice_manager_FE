import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AdminLayout } from './app/layouts/AdminLayout';
import { NotFound } from './app/views/NotFound';
import AuthLogin from './app/views/auth-views/AuthLogin';
import SignUp from './app/views/auth-views/SignUp';
import { NavbarFooterAuth } from './app/layouts/NavbarFooterAuth';
import ProtectedRoute from './app/components/ProtectedRoute';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <ProtectedRoute
            exact
            path="/login"
            pageName="login"
            component={AuthLogin}
            layout={NavbarFooterAuth}
          />
          <ProtectedRoute
            exact
            path="/signup"
            pageName="signup"
            component={SignUp}
            layout={NavbarFooterAuth}
          />
          <Redirect from="/" to="/login" />
          <Route path="*" pageName="Not Found" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
