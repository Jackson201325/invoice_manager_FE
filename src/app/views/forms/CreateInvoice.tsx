import React from 'react';
import { createInvoiceStyle } from '../../styles/createInvoiceStyle';
import { Button } from '@material-ui/core';

export const CreateInvoice = props => {
  const classes = createInvoiceStyle();
  return (
    <Button
      type="submit"
      className={classes.button}
      onClick={props.handleSubmit}
    >
      Create Invoice
    </Button>
  );
};
