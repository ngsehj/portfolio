import React, { useEffect, useState } from 'react';
import Cursor from '../../components/Cursor';
import SectionIntro from './components/SectionIntro';
import SectionAbout from './components/SectionAbout';
import SectionWork from './components/SectionWork';
import SectionInflearn from './components/SectionInflearn';
import SectionText from './components/SectionText';
import SectionLast from './components/SectionLast';
import SectionContact from './components/SectionContact';

export const CursorContext = React.createContext();
export const ScrollPageContext = React.createContext();

const Home = () => {
  const [cursor, setCursor] = useState({ active: false });

  useEffect(() => {
    document.body.classList.add('l-page-home');

    return () => {
      document.body.classList.remove('l-page-home');
    };
  }, []);

  const children = [
    <SectionIntro />,
    <SectionAbout />,
    <SectionInflearn />,
    <SectionWork />,
    <SectionText />,
    <SectionLast />,
    <SectionContact />
  ]

  return (
      <CursorContext.Provider value={[cursor, setCursor]}>
        <Cursor />
        {children.map((section, idx) => (
          <ScrollPageContext.Provider
            value={{ page: idx }}
            key={idx}
          >
            {section}
          </ScrollPageContext.Provider>
        ))}

      </CursorContext.Provider>

    
  )
}

export default Home;