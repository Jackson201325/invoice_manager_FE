import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  useTheme,
  IconButton,
  Divider,
  ListItemIcon,
  List,
  ListItemText,
  ListItem,
  MenuItem,
  Menu
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ProtectedRoute from '../components/ProtectedRoute';
import { IAuthenticationState } from '../redux/Authentication/reducer';
import { logout } from '../redux/Authentication/action';
import { NavbarFooterAdmin } from '../layouts/NavbarFooterAdmin';
import { Dashboard } from '../views/admin-views/Dashboard';
import Invoices from '../containers/Invoices';
import { NotFound } from '../views/NotFound';
import { adminLayoutStyle } from '../styles/adminLayoutStyle';

export const ROUTES = {
  DASHBOARD: '/admin/dashboard',
  INVOICES: '/admin/invoices'
};

const AdminLayout = props => {
  const classes = adminLayoutStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Invoice Manager
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={props.logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div style={{ background: 'black' }} className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon style={{ color: 'white' }} />
            ) : (
              <ChevronLeftIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </div>
        <Divider style={{ color: 'black' }} />
        <List>
          {['Dashboard', 'Invoices'].map((text, index) => (
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/admin/${text}`}
              key={text}
            >
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <DesktopWindowsIcon /> : <ReceiptIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <ProtectedRoute
            exact
            path={ROUTES.DASHBOARD}
            pageName="dashboard"
            component={Dashboard}
            layout={NavbarFooterAdmin}
          />
          <ProtectedRoute
            exact
            path={`${ROUTES.INVOICES}`}
            pageName="invoices"
            component={Invoices}
            layout={NavbarFooterAdmin}
          />
          <Route path="*" pageName="Not Found" component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(AdminLayout)
);
