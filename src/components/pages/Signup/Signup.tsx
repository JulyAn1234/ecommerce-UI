import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const SignUpPage: React.FC = () => {
  // State variables for form fields and loading state
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Set loading to true to disable the button
    setLoading(true);

    // Create JSON body from form data
    const requestBody = {
      fullName,
      email,
      username,
      password,
    };

    try {
      // Simulate a service call
      await fakeServiceCall(requestBody);

      // Handle successful signup (for demonstration purposes, we'll just log a success message)
      console.log('Sign-up successful');
    } catch (error) {
      // Handle sign-up failure
      console.error('Sign-up failed', error);
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  // Simulated service call function
  const fakeServiceCall = (requestBody: { fullName: string; email: string; username: string; password: string }): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (requestBody.username && requestBody.password) {
          resolve('Success');
        } else {
          reject('Invalid input');
        }
      }, 2000); // Simulate a 2-second network delay
    });
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
          Sign Up
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
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
