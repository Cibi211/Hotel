import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ThankYou = ({ name, setPage }) => {
  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 4 }} className="hlo">
      <Typography variant="h4" gutterBottom>
        Thank You, {name}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your booking has been successfully submitted. We look forward to hosting you!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage("home")}
        sx={{ mt: 3 }}
      >
        Go Back to Dashboard
      </Button>
    </Box>
  );
};

export default ThankYou;
