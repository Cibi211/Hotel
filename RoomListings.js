import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const RoomListings = ({ setPage, setSelectedRoom }) => {
  const rooms = [
    { id: 1, name: "Deluxe Room", price: 150, description: "A luxurious room with ocean view." },
    { id: 2, name: "Standard Room", price: 100, description: "A comfortable room with all basic amenities." },
    { id: 3, name: "Suite", price: 250, description: "A spacious suite with premium services." },
    { id: 4, name: "Deluxe Room", price: 150, description: "A luxurious room with ocean view." },
    { id: 5, name: "Standard Room", price: 100, description: "A comfortable room with all basic amenities." },
    { id: 6, name: "Suite", price: 250, description: "A spacious suite with premium services." },
  ];

  const handleBookNow = (room) => {
    setSelectedRoom(room);  // Set the selected room
    setPage("bookingForm");  // Navigate to the booking form
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Available Rooms
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {room.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "#007BFF", fontSize: "1.2rem", fontWeight: "500" }}>
                  ${room.price}/night
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                  {room.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleBookNow(room)}
                sx={{ mt: 2, mx: 2, mb: 2, backgroundColor: "#007BFF", "&:hover": { backgroundColor: "#0056b3" } }}
              >
                Book Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomListings;
 