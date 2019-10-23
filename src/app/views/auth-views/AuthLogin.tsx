import React from 'react';
import { NavbarFooterAuth } from '../../layouts/NavbarFooterAuth';
import './AuthLogin.scss';
import {
  Typography,
  Card,
  Grid,
  CardContent,
  Button,
  FormControl,
  TextField,
  OutlinedInput,
  InputLabel,
  Input,
  makeStyles,
  Theme,
  createStyles,
  IconButton
} from '@material-ui/core';

export const AuthLogin = props => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexGrow: 1
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
        justifyContent: 'center'
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
  const classes = useStyles();

  return (
    <NavbarFooterAuth>
      <Grid container justify="center" className={classes.root}>
        <Grid item md={6}>
          <Card className={classes.card}>
            <div className={classes.header}>
              <Typography variant="h2">Login</Typography>
            </div>
            <CardContent>
              {/* <FormControl className={classes.form}>
                <TextField
                  id="standard-password-input"
                  label="Username"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                  margin="normal"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  className={classes.button}
                >
                  Login
                </Button>
              </FormControl> */}
              <Formik
                initialValues={{ name: 'jared' }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                render={props => (
                  <form onSubmit={props.handleSubmit}>
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="name"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                    <button type="submit">Submit</button>
                  </form>
                )}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </NavbarFooterAuth>
  );
};
