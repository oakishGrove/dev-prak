import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './Login.styles.css';

const Login = ({ currentUser, isAuthenticating, isUserAuthenticationError }) => (
  <div className="login-page">
    <LoginForm />
    {isAuthenticating && <div>loading</div>}
    {isUserAuthenticationError && (
      <div>
        <p>
          <strong>Invalid email or password.</strong>
          <br />
          Please try again.
        </p>
      </div>
    )}
    {currentUser && <Redirect to="/boards" />}
  </div>
);

export default Login;
