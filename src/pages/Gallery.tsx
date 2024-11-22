import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Gallery: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2">Gallery</Typography>
      <Typography variant="body1">Our project photos and work examples.</Typography>
    </Box>
  );
};

export default Gallery;
