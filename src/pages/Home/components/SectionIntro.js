import React from 'react';
import { useScrollCalc } from '../../../hooks';

const text = [
  { text: 'FEARLESS', },
  { text: 'Blue Flame', },
  { text: 'ANTIFRAGILE', },
  { text: 'UNFORGIVEN', },
]

const SectionIntro = () => {
  const animatedElement = {
    0 : useScrollCalc('scale', {start: 1, end: 1.5}),
    1: useScrollCalc('opacity', {start: 0, end: 1})
  }

  const animatedItem = {
    0: useScrollCalc('left ', {start: 0, end: 1}),
    1: useScrollCalc('right', {start: 0, end: 1}),
    2: useScrollCalc('left', {start: 0, end: 1}),
    3: useScrollCalc('opacity', {start: 0, end: 1}),
  };

  return (
    <section className="section" {...animatedElement[1]}>
      <div className="section__bg"></div>
      <div className="section__heading" style={{color: '#fff'}}>
          <h1 className="heading"
            {...animatedElement[0]}
          >KAZUHA forever win</h1>
      </div>

      {/* {text.map((item, idx) => (
        <div className="section__desc" key={idx}>
          <div 
            className="inner" 
            {...animatedItem[idx]}
          >
            <p>{item.text}</p>
          </div>
        </div>
      ))} */}

    </section>
  )
};

export default SectionIntro;