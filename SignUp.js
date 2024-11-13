import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const SignupForm = ({ setPage, setSignupData }) => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
 });
 const [error, setError] = useState("");

 const handleSignup = async () => {
  if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
   setError("All fields are required");
   return;
 }

  if (formData.password !== formData.confirmPassword) {
   setError("Passwords do not match");
   return;
  }

  try {
   // Check if the email already exists in db.json
   const response = await axios.get("http://localhost:5000/users");
   const users = response.data;
   const existingUser = users.find(user => user.email === formData.email);

   if (existingUser) {
    setError("Email is already registered");
    return;
   }

// Proceed with signup if email is not found
   await axios.post("http://localhost:5000/users", {
    name: formData.name,
    email: formData.email,
    password: formData.password,
   });

   setSignupData({ email: formData.email, password: formData.password });
   setPage("login"); // Redirect to login page after successful signup
  } catch (err) {
   console.error("Error during signup:", err);
   setError("Something went wrong, please try again later.");
  }
 };

 return (
  <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 4 }} className="hlo">
   <Typography variant="h5" gutterBottom>Signup</Typography>
   <TextField
    label="Full Name"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    fullWidth
    margin="normal"
   />
   <TextField
    label="Email"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    fullWidth
    margin="normal"
   />
   <TextField
    label="Password"
    type="password"
    value={formData.password}
    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    fullWidth
    margin="normal"
   />
   <TextField
    label="Confirm Password"
    type="password"
    value={formData.confirmPassword}
    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
    fullWidth
    margin="normal"
   />

   {error && <Typography color="error">{error}</Typography>}

   <Button variant="contained" onClick={handleSignup} sx={{ mt: 3 }}>
    Signup
   </Button>

   <Button
    variant="outlined"
    onClick={() => setPage("login")}
    sx={{ mt: 2, ml: 2 }}
   >
     Login
   </Button>
  </Box>
 );
};

export default SignupForm;
