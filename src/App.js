// src/App.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';

// Lazy load your components
const Header = lazy(() => import('./components/Header/header'));
const FAQ = lazy(() => import('./components/faq/faq'));
const Testimonial = lazy(() => import('./components/Testimonial/Testimonial.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Error404 = lazy(() => import('./components/404/404'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Features = lazy(() => import('./components/Features/Features'));
const ContactForm = lazy(() => import('./components/Contacts/contacts.jsx'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const BlogHero = lazy(() => import('./components/BlogHero/BlogHero.jsx'))
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero/> <Features/> <Testimonial/> <FAQ/> <ContactForm/></>} />
          <Route path="/blog" element={<><BlogHero /><Blog /> <Helmet> <title>Blog</title></Helmet></>} />
          <Route path="/article/:slug" element={<BlogPost />} />
          <Route path="/contacts" element={<><ContactForm/></>} />
          <Route path="/features" element={<> <Features/> </>}/>
          <Route path="/aboutus" element={<> <FAQ/></>}/>
          
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
