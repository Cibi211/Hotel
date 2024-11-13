// components/BookingHistory.js
import { useState, useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history when the component mounts
    const fetchBookingHistory = async () => {
      try {
        const response = await axios.get('http://localhost:3001/bookings'); // Replace with your actual API
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching booking history:', error);
      }
    };
    fetchBookingHistory();
  }, []);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Booking History
        </Typography>
        {bookings.length > 0 ? (
          <List>
            {bookings.map((booking) => (
              <div key={booking.id}>
                <ListItem sx={{ bgcolor: 'grey.100', mb: 1, borderRadius: 1 }}>
                  <ListItemText
                    primary={`Room ${booking.roomNumber}`}
                    secondary={`Booked on: ${new Date(booking.date).toLocaleDateString()}`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        ) : (
          <Typography>No booking history available.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default BookingHistory;
