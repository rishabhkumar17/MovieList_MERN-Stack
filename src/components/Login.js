import { Button, TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const Login = () => {
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
            fullWidth
          ></TextField>
          <Button className="button" variant="contained">
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
