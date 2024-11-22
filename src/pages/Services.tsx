import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Services: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2">Services</Typography>
      <Typography variant="body1">Here are the services we offer.</Typography>
    </Box>
  );
};

export default Services;
