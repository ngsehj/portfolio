import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionFadeIn from './components/SectionFadeIn';
import SectionDesc from './components/SectionDesc';
export const ScrollDataContext = React.createContext();
export const ScrollPageContext = React.createContext();

const scrollParent = window || HTMLElement;
const initScrollData = {
  currentY: 0, // window.pageYOffset
  viewportHeight: 0,
  totalPage: 0,
  totalHeight: 0,
  totalProgress: 0,
  realPage: 0,
  currentPage: 0,
  currentProgress: 0,
}

const Home = () => {
  const [scrollData, setScrollData] = useState(initScrollData);

  const children = [
    <SectionDesc />,
    <SectionIntro />,
    <SectionFadeIn />,
  ]
  
  const handleScroll = useCallback (() => {
    const currentY = scrollParent.pageYOffset,
          viewportHeight = scrollParent.innerHeight,
          totalPage = children.length,
          totalHeight = scrollData.totalPage * scrollData.viewportHeight,
          totalProgress = scrollData.currentY / scrollData.totalHeight,
          realPage = scrollData.currentY / scrollData.totalHeight,
          currentPage = scrollData.currentY / scrollData.viewportHeight,
          currentProgress = scrollData.realPage - scrollData.currentPage

    setScrollData({
      ...scrollData,
      currentY,
      viewportHeight,
      totalPage,
      totalHeight,
      totalProgress,
      realPage,
      currentPage,
      currentProgress
    });

    setTimeout(() => {
      const newCurrentPage = Math.round(realPage);
      let newCurrentY = currentY;

      if (Math.abs(newCurrentPage - realPage) < 0.3)
        newCurrentY = newCurrentPage * viewportHeight;

      if (newCurrentY !== currentY)
        window.scrollTo({
          top: newCurrentY,
          behavior: "smooth",
        });
    }, 50);

  }, [scrollParent, setScrollData]);

  useEffect(() => {
    if (scrollParent) {
      handleScroll();

      scrollParent.addEventListener('scroll', handleScroll);
      scrollParent.addEventListener('resize', handleScroll);
    }
  }, [handleScroll, scrollParent]);


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