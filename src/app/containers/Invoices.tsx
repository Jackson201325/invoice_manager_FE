import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { IInvoiceState } from '../redux/Invoice/reducer';
import { createInvoice, getInvoices } from '../redux/Invoice/actions';
import { CreateInvoice } from '../views/forms/CreateInvoice';
import { InvoiceTable } from '../views/tables/InvoiceTable';
import { If } from '../../types/jsx-control-statements.d';
// import { Switch } from '@material-ui/core';
// import ProtectedRoute from '../components/ProtectedRoute';

interface IProps {
  location: any;
  pathname: any;
  history: any;
  createInvoice: any;
  getInvoices: any;
  isLoading: any;
}

interface IState {
  invoices: any;
}

class Invoices extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      invoices: []
    };
  }

  redirectTo = path => {
    this.props.history.push(path);
  };

  componentDidMount() {
    this.props.getInvoices().then(response => {
      console.log(response);
      this.setState({
        invoices: response
      });
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="invoice">
        <CreateInvoice createInvoice={this.props.createInvoice} />
        {/* {this.props.location.pathname} */}
        {!this.props.isLoading && this.state.invoices.length > 0 && (
          <InvoiceTable invoice={this.state.invoices} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: { invoiceReducer: IInvoiceState }) => {
  // console.log(state.invoiceReducer.isLoading);
  return {
    isLoading: state.invoiceReducer.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    createInvoice,
    getInvoices
  }
)(Invoices);
