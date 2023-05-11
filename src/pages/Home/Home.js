import React, { useCallback, useEffect, useState } from 'react';
import SectionIntro from './components/SectionIntro';
import SectionFadeIn from './components/SectionFadeIn';
import SectionDesc from './components/SectionDesc';
export const ScrollDataContext = React.createContext();
export const ScrollPageContext = React.createContext();

const Home = () => {
  const init = 0;
  const children = [
    <SectionIntro />,
    // <SectionDesc />,
    // <SectionIntro />,
    // <SectionFadeIn />,
  ]

  return (
    <ScrollDataContext.Provider value={init}>

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