import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const formStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    textField: {
      marginBottom: theme.spacing(3)
    },
    input: {
      margin: theme.spacing(1)
    },
    card: {
      marginTop: theme.spacing(6),
      height: 'auto',
      width: 400,
      margin: 'auto'
    },
    header: {
      textAlign: 'center',
      padding: theme.spacing(4)
    },
    formControl: {
      margin: theme.spacing(1)
    },
    form: {
      display: 'flex',
      width: 320,
      margin: 'auto',
      flexDirection: 'column'
    },
    button: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      marginTop: 24,
      width: 200,
      margin: 'auto'
    }
  })
);
