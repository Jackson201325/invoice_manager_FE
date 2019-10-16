import React from 'react';
import { Route, BrowserRouter, Switch, Redirect, Link } from 'react-router-dom';
import { AdminLayout } from './app/layouts/AdminLayout';
import { AuthLayout } from './app/layouts/AuthLayout';
import { NotFound } from './app/views/auth-views/NotFound';
import { AuthLogin } from './app/views/auth-views/AuthLogin';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route exact path="/login" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/login" />
          <Route path="*" pageName="Not Found" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;

