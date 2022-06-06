// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { RestaurantList } from "./components/RestaurantList";
import { RestaurantCard } from "./components/RestaurantCard"
import { HeaderImg } from "./components/HeaderImg"

function App() {


  return (
    <>
    <HeaderImg/>
    <RestaurantCard />
    <RestaurantList/>
{/*         
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} />  
        <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter> */}
  

    </>
  );
}

export default App;
