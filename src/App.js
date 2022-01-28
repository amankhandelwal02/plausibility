import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import Error from './components/Error'
import Blogs from './components/Blogs'
import { BrowserRouter } from 'react-router-dom';
import Careers from './components/Careers';
import BlogPage from './components/Blog/BlogPage';
import SliderPage from './components/SliderPage'
import Reach from './components/Reach';

function App() {
  return (
    <>
    <BrowserRouter>

    <Header />

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route exact path="/blogs" element={<Blogs />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/blogs/:id" element={<BlogPage />}/>
          <Route path="/reach-us" element={<Reach />}/>
          <Route path="/slider" element={<SliderPage />}/>
          <Route path="*" element={<Error />}/>
      </Routes>

    <Footer />

    </BrowserRouter>

    </>
  );
}

export default App;
