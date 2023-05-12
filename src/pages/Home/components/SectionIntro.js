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
    0 : useScrollCalc('scale', {start: 1, end: 2})
  }

  const animatedItem = {
    0: useScrollCalc('scale', {start: 0, end: 1}),
    1: useScrollCalc('right', {start: 0, end: 1}, [0, 0.5]),
    2: useScrollCalc('left', {start: 0, end: 1}, [0, 0.5]),
    3: useScrollCalc('opacity', {start: 0, end: 1}),
  };

  return (
    <section className="section">
      <div className="section__bg"></div>
      <div className="section__heading" style={{color: '#fff'}}>
          <h1 className="heading"
            {...animatedElement[0]}
          >KAZUHA forever win</h1>
      </div>

      {text.map((item, idx) => (
        <div className="section__desc" key={item.text}>
          <div 
            className="inner" 
            // {...animatedItem[idx]}
          >
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
};

export default SectionIntro;