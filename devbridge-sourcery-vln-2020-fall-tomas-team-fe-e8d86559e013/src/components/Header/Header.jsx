import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import NavBarView from '../NavBar/NavBar';
import LogOutButton from '../LogOutButton';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="separate-exit">
        <div>
          <NavBarView />
        </div>
        <LogOutButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
