import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { getInvoice } from '../redux/Invoice/actions';
import ItemTable from '../views/tables/ItemTable';
import './invoice.scss';

interface IProps {
  getInvoice: Function;
  location: any;
  invoice: any;
}

class Invoice extends Component<IProps, {}> {
  componentDidMount() {
    const id = this.props.location.pathname.slice(-1);
    this.props.getInvoice(id);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="header">
          <h1 className="icon">Invoice number: {this.props.invoice.id}</h1>
          <div className="icons">
            <h3 className="icon">
              <ScheduleIcon className="icon--display" />
              {this.props.invoice.created_at}
            </h3>
            <h3 className="icon">
              <ArrowDownwardIcon className="icon--display" />
              {
                <NumberFormat
                  value={this.props.invoice.total_spend}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              }
            </h3>
            <h3 className="icon">
              <ArrowUpwardIcon className="icon--display" />
              {
                <NumberFormat
                  value={this.props.invoice.total_net_sales}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              }
            </h3>
            <h3 className="icon">
              <AccountBalanceIcon className="icon--display" />
              {
                <NumberFormat
                  value={this.props.invoice.total_profit}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              }
            </h3>
          </div>
        </div>
        <ItemTable />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    invoice: state.invoiceReducer.invoice
  };
};

export default connect(
  mapStateToProps,
  { getInvoice }
)(Invoice);
