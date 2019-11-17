import React from 'react';
import './NavbarFooterAdmin.scss';
export const NavbarFooterAdmin = props => {
  return (
    <div className="NavbarFooterAdmin">
      {props.children}
      <h1>Hello this is footer Admin </h1>
    </div>
  );
};
