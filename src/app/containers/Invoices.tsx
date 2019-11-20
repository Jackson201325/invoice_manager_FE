import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
// import { Route, Redirect, withRouter } from 'react-router-dom';

import { IInvoiceState } from '../redux/Invoice/reducer';
import { createInvoice, getInvoices } from '../redux/Invoice/actions';
import { CreateInvoice } from '../views/forms/CreateInvoice';
import InvoiceTable from '../views/tables/InvoiceTable';
import './invoices.scss';
import { invoiceRecord } from '../models';
interface IProps {
  location: any;
  pathname: any;
  history: any;
  createInvoice: any;
  getInvoices: any;
  isLoading: any;
  invoices: any;
}

interface IState {
  invoices: Array<any>;
  query: string;
}

class Invoices extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      invoices: []
    };
  }
  createInvoice = () => {
    this.props.createInvoice().then(() => {
      window.location.reload();
    });
  };

  redirectTo = path => {
    this.props.history.push(path);
  };

  componentDidMount() {
    this.props.getInvoices().then(() => {
      this.setState({ invoices: this.props.invoices });
    });
  }

  render() {
    const { invoices } = this.props;
    return (
      <div className="invoice">
        <h1>Invoices</h1>
        <div className="action--field">
          <TextField
            id="standard-basic"
            className="invoice--input"
            label="Search invoices..."
            onChange={event => {
              this.setState(
                { query: event.target.value.toLocaleLowerCase() },
                () => {
                  const matchQuery = invoice => {
                    // console.log('this is state: ', this.state.query);
                    return invoiceRecord(invoice)
                      .lowerCase()
                      .includes(this.state.query);
                  };

                  const invoicesResult = invoices.filter(matchQuery);
                  this.setState({ invoices: invoicesResult });
                }
              );
            }}
          />
          <CreateInvoice
            classname="create--invoice"
            createInvoice={this.createInvoice}
          />
        </div>
        {!this.props.isLoading && this.props.invoices.size > 0 && (
          <InvoiceTable invoices={this.state.invoices} />
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
