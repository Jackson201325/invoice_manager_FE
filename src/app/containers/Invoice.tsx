import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import { getInvoice, getItems } from '../redux/Invoice/actions';
import { createItem } from '../redux/Item/actions';

import ItemTable from '../views/tables/ItemTable';
import './invoice.scss';
import { IInvoiceState } from '../redux/Invoice/reducer';
import { TextField } from '@material-ui/core';
import { CreateItem } from '../views/forms/CreateItem';
import { itemRecord } from '../models';

interface IProps {
  getInvoice: Function;
  getItems: Function;
  createItem: Function;
  match: any;
  invoice: any;
  items: any;
}

interface IState {
  items: Array<any>;
  query: string;
}

class Invoice extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: ''
    };
  }

  id = this.props.match.params.id;
  componentDidMount() {
    this.props.getInvoice(this.id).then(() => {
      this.props.getItems(this.id).then(() => {
        this.setState({ items: this.props.items });
      });
    });
  }

  createItem = () => {
    // this.props.createItem(this.id).then(() => {
    //   window.location.reload();
    // });
  };
  render() {
    const { items } = this.props;
    return (
      <div>
        <div className="header">
          <h1>
            <span>Invoice</span> {this.props.invoice.id}
          </h1>
          <div className="icons">
            <h3 className="invoice--icon">
              {this.props.invoice.created_at}
              <ScheduleIcon className="invoice--icon--display" />
            </h3>
            <h3 className="invoice--icon">
              {
                <NumberFormat
                  value={this.props.invoice.total_spend}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$ '}
                />
              }
              <TrendingDownIcon className="invoice--icon--display" />
            </h3>
            <h3 className="invoice--icon">
              {
                <NumberFormat
                  value={this.props.invoice.total_net_sales}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$ '}
                />
              }
              <TrendingUpIcon className="invoice--icon--display" />
            </h3>
            <h3 className="invoice--icon">
              {
                <NumberFormat
                  value={this.props.invoice.total_profit}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$ '}
                />
              }
              <AccountBalanceIcon className="invoice--icon--display" />
            </h3>
          </div>
        </div>
        <div className="action--field">
          <TextField
            id="standard-basic"
            className="invoice--input"
            label="Search items..."
            onChange={event => {
              this.setState(
                { query: event.target.value.toLocaleLowerCase() },
                () => {
                  const matchQuery = item => {
                    // console.log('this is state: ', this.state.query);
                    return itemRecord(item)
                      .lowerCase()
                      .includes(this.state.query);
                  };

                  const itemsResult = items.filter(matchQuery);
                  this.setState({ items: itemsResult });
                }
              );
            }}
          />
          <CreateItem
            classname="create--invoice"
            createItem={this.createItem}
          />
        </div>
        <ItemTable items={this.state.items} />
      </div>
    );
  }
}

const mapStateToProps = (state: { invoiceReducer: IInvoiceState }) => {
  return {
    invoice: state.invoiceReducer.invoice,
    items: state.invoiceReducer.items
  };
};

export default connect(
  mapStateToProps,
  { getInvoice, getItems, createItem }
)(Invoice);
