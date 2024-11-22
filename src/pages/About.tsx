import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const About: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2">About Page</Typography>
      <Typography variant="body1">This is the About Page.</Typography>
    </Box>
  );
};

export default About;
