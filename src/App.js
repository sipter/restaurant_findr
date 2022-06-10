import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const styles = {
  paperContainer: {
    //width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    //overflow: "hidden",
    backgroundPosition: "top",
    backgroundColor: "#f86600",
    backgroundImage: `url(https://images.unsplash.com/photo-1574894609270-60ba58983ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)`,
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
              <Route path="/details" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </body>
      </ThemeProvider>
    </>
  );
}

export default App;
