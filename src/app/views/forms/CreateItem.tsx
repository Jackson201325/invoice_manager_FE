import React from 'react';
import { createInvoiceStyle } from '../../styles/createInvoiceStyle';
import { Button } from '@material-ui/core';

export const CreateItem = props => {
  const classes = createInvoiceStyle();
  return (
    <Button className={classes.button} onClick={props.createItem}>
      Create Item
    </Button>
  );
};
