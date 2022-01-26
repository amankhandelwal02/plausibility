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

function App() {
  return (
    <>

    <Header />

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error />}/>
      </Routes>

    <Footer />

    </>
  );
}

export default App;
