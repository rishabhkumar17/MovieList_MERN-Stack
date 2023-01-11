import { Button, TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from '../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validateInput = () => {
    if (username === '') {
      enqueueSnackbar('Username is a required field', { variant: 'error' });
      return false;
    }
    if (password === '') {
      enqueueSnackbar('Password is a required field', { variant: 'error' });
      return false;
    }
    return true;
  };

  const persistLogin = (token, username, balance) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('balance', balance);
  };

  const login = async () => {
    const isValid = validateInput();
    try {
      if (isValid) {
        const response = await axios.post(`${config.endpoint}/auth/login`, {
          username,
          password,
        });
        if (response.status === 201) {
          console.log(response);
          const { balance, success, token, username } = response.data;
          if (success) {
            persistLogin(token, username, balance);
            enqueueSnackbar('Logged in successfully', { variant: 'success' });
            localStorage.setItem('success', success);
            setUsername('');
            setPassword('');
            history('/movies');
          }
        }
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'alert' });
    }
  };
  return (
    <Box>
      <Box className="content">
        <Stack className="form" spacing={2}>
          <h2 className="title">Login</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            fullWidth
          ></TextField>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            title="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
          ></TextField>
          <Button className="button" variant="contained" onClick={login}>
            Login
          </Button>
          <p className="secondary-action">
            Don't have an account?
            <Link className="link" to="/">
              {' '}
              Register now
            </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
