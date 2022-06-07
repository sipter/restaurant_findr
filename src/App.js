import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
