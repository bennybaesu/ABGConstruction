import React from 'react';
import Slideshow from '../components/Slideshow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <Box>
      <Slideshow />
      <Box sx={{ p: 4 }}>
        <Typography variant="h2">Welcome to ABG Construction</Typography>
        <Typography variant="body1">
          We provide high-quality construction and restoration services.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
