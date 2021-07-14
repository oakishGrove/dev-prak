/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './LoginForm.styles.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const LoginForm = ({ authenticateUser }) => {
  const authenticateUserAction = credentials => {
    authenticateUser(credentials);
  };

  const validation = values => {
    const errors = {};
    if (values.username.length === 0) {
      errors.username = 'Please enter email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
      errors.username = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Please enter password';
    }
    return errors;
  };

  const classes = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }))();

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validation}
        onSubmit={values => authenticateUserAction(values)}
      >
        {() => {
          return (
            <>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </div>
              </Container>

              <Form className="login-form">
                <div className="login-form">
                  <Field name="username" type="text" placeholder="Enter email address" />
                  <ErrorMessage className="login-form-error" name="username" component="div" />
                </div>
                <div className="login-form">
                  <Field
                    className="login-form"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                  <ErrorMessage className="login-form-error" name="password" component="div" />
                </div>
                <Button className="login-form" type="submit" variant="contained" color="primary">
                  Sign In
                </Button>
                <div className="two-columns">
                  <Link variant="body2" to="/">
                    {/* Forgot password? */}
                    Forgot pw?(todo?)
                  </Link>
                  <Link variant="body2" to="/">
                    {/* Dont have an account? Sign Up */}
                    Sign Up(todo?)
                  </Link>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
