import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Planets from './routes/Planets';
import PlanetsSearch from './routes/PlanetsSearch';
import Stars from './routes/Stars';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/planetssearch' element={<PlanetsSearch />} />
        <Route path='/stars' element={<Stars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
