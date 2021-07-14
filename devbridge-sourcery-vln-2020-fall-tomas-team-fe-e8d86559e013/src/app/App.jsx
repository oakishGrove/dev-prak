import React, { useEffect } from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Boards from '../pages/Boards';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import Profile from '../pages/Profile';
import Board from '../pages/Board';
import { BOARDS_PATH, BOARD_PATH, LOGIN_PATH, PROFILE_PATH, ROOT_PATH } from './store/constants';

const App = ({ isUserAuthenticating, fetchAuthData }) => {
  useEffect(() => {
    fetchAuthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isUserAuthenticating ? (
        <h2>Loading...</h2>
      ) : (
        <Switch>
          <AuthenticatedRoute exact path={LOGIN_PATH} component={Login} />

          <AuthenticatedRoute exact path={BOARDS_PATH} component={Boards} />
          <AuthenticatedRoute exact path={BOARD_PATH} component={Board} />
          <AuthenticatedRoute exact path={PROFILE_PATH} component={Profile} />

          <Redirect exact from={ROOT_PATH} to={LOGIN_PATH} />

          <Route from="*">
            <h2> 404 Page not found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
