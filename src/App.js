import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vicio from './components/Vicio';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Criar from './components/Criar';
import About from './components/About';



const App = () => {
  
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vicio' element={<Vicio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/criar' element={<Criar/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
