import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Criar from "./components/Criar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Vicio from "./apostandorespo/Vicio";
import Help from "./components/Help";
import Bets from "./sobreapostar/Bets";
import axios from "axios";
import { useEffect } from "react";
import Rodape from "./components/Route";
import TodosPosts from "./components/TodosPosts";

const App = () => {
  const [posts, setPosts] = useState([]);

  const api = axios.create({
    baseURL:
      "https://betresponsavel-default-rtdb.europe-west1.firebasedatabase.app/",
  });

  async function getPosts() {
    api.get("/posts.json").then((resposta) => {
      const newPosts = [];
      for (const id in resposta.data) {
        const post = { ...resposta.data[id], id: id };
        newPosts.push(post);
      }
      setPosts(newPosts);
      console.log(newPosts);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} getPosts={getPosts} />} />
          <Route path="/vicio" element={<Vicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/ajuda" element={<Help />} />
          <Route path="/todaspostagens" element={<TodosPosts posts={posts} getPosts={getPosts}/>} />
          <Route
            path="/criar"
            element={<Criar posts={posts} setPosts={setPosts} />}
          />
          <Route path="/contact" element={<Contact />} />
          {posts.map((post) => (
            <Route
              path={`/${post.titulo}`}
              key={post.titulo}
              element={<Post post={post} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
  );
};

export default App;
