import './App.scss';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import Footer from 'components/Footer';
import TopButton from 'components/TopButton';
import Loading from 'components/Loading';
import Gsap from 'pages/gsap/Gsap';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';

export const GlobalDataContext = React.createContext();

function App() {
  const initGlobalData = {
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth,
  };
  const [globalData, setGlobalData] = useState(initGlobalData);
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);

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

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://ngsehj.github.io/portfolio/api/work.json').then(response => response.json());
      setWorkData(response);
      window.setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {/* github pages에서 BrowswerRouter 보다 HashRouter를 권장 */}
      <HashRouter>
        <ScrollToTop />
        <GlobalDataContext.Provider value={{ globalData, workData }}>
          {loading ? (
            <Loading loadingRef={loadingRef} />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gsap" element={<Gsap />} />
              </Routes>
              <Footer />
            </>
          )}
          <TopButton />
        </GlobalDataContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
