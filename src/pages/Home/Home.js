import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionFadeIn from './components/SectionFadeIn';
import SectionHorizontal from './components/SectionHorizontal';
import SectionHorizontalUseHook from './components/SectionHorizontalUseHook';
import SectionText from './components/SectionText';
export const GlobalDataContext = React.createContext();
export const ScrollPageContext = React.createContext();

const Home = () => {
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
    <SectionFadeIn />,
    <SectionText />,
    <SectionHorizontalUseHook />,
    <SectionIntro />,
    <SectionHorizontal />,
    // <SectionFadeIn />,
    // <SectionFadeIn />,
  ]

  return (
    <GlobalDataContext.Provider value={globalData}>
      {children.map((section, idx) => (
        <ScrollPageContext.Provider 
          value={{page: idx}} 
          key={idx} 
        >
          {section}
        </ScrollPageContext.Provider>
      ))}
    </GlobalDataContext.Provider>
  )
}

export default Home;