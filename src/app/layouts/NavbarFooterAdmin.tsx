import React from 'react';

export const NavbarFooterAdmin = props => {
  return (
    <div className="navbar">
      <h1>Hello This is Navbar Admin</h1>
      <h1>{props.children}</h1>
      <h1>Hello this is footer Admin </h1>
    </div>
  );
};
