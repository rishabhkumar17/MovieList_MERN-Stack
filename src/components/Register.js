import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { config } from '../App';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const performAPICall = async () => {
    try {
      let response = await axios.post(config.endpoint + '/register', {
        username,
        password,
        email,
        phone,
        profession,
      });
      if (response) return true;
    } catch (error) {
      return false;
    }
  };

  const validateInput = (data) => {
    if (!username) {
      enqueueSnackbar('Username is a required field.', { variant: 'error' });
      return false;
    }
    if (username.length < 6) {
      enqueueSnackbar('Username must be at least 6 characters long.', {
        variant: 'error',
      });
      return false;
    }
    if (username.length > 32) {
      enqueueSnackbar('Username must not exceed max length of 32.', {
        variant: 'error',
      });
      return false;
    }
    if (!password) {
      enqueueSnackbar('Password is a required field.', { variant: 'error' });
      return false;
    }
    if (password.length < 6) {
      enqueueSnackbar('Password must be at least 6 characters long.', {
        variant: 'error',
      });
      return false;
    }
    if (password.length > 32) {
      enqueueSnackbar('Password must not exceed max length of 32', {
        variant: 'error',
      });
      return false;
    }
    if (password !== confirmPassword) {
      enqueueSnackbar('Password and confirm password do not match.', {
        variant: 'error',
      });
      return false;
    }
    return true;
  };

  const register = async (formData) => {
    let isValid = validateInput(formData);
    if (isValid) {
      let apiCall = await performAPICall();
      if (apiCall) {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        setPhone('');
        setProfession('');

        enqueueSnackbar('Successfully registered', { variant: 'success' });
        history('/login');
      } else {
        enqueueSnackbar(
          'Username is already taken, try with other username and password',
          { variant: 'error' }
        );
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className="content">
        <Stack className="form" spacing={2}>
          <h2 className="title">Sign up</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            fullWidth
          ></TextField>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
          ></TextField>
          <TextField
            id="phoneNumber"
            label="Phone number"
            variant="outlined"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            fullWidth
          ></TextField>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label" label="Profession">
              Profession
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profession}
              label="profession"
              onChange={(e) => setProfession(e.target.value)}
            >
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Software Developer">Software Developer</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            placeholder="Enter a password with minimum 6 characters"
            helperText="Password must be atleast 6 characters length"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
          ></TextField>
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            fullWidth
          ></TextField>
          <Button className="button" variant="contained" onClick={register}>
            Register Now
          </Button>
          <p className="secondary-action">
            Already have an account?
            <Link className="link" to="/Login">
              {' '}
              Login here
            </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
