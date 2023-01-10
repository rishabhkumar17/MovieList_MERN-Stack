import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
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
            fullWidth
          ></TextField>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            placeholder="Enter Email"
            fullWidth
          ></TextField>
          <TextField
            id="phoneNumber"
            label="Phone number"
            variant="outlined"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            fullWidth
          ></TextField>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label" label="Profession">
              Profession
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Student</MenuItem>
              <MenuItem value={20}>Software Developer</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>Teacher</MenuItem>
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
            fullWidth
          ></TextField>
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            fullWidth
          ></TextField>
          <Button className="button" variant="contained">
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
