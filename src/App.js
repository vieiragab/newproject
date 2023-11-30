import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vicio from './components/Vicio';
import Home from './components/Home';
import Navbar from './components/Navbar';


const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vicio' element={<Vicio/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
