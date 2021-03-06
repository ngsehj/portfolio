import React from 'react';
import { useScrollCalc, useScrollFadeIn, useScrollTranslate } from '../../../hooks';

const SectionIntro = () => {
  const animatedElement = {

    heading : useScrollCalc('scale', {start: 1, end: 12}),
    bg: useScrollFadeIn('no', 1, 0),
    0: useScrollTranslate(1, 0.5),
    1: useScrollTranslate(1, 0.6),
    2: useScrollTranslate(1, 0.7),
  }

  const text = [
    "Transforming Ideas",
    "into Stunning Web Realities :",
    "Web Publisher's Portfolio"
  ]

  return (
    <section className="section section__intro">
      <div className="intro-bg">
          <span className="bg" {...animatedElement['bg']}></span>
      </div>
      <h1 className="intro-heading" {...animatedElement['heading']} >
        {text.map((item, idx) => (
          <div className="inner" key={idx}>
            <span className={`heading${idx}`} {...animatedElement[idx]} key={item}>{item}</span>
          </div>
        ))}
      </h1>
    </section>
  )
};

export default SectionIntro;