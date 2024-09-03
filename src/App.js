// src/App.jsx

import React from 'react';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Header from './components/Header/header'; // Correct import path for NavBar component
import FAQ from './components/faq/faq';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Footer from './components/Footer/Footer';
import Error404 from './components/404/404';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero/> <Features/> <FAQ /> <Testimonial /> </>} />
        <Route path="*" element={<><Error404 /> </>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// Example components for routes (replace with your actual components)


export default App;
