import React, { Component } from 'react';
import {
  Typography,
  Card,
  Grid,
  CardContent,
  Button,
  InputLabel,
  Input,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../redux/Authentication/action';
import { IAuthenticationState } from '../../redux/Authentication/reducer';
import './AuthLogin.scss';

interface IProps {
  isLoggedIn: boolean;
  login: Function;
  errorMessage: string;
}

export const LoginForm = props => {
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
    <Grid container justify="center" className={classes.root}>
      <Grid item md={6}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Typography variant="h2">Login</Typography>
          </div>
          <CardContent>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                props.login(values).finally(() => actions.setSubmitting(false));
                actions.setSubmitting(false);
              }}
              render={props => (
                <form className={classes.form} onSubmit={props.handleSubmit}>
                  <InputLabel htmlFor="username">Email</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    className={classes.textField}
                  />
                  {props.errors.email && (
                    <div id="feedback">{props.errors.email}</div>
                  )}

                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
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
  );
};

class AuthLogin extends Component<IProps, {}> {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      return <LoginForm login={this.props.login} />;
    }
  }
}

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  console.log(state);
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(AuthLogin)
);
