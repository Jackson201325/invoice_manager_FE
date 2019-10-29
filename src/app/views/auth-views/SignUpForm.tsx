import React from 'react';
import { Formik } from 'formik';
import { authStyles } from '../../styles/authStyle';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';
export const SignUpForm = props => {
  const classes = authStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={6}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Typography variant="h2">Sign Up</Typography>
          </div>
          <CardContent>
            <Formik
              initialValues={{
                email: '',
                password: '',
                password_confirmation: ''
              }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                props
                  .signUp(values)
                  .finally(() => actions.setSubmitting(false));
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

                  <InputLabel htmlFor="password_confirmation">
                    Password Confirmation
                  </InputLabel>
                  <Input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password_confirmation}
                    className={classes.textField}
                  />

                  {props.errors.password_confirmation && (
                    <div id="feedback">
                      {props.errors.password_confirmation}
                    </div>
                  )}
                  <Button type="submit" className={classes.button}>
                    Register
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
