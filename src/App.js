import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Criar from './components/Criar';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Vicio from './components/Vicio';



const App = () => {
  const [ posts, setPosts ] = useState([]);
  
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home posts={posts}/>}/>
          <Route path='/vicio' element={<Vicio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/criar' element={<Criar posts={posts} setPosts={setPosts}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {posts.map(post => <Route path={`/${post.titulo}`} key={post.titulo} element={<Post post={post}/>}/>)}
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
