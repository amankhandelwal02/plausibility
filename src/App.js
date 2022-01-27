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

function App() {
  return (
    <>
    <BrowserRouter>

    <Header />

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="*" element={<Error />}/>
      </Routes>

    <Footer />

    </BrowserRouter>

    </>
  );
}

export default App;
