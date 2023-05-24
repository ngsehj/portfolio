import React from 'react';
import { useScrollCalc } from '../../../hooks';

const SectionIntro = () => {

  const animatedElement = {
    heading : useScrollCalc('scale', {start: 5, end: 1}),
  }

  return (
    <section className="section section__intro">
      <div className="section__bg"></div>
      <div className="section__heading" style={{color: '#fff'}}>
          <h1 className="heading"
            {...animatedElement['heading']}
            style={{ color: '#000' }}
          >POCHACCO</h1>
      </div>
    </section>
  )
};

export default SectionIntro;