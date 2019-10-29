import React from 'react';
import { authStyles } from '../../styles/authStyle';
import {
  Typography,
  Card,
  Grid,
  CardContent,
  Button,
  InputLabel,
  Input,
} from '@material-ui/core';
import { Formik } from 'formik';

export const LoginForm = props => {
  const classes = authStyles();
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
                props.login(values).then(() => actions.setSubmitting(false));
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
