import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
function App() {
  // https://redi-final-restaurants.herokuapp.com/restaurants

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
