import React from 'react';
import { useScrollCalc, useScrollFadeIn } from '../../../hooks';

const SectionIntro = () => {

  const animatedElement = {
    0: useScrollFadeIn('up', 1, 0.1),
    1: useScrollFadeIn('right', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    bg: useScrollCalc('width', {start: 0, end: 1.2}, false),
    heading : useScrollCalc('scale', {start: 1, end: 10}),
  }

  const text = [
    'Expanding',
    'Web Possibilities',
    'as a Web Publisher',
  ]

  return (
    <section className="section section__intro">
      <div className="intro-bg"></div>
      <div className="intro-heading" style={{color: '#fff'}}>
          <h1 className="heading"
            {...animatedElement['heading']}
            style={{ color: '#000' }}
          >
            {text.map((item, idx) => (
              <span {...animatedElement[idx]} key={item}>{item}</span>
            ))}
          </h1>
      </div>
    </section>
  )
};

export default SectionIntro;