import React, { Component } from 'react';
import { IInvoiceState } from '../redux/Invoice/reducer';
// import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createInvoice } from '../redux/Invoice/actions';
import { CreateInvoice } from '../views/forms/CreateInvoice';
// import { Switch } from '@material-ui/core';
// import ProtectedRoute from '../components/ProtectedRoute';

interface IProps {
  location: any;
  pathname: any;
  history: any;
  createInvoice: any;
}

class Invoices extends Component<IProps, {}> {
  redirectTo = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="invoice">
        {this.props.location.pathname}

        <CreateInvoice createInvoice={this.props.createInvoice} />
      </div>
    );
  }
}

const mapStateToProps = (state: IInvoiceState) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    createInvoice
  }
)(Invoices);
