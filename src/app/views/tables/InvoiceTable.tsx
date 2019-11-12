import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import MaterialTable, { Column } from 'material-table';

import { invoiceTableStyle } from '../../styles/invoiceTableStyle';
import { ninvoke } from 'q';
// import { CardHeader, Avatar } from '@material-ui/core';

interface Row {
  created_at: string;
  id: number;
  items: [];
  total_net_sales: number;
  total_profit: number;
  total_spend: number;
  updated_at: string;
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
        field: 'id',
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        type: 'numeric'
      },
      { title: 'Total spend', field: 'total_spend', type: 'numeric' },
      { title: 'Total net sales', field: 'total_net_sales', type: 'numeric' },
      { title: 'Total profit', field: 'total_profit', type: 'numeric' },
      {
        title: 'Created at',
        field: 'created_at',
        type: 'string'
      }
    ],
    data: props.invoice
  });

  return (
    <MaterialTable title="Invoices" columns={state.columns} data={state.data} />
  );
};
