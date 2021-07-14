import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { LOGIN_PATH } from '../../app/store/constants';

const LogOutButton = ({ logOut, user }) =>
  user ? (
    <Button variant="contained" startIcon={<ExitToApp />} onClick={() => logOut()} size="small">
      LogOut
    </Button>
  ) : (
    <Redirect to={LOGIN_PATH} push />
  );

export default LogOutButton;
