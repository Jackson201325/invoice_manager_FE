import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const createInvoiceStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      marginTop: 24,
      width: 200
    }
  })
);
