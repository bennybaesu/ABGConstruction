import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import theme from "./assets/theme";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" sx={{ backgroundColor: "background.paper" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "info.main",
            }}
          >
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "secondary.main" }}
            >
              ABG Construction
            </Typography>
            <Button color="inherit" component={Link} to="/">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                Home
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/about">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                About
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/services">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                Services
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/faq">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                FAQ
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/gallery">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                Gallery
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              <Typography variant="button" fontSize="1.4rem" paddingX={4}>
                Contact
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%", height: "calc(100vh - 64px)", mt: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
