import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionHorizontal from './components/SectionHorizontal';
import SectionHorizontalUseHook from './components/SectionHorizontalUseHook';
import SectionText from './components/SectionText';
import Cursor from '../../components/Cursor';
import SectionWork from './components/SectionWork';
export const GlobalDataContext = React.createContext();
export const CursorContext = React.createContext();
export const ScrollPageContext = React.createContext();

const Home = () => {
  const [cursor, setCursor] = useState({ active: false });

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

  const children = [
    <SectionIntro />,
    <SectionWork />,
    <SectionText />,
    <SectionHorizontalUseHook />,
    <SectionHorizontal />,
  ]

  return (
    <GlobalDataContext.Provider value={globalData}>
      <CursorContext.Provider value={[cursor, setCursor]}>
        {/* <Cursor /> */}
        {children.map((section, idx) => (
          <ScrollPageContext.Provider
            value={{ page: idx }}
            key={idx}
          >
            {section}
          </ScrollPageContext.Provider>
        ))}

      </CursorContext.Provider>

    </GlobalDataContext.Provider>
  )
}

export default Home;