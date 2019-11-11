import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import MaterialTable, { Column } from 'material-table';

import { invoiceTableStyle } from '../../styles/invoiceTableStyle';
// import { CardHeader, Avatar } from '@material-ui/core';

interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export const InvoiceTable = props => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      {
        title: 'Id',
        field: 'Id',
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        type: 'numeric'
      },
      { title: 'Total spend', field: 'total_spend', type: 'numeric' },
      { title: 'Total net sales', field: 'total_net_sales', type: 'numeric' },
      { title: 'Total profit', field: 'total_profit', type: 'numeric' },
      {
        title: 'Created at',
        field: 'created_at',
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        type: 'numeric'
      }
    ],
    data: props.invoice
  });
  // console.log(props.invoice);
  // const classes = invoiceTableStyle();

  return (
    <MaterialTable title="Invoices" columns={state.columns} data={state.data} />
  );
};
