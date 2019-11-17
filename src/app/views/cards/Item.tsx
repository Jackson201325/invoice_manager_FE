import React from 'react';
import {
  CardHeader,
  Avatar,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import NumberFormat from 'react-number-format';

import { invoiceTableStyle } from '../../styles/invoiceTableStyle';

const ItemCard = props => {
  return <div>This is Item{props.model}</div>;
};

export default ItemCard;
