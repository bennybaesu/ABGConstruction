import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";

const ProductHighlights: React.FC = () => {
    const theme = useTheme();
  return (
    <div
      style={{
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Typography variant="h1" color={theme.palette.primary.main}>Parented Innovations</Typography>
    </div>
  );
};

export default ProductHighlights;
