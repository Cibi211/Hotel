import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const BookingManagement = () => {
  const bookings = [
    { id: 1, customer: "John Doe", room: "Deluxe Room", status: "Confirmed" },
    { id: 2, customer: "Jane Smith", room: "Suite", status: "Pending" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Current Bookings
      </Typography>
      <List>
        {bookings.map((booking) => (
          <ListItem key={booking.id}>
            <ListItemText
              primary={`${booking.customer} - ${booking.room}`}
              secondary={`Status: ${booking.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BookingManagement;
