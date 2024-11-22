import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contact: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2">Contact</Typography>
      <Typography variant="body1">Contact us at [your contact details].</Typography>
    </Box>
  );
};

export default Contact;
