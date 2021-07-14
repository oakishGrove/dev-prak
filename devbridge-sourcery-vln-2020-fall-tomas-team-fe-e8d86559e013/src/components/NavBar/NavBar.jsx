import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBarView = () => {
  return (
    <>
      <NavLink className="navigation" activeClassName="active" to="/boards">
        Boards
      </NavLink>
      <NavLink className="navigation" activeClassName="active" to="/profile">
        Profile
      </NavLink>
    </>
  );
};

export default NavBarView;
