import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { loginService } from '../../../service/authService';
import { storeToken } from '../../../helpers/AuthHelper';
import { Navigate, useNavigate } from 'react-router-dom';



const LoginPage: React.FC = () => {
  // State variables for username, password, and loading state
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Set loading to true to disable the button
    setErrorMessage("")
    setLoading(true);

    try {
      // Simulate a service call
      const loginResponse = await loginService(username, password);

      console.log(loginResponse)
      // Handle successful login (for demonstration purposes, we'll just log a success message)
      console.log('Login successful');
      storeToken(loginResponse?.data?.token)
      navigate("/")
    } catch (error) {
      // Handle login failure
      setErrorMessage("Login Failed")
      console.error('Login failed', error);
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label style={{color:"red"}}>{errorMessage}</label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
