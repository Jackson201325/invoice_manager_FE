import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";

import "./NavbarFooterAuth.scss";

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
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      color: "white",
      height: 36,
      padding: "0 12px",
      transition: "0.2"
    },
    input: {
      display: "none"
    }
  })
);

export const NavbarFooterAuth = props => {
  const classes = useStyles();
  const inSignUp =
    props && props.children.props.location.pathname === "/signup";

  return (
    <div className="NavbarFooterAuth">
      <AppBar position="static" className="app-bar">
        <Toolbar className="tool-bar">
          <Typography className="logo" variant="h5" color="inherit">
            Invoice Manager
          </Typography>
          <div>
            <Typography variant="h6" color="inherit">
              {!inSignUp ? (
                <Link className="link" to="/signup">
                  <Button
                    className={classes.button}
                    startIcon={<PersonAddIcon />}
                  >
                    Sign Up
                  </Button>
                </Link>
              ) : (
                <Link className="link" to="/auth/login">
                  <Button
                    className={classes.button}
                    startIcon={<KeyboardArrowRightIcon />}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
