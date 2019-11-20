import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
// import { Route, Redirect, withRouter } from 'react-router-dom';

import { IInvoiceState } from '../redux/Invoice/reducer';
import { createInvoice, getInvoices } from '../redux/Invoice/actions';
import { CreateInvoice } from '../views/forms/CreateInvoice';
import InvoiceTable from '../views/tables/InvoiceTable';
import './invoices.scss';
interface IProps {
  location: any;
  pathname: any;
  history: any;
  createInvoice: any;
  getInvoices: any;
  isLoading: any;
  invoices: any;
}

class Invoices extends Component<IProps, {}> {
  createInvoice = () => {
    this.props.createInvoice().then(() => {
      window.location.reload();
    });
  };

  redirectTo = path => {
    this.props.history.push(path);
  };

  componentDidMount() {
    this.props.getInvoices();
  }

  render() {
    return (
      <div className="invoice">
        <h1>Invoices</h1>
        <div className="action--field">
          <TextField
            id="standard-basic"
            className="invoice--input"
            label="Search invoices..."
          />
          <CreateInvoice
            classname="create--invoice"
            createInvoice={this.createInvoice}
          />
        </div>
        {!this.props.isLoading && this.props.invoices.size > 0 && (
          <InvoiceTable invoices={this.props.invoices} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: { invoiceReducer: IInvoiceState }) => {
  return {
    isLoading: state.invoiceReducer.isLoading,
    invoices: state.invoiceReducer.invoices
  };
};

export default connect(
  mapStateToProps,
  {
    createInvoice,
    getInvoices
  }
)(Invoices);
