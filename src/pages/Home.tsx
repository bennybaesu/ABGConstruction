import React from "react";
import Slideshow from "../components/Slideshow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductHighlights from "../components/ProductHighlights";

const Home: React.FC = () => {
  return (
    <Box>
      <Slideshow />
      <Box
        sx={{
          p: 4,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <ProductHighlights />
      </Box>
      
    </Box>
  );
};

export default Home;
