import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Reviews = () => {
  const reviews = [
    { id: 1, customer: "John Doe", review: "Great service and clean rooms!" },
    { id: 2, customer: "Jane Smith", review: "Enjoyed my stay, but food service was slow." },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Customer Reviews
      </Typography>
      <List>
        {reviews.map((review) => (
          <ListItem key={review.id}>
            <ListItemText
              primary={`${review.customer}`}
              secondary={`Review: ${review.review}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reviews;
