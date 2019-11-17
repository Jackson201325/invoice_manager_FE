import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const invoiceTableStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    card: {
      maxWidth: 310
      // marginBottom: 24
    },
    bullet: {
      display: 'inline-block',
      margin: '0102px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 16
    },
    pos: {
      marginBottom: 12
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);
