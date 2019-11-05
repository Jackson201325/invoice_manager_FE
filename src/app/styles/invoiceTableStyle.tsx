import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const invoiceTableStyle = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    backgroundColor: red[500]
  }
});
