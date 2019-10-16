import React from 'react';

export const NavbarFooterAuth = props => {
  return (
    <div className="navbar">
      <h1>Hello This is Navbar Auth</h1>
      <h1>{props.children}</h1>
      <h1>Hello this is footer Auth</h1>
    </div>
  );
};
