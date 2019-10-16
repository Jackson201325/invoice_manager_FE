import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AdminLayout } from './app/layouts/AdminLayout';
import { NotFound } from './app/views/NotFound';
import { AuthLogin } from './app/views/auth-views/AuthLogin';
import { SignUp } from './app/views/auth-views/SignUp';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/login" render={props => <AuthLogin {...props} />} />
          <Route path="/signup" render={props => <SignUp {...props} />} />
          <Redirect from="/" to="/login" />
          <Route path="*" pageName="Not Found" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;

