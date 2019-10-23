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
import { Formik } from 'formik';

export const AuthLogin = props => {
  const useStyles = makeStyles((theme: Theme) =>
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
              <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                render={props => (
                  <form className={classes.form} onSubmit={props.handleSubmit}>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                      id="username"
                      name="username"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                      className={classes.textField}
                    />
                    {props.errors.username && (
                      <div id="feedback">{props.errors.username}</div>
                    )}

                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      name="password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      className={classes.textField}
                    />

                    {props.errors.password && (
                      <div id="feedback">{props.errors.password}</div>
                    )}
                    <Button type="submit" className={classes.button}>
                      Login
                    </Button>
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
