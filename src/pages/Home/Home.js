import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionFadeIn from './components/SectionFadeIn';
import SectionHorizontal from './components/SectionHorizontal';
export const ScrollDataContext = React.createContext();
export const ScrollPageContext = React.createContext();

const scrollParent = window || HTMLElement;
const initScrollData = {
  currentY: 0, // window.pageYOffset
  viewportHeight: 0,
  viewportWidth: 0,
}

const Home = () => {

  const [scrollData, setScrollData] = useState(initScrollData);

  const handleScroll = useCallback(() => {
    const currentY = scrollParent.pageYOffset,
          viewportHeight = scrollParent.innerHeight,
          viewportWidth = scrollParent.innerWidth

    setScrollData({
      ...scrollData,
      currentY,
      viewportHeight,
      viewportWidth
    });
  }, [setScrollData]);

  useEffect(() => {
    handleScroll();
    scrollParent.addEventListener('scroll', handleScroll);
    scrollParent.addEventListener('resize', handleScroll);
  }, [handleScroll]);

  const children = [
    <SectionFadeIn />,
    <SectionIntro />,
    <SectionHorizontal />,
    <SectionFadeIn />,
    <SectionFadeIn />,
  ]

  return (
    <ScrollDataContext.Provider value={scrollData}>

      {children.map((section, idx) => (
        <ScrollPageContext.Provider 
          value={{page: idx}} 
          key={`scroll-page-${idx}`} 
        >
          {section}
        </ScrollPageContext.Provider>
        
      ))}
    </ScrollDataContext.Provider>
  )
}

export default Home;