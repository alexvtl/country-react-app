import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index';
import About from '../Pages/About/about';
import Header from '../Components/Header/header';
import Country from '../Pages/Country/Country';

function App() {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/country/:id" element={< Country/>} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
  }

export default App;
