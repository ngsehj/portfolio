import React from 'react';
import { useScrollCalc, useScrollFadeIn, useScrollTranslate } from '../../../hooks';

const SectionIntro = () => {

  const animatedElement = {
    0: useScrollTranslate(1, 0.1),
    1: useScrollTranslate(1, 0.2),
    2: useScrollTranslate(1, 0.3),
    bg: useScrollCalc('width', {start: 0, end: 1.2}, false),
    heading : useScrollCalc('scale', {start: 1, end: 12}),
  }

  const text = [
    "Transforming Concepts",
    "into Web Realities :",
    "Web Publisher's Portfolio"
  ]

  return (
    <section className="section section__intro">
      <div className="intro-bg"></div>
      <h1 className="intro-heading" {...animatedElement['heading']} >
        {text.map((item, idx) => (
          <div className="inner">
            <span className={`heading${idx}`} {...animatedElement[idx]} key={item}>{item}</span>
          </div>
        ))}
      </h1>
    </section>
  )
};

export default SectionIntro;