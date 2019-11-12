import React from "react";
import { createInvoiceStyle } from "../../styles/createInvoiceStyle";
import { Button } from "@material-ui/core";

export const CreateInvoice = props => {
  const classes = createInvoiceStyle();
  return (
    <Button className={classes.button} onClick={props.createInvoice}>
      Create Invoice
    </Button>
  );
};
