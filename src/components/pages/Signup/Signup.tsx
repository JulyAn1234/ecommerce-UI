import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { signupService } from '../../../service/authService';
import { storeToken } from '../../../helpers/AuthHelper';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  // State variables for form fields and loading state
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  //Error message state
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Set loading to true to disable the button
    setLoading(true);

    // Create JSON body from form data
    const requestBody = {
      fullName,
      email,
      Username: username,
      Password: password,
    };

    try {
      //Setting off the error message
      setErrorMessage('');
      // Simulate a service call
      const signupResponse = await signupService(requestBody);

      storeToken(signupResponse?.data?.token)
      navigate("/")
      console.log('Sign-up successful');
    } catch (error) {
      // Handle signup failure
      setErrorMessage('Sign-up Failed');
      console.error('Sign-up failed', error);
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
          {// Display error message if there is one
            errorMessage && (
              <Typography color="error">
                {errorMessage}
              </Typography>
            )
          }
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
          {/* add signup label with link */}
          <Typography component="h6" variant="h6" style={{ textAlign: "center" }}>
            Already have an account? <a href="/login">Log in</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
