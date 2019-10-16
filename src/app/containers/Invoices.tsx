import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface IProps {
  location: any;
  pathname: any;
  history: any;
}

class Invoices extends Component<IProps, {}> {
  redirectTo = path => {
    this.props.history.push(path);
  };
  render() {
    return (
      <div className="invoice">
        {this.props.location.pathname}
        <p>Hello this is Invoices</p>
        {/* <Button variant="contained" onCick={() => this.redirectTo(this.props.location.pathname)}>
          Default
      </Button> */}
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Invoices;
