import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/pages';
import Login from './components/pages/login';
import Register from './components/pages/register';


import Desktop from './components/global/menu/Desktop';
import Mobile from './components/global/menu/Mobile';

import Footer from './components/global/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <BrowserRouter>
      <div className="container mx-auto bg-white">
        <Desktop toggle={toggle} />
      </div>
      <Mobile isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;