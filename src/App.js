import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const styles = {
  paperContainer: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundColor: "#f86600",
    backgroundImage: `url(background.png)`,
  },
};

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <body style={styles.paperContainer}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </BrowserRouter>
        </body>
      </ThemeProvider>
    </>
  );
}

export default App;
