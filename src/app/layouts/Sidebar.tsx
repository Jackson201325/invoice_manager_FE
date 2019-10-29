import React from 'react';
import { Link } from 'react-router-dom';
import { IAuthenticationState } from '../redux/Authentication/reducer';
import { logout } from '../redux/Authentication/action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getThemeProps } from '@material-ui/styles';

export const Sidebar = props => {
  return (
    <div
      style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/admin/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={props.logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: { authReducer: IAuthenticationState }) => {
  console.log(state);
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Sidebar)
);
