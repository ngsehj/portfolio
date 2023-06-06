import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import TopButton from './components/TopButton';
import Home from './pages/Home/Home';

export const GlobalDataContext = React.createContext();

function App() {
  const initGlobalData = {
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth
  }

  const [globalData, setGlobalData] = useState(initGlobalData);

  const handleResize = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    setGlobalData(() => ({
      ...globalData,
      viewportHeight,
      viewportWidth
    }));
  }, [globalData]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <BrowserRouter>
      <div className="App">

        <GlobalDataContext.Provider value={globalData}>
          <Loading />
          <Header />

          <Routes>
            {/* <Route path="/" element={<Index />} /> */}
            <Route path="/" element={<Home />} />

          </Routes>
          <Footer />
          <TopButton />
        </GlobalDataContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
