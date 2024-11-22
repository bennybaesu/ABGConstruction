import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto";
import "@fontsource/merriweather";
import "@fontsource/playfair-display";
import "@fontsource/montserrat";
import "@fontsource/roboto-slab";
import "@fontsource/open-sans";
import "@fontsource/poppins";
import "@fontsource/roboto-mono";
import "@fontsource/source-sans-pro";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5983",
      dark: "#9a0036",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif", // Default font for all
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontFamily: "'Merriweather', serif", // Custom font for h1
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      fontFamily: "'Playfair Display', serif", // Custom font for h2
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      fontFamily: "'Montserrat', sans-serif", // Custom font for h3
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      fontFamily: "'Roboto Slab', serif", // Custom font for h4
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      fontFamily: "'Roboto', sans-serif", // Same as default
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "'Lora', serif", // Custom font for h6
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "'Open Sans', sans-serif", // Custom font for body1
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif", // Default font
    },
    button: {
      textTransform: "uppercase",
      fontFamily: "'Poppins', sans-serif", // Custom font for buttons
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "'Roboto Mono', monospace", // Monospace font for captions
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      textTransform: "uppercase",
      fontFamily: "'Source Sans Pro', sans-serif", // Custom font for overline
    },
  },
  spacing: 8, // Default spacing
});

export default theme;
