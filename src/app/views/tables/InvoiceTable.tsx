import NumberFormat from 'react-number-format';
import React from 'react';
import {
  CardHeader,
  Avatar,
  Card,
  CardContent,
  Grid,
  CardActions,
  Button
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { invoiceTableStyle } from '../../styles/invoiceTableStyle';
import './InvoiceTable.scss';
import { getItems } from '../../redux/Invoice/actions';

const InvoiceTable = props => {
  const classes = invoiceTableStyle();
  const showInvoice = invoiceId => {
    props.getItems(invoiceId).then(() => {
      props.history.push(`/admin/Invoices/${invoiceId}`);
    });
  };
  return (
    <div className="invoices">
      {props &&
        props.invoices.map(invoice => (
          <Card className={classes.card} key={invoice.id}>
            <CardHeader
              classes={{
                title: classes.title
              }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {invoice.id}
                </Avatar>
              }
              title={`${invoice.created_at}`}
            />
            <CardContent>
              <h2>Total items: {invoice.items.length}</h2>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <ArrowDownwardIcon className="icon--display" />
                      <NumberFormat
                        value={invoice.total_spend ? invoice.total_spend : '0'}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$ '}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <ArrowUpwardIcon className="icon--display" />
                      <NumberFormat
                        value={
                          invoice.total_spend ? invoice.total_net_sales : '0'
                        }
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$ '}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <AccountBalanceIcon className="icon--display" />
                      <NumberFormat
                        value={invoice.total_spend ? invoice.total_profit : '0'}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$ '}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Delete Invoice
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => showInvoice(invoice.id)}
              >
                Show Invoice
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.invoiceReducer.isLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getItems }
  )(InvoiceTable)
);
