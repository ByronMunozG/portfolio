import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./ui/Header.component";
import Footer from "./ui/Footer.component";
import Main from "./Main.component";

import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
