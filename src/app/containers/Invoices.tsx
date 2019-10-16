import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Invoices;
