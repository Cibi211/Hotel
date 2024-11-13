import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const BookingForm = ({ setPage, selectedRoom, setNameForThankYou }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    time: "",
  });
  const [error, setError] = useState("");

  const handleBooking = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.checkInDate || !formData.checkOutDate) {
      setError("All fields are required");
      return;
    }

    try {
      // Save booking data in db.json
      await axios.post("http://localhost:5000/bookings", {
        ...formData,
        room: selectedRoom,  // Include selected room details in booking
      });

      setNameForThankYou(formData.name); // Set the user's name for the Thank You page
      setPage("thankYou");  // Redirect to Thank You page after booking
    } catch (err) {
      console.error("Error during booking:", err);
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 4 }} className="hlo">
      <Typography variant="h5" gutterBottom>Book a Room</Typography>

      {/* Display selected room details */}
      {selectedRoom && (
        <Typography variant="h6" gutterBottom>
          Room: {selectedRoom.name} (${selectedRoom.price}/night)
        </Typography>
      )}
      
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
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Check-In Date"
        type="date"
        value={formData.checkInDate}
        onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Check-Out Date"
        type="date"
        value={formData.checkOutDate}
        onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Time"
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      {error && <Typography color="error">{error}</Typography>}

      <Button variant="contained" onClick={handleBooking} sx={{ mt: 3 }}>
        Submit Booking
      </Button>
    </Box>
  );
};

export default BookingForm;
