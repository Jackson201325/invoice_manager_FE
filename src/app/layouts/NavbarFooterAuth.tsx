import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import './NavbarFooterAuth.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 36,
      padding: '0 12px'
    },
    input: {
      display: 'none'
    }
  })
);

export const NavbarFooterAuth = props => {
  const classes = useStyles();
  return (
    <div className="NavbarFooterAuth">
      <AppBar position="static" className="app-bar">
        <Toolbar className="tool-bar">
          <Typography className="logo" variant="h5" color="inherit">
            Invoice Manager
          </Typography>
          <div>
            <Typography variant="h6" color="inherit">
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                className={classes.button}
                startIcon={<PersonAddIcon />}
              >
                Register
              </Button>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
