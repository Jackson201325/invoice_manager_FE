import React from 'react';
import { NavbarFooterAuth } from '../../layouts/NavbarFooterAuth';

import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

export const AuthLogin = props => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      input: {
        margin: theme.spacing(1)
      }
    })
  );
  const classes = useStyles();

  return (
    <NavbarFooterAuth>
      <div className="Login">
        <h1>Login</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <Input
            placeholder="Username"
            className={classes.input}
            inputProps={{
              'aria-label': 'username'
            }}
          />
          <Input
            placeholder="Password"
            className={classes.input}
            inputProps={{
              'aria-label': 'password'
            }}
          />
        </form>
      </div>
    </NavbarFooterAuth>
  );
};
