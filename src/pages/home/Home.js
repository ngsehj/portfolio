import React, { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Cursor from 'components/Cursor';
import SectionIntro from 'pages/home/components/SectionIntro';
import SectionAbout from 'pages/home/components/SectionAbout';
import SectionWork from 'pages/home/components/SectionWork';
import SectionInflearn from 'pages/home/components/SectionInflearn';
import SectionText from 'pages/home/components/SectionText';
import SectionContact from 'pages/home/components/SectionContact';

export const ScrollPageContext = React.createContext();

const Home = () => {
  useEffect(() => {
    document.body.classList.add('l-page-home');

    return () => {
      document.body.classList.remove('l-page-home');
    };
  }, []);

  return (
    <div className="container">
      {isMobile ? null : <Cursor />}
      <ScrollPageContext.Provider
        value={{
          sectionWorkRef: useRef(),
          sectionAboutRef: useRef(),
        }}
      >
        <SectionIntro />
        <SectionAbout />
        {/* <SectionInflearn /> */}
        <SectionWork />
        <SectionText />
        <SectionContact />
      </ScrollPageContext.Provider>
    </div>
  );
};

export default Home;
