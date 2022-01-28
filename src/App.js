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
import ScrollToTop from './ScrollToTop';
import Templet from './components/Templet';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
    <BrowserRouter>

  <ScrollToTop />

    <Header />

    <AnimatePresence>

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/iot" element={<Templet />}/>
          <Route path="/about" element={<About />}/>
          <Route exact path="/blogs" element={<Blogs />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/blogs/:id" element={<BlogPage />}/>
          <Route path="/reach-us" element={<Reach />}/>
          <Route path="/slider" element={<SliderPage />}/>
          <Route path="*" element={<Error />}/>
      </Routes>

      </AnimatePresence>

    <Footer />

    </BrowserRouter>

    </>
  );
}

export default App;
