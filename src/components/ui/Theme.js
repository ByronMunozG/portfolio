import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const green = "#2ecc71";
const blue = "#3498db";

const theme = createMuiTheme({
  palette: {
    common: {
      green: `${green}`,
      blue: `${blue}`,
    },
    primary: {
      main: `${green}`,
    },
    secondary: {
      main: `${blue}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});

export default responsiveFontSizes(theme);
