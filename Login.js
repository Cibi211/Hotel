import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import './login.css';  // Import the CSS file

const LoginForm = ({ setPage, signupData }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (signupData.email) {
      setFormData({ email: signupData.email, password: signupData.password });
    }
  }, [signupData]);

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Both fields are required");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const user = users.find((user) => user.email === formData.email && user.password === formData.password);

      if (user) {
        setPage("home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <Box className="login-container">
      <Typography variant="h5" className="login-title">Login</Typography>
      <TextField label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} fullWidth margin="normal" className="login-input" />
      <TextField label="Password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} fullWidth margin="normal" className="login-input" />

      {error && <Typography className="login-error">{error}</Typography>}

      <Button variant="contained" onClick={handleLogin} className="login-button">Login</Button>
    </Box>
  );
};

export default LoginForm;
