import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Link,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor:'purple',
  },
  paper: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    backgroundColor: theme.palette.background.paper,
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));
const Login = () => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const classes = useStyles();

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mobileNumber === '1234567890' && password === 'password') {
      console.log('Login successful!');
    } else {
      setError('Invalid mobile number or password.');
    }
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              fullWidth
              required
            />
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className={classes.submitButton}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
