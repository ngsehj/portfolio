
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import Index from './pages/Index';
import TopButton from './components/TopButton';
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Header />

        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/" element={<Home />} />
          
          
        </Routes>
        <Footer />
        <TopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
