// import logo from './logo.svg';
import React from 'react';
import './App.css';
import AddBlog from './components/AddBlog';
import Navbar from './components/Navbar';
import ShowBlogs from './components/ShowBlogs';
import { Route, Routes } from "react-router-dom";
import BlogPost from './components/BlogPost';
import EditBlog from './components/EditBlog';

// let Author = "Adarsh Gupta"
function App() {

  return (
    <>
      
        <Navbar title="BlogApp" />
        <Routes>
          <Route path="/AddPost" element={<AddBlog />} />
          <Route path="/blog/:title" element={<BlogPost />} />
          <Route path="/EditPost/:title" element={<EditBlog />} />
          <Route path="/home" element={<ShowBlogs/>} />
          <Route path="*" element={<ShowBlogs/>} />
        </Routes>
    </>
  );
}

export default App;
