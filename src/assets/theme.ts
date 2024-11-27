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
      main: "#dd9735", // Main orange color
      light: "#ffbd66", // Lighter version for hover effects or highlights
      dark: "#a9681c", // Darker version for deeper accents
      contrastText: "#ffffff", // Contrast text to ensure readability
    },
    secondary: {
      main: "#4e6946", // Main green color
      light: "#799770", // Lighter version for subtle accents
      dark: "#32432e", // Darker version for deeper tones
      contrastText: "#ffffff", // Contrast text to ensure readability
    },
    error: {
      main: "#f44336", // Standard error red
    },
    warning: {
      main: "#ffa726", // Orange warning color
    },
    info: {
      main: "#0f80a0", // Main blue color
      light: "#4faed1", // Lighter version for information highlights
      dark: "#0b5c73", // Darker version for deep information accents
      contrastText: "#ffffff", // Contrast text to ensure readability
    },
    success: {
      main: "#66bb6a", // Green for success
    },
    background: {
      default: "#f5f5f5", // Light grey background for the page
      paper: "#ffffff", // White background for card-like elements
    },
    text: {
      primary: "#212121", // Main dark text color for high contrast
      secondary: "#757575", // Lighter text for secondary information
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
      fontWeight: 400,
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
