import React from 'react';
import { Formik } from 'formik';
import { formStyles } from '../../styles/formStyles';
import { Input, InputLabel, Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

export const Dashboard = props => {
  console.log(props);
  const classes = formStyles();
  return (
    <div className="Dashboard">
      {props.location.pathname}
      <h1>Dashboard</h1>
      <h3>Create Invoice</h3>
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
    </div>
  );
};
