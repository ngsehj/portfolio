import React from 'react';
import { useScrollCalc } from '../../../hooks';

const text = [
  { text: 'Facilisis mauris sit amet massa.', },
  { text: 'Facilisis mauris sit amet massa.', },
  { text: 'Facilisis mauris sit amet massa.', },
  { text: 'Facilisis mauris sit amet massa.', },
]

const SectionIntro = () => {
  const animatedElement = {
    0 : useScrollCalc('scale', false, {start: 2, end: 1})
  }

  const animatedItem = {
    0: useScrollCalc('left', false, {start: 0, end: 1}),
    1: useScrollCalc('right', false, {start: 0, end: 1}),
    2: useScrollCalc('left', false, {start: 0, end: 1}),
    3: useScrollCalc('right', false, {start: 0, end: 1}),
  };

  return (
    <section className="section">
      <div className="section__bg">
        <img src="//www.etude.com/wp-content/uploads/2023/03/playlist02_Kazuha_PC_main.jpg" alt="" width="1920" height="950" />
      </div>
      <div className="section__heading" style={{color: '#fff'}}>
          <h1 className="heading"
            {...animatedElement[0]}
          >Hello World</h1>
      </div>

      {text.map((item, idx) => (
        <div className="section__desc" key={item.text}>
          <div 
            className="inner" 
            {...animatedItem[idx]}
          >
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
};

export default SectionIntro;