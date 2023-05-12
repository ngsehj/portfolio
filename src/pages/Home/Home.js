import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionFadeIn from './components/SectionFadeIn';
import SectionHorizontal from './components/SectionHorizontal';
export const ScrollDataContext = React.createContext();
export const ScrollPageContext = React.createContext();

const Home = () => {
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

  const children = [
    <SectionFadeIn />,
    <SectionIntro />,
    <SectionHorizontal />,
    <SectionFadeIn />,
  ]

  return (
    <ScrollDataContext.Provider value={initScrollData}>

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