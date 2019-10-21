import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './NavbarFooterAuth.scss';
import { Link } from 'react-router-dom';

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
    }
  })
);

export const NavbarFooterAuth = props => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="NavbarFooterAuth">
      <AppBar position="static" className="app-bar">
        <Toolbar className="tool-bar">
          <Typography className="logo" variant="h5" color="inherit">
            Invoice Manager
          </Typography>
          <div>
            <Typography variant="h6" color="inherit">
              <Link className="link" to="/signup">
                Register
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
      <Typography variant="h2" gutterBottom>
        Hello this is footer Auth
      </Typography>
    </div>
  );
};
