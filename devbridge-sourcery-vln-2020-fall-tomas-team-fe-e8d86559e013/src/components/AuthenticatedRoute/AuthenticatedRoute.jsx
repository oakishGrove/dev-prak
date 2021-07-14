import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { BOARDS_PATH, LOGIN_PATH, ROOT_PATH } from '../../app/store/constants';

const AuthenticatedRoute = ({ isAuthenticated, path, ...props }) => {
  if (isAuthenticated) {
    switch (path) {
      case ROOT_PATH:
      case LOGIN_PATH:
        return <Redirect to={BOARDS_PATH} />;
      default:
        return <Route {...props} />;
    }
  }

  // unauthenticated path, allow render component if path was login or root
  if (path === LOGIN_PATH) {
    return <Route exact path={LOGIN_PATH} component={props.component} />;
  }
  return <Redirect to={LOGIN_PATH} />;
};

export default AuthenticatedRoute;
