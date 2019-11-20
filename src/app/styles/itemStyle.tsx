import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const itemStyle = makeStyles((theme: Theme) =>
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
      maxWidth: 400,
      margin: 0,
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
      // marginBottom: 24
    },
    bullet: {
      display: 'inline-block',
      margin: '0102px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 20,
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 'bold'
    },
    pos: {
      marginBottom: 12
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);
