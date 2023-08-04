import './App.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import Footer from 'components/Footer';
import TopButton from 'components/TopButton';

export const GlobalDataContext = React.createContext();

function App() {
  const initGlobalData = {
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth,
  };

  const [globalData, setGlobalData] = useState(initGlobalData);

  const handleResize = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    setGlobalData(() => ({
      ...globalData,
      viewportHeight,
      viewportWidth,
    }));
  }, [globalData]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <GlobalDataContext.Provider value={globalData}>
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            <TopButton />
          </GlobalDataContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
