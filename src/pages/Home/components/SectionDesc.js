import React from 'react';
import { useScrollCalc } from '../../../hooks';

const items = [
  {
    title: 'Volutpat odio',
    desc: ''
      // 'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
  },
  {
    title: 'Volutpat odio2',
    desc:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
  },
  {
    title: '33333333333333333',
    desc:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
  }
]

const SectionDesc = () => {
  const animatedItem = {
    0: useScrollCalc('width', true, {start: 0, end: 1}),
    1: useScrollCalc('width', true, {start: 0.5, end: 1}),
    2: useScrollCalc('width', true, {start: 0.8, end: 1}),
  };

  return (
    <section className="section">
      {items.map((item, idx) => (
        <div className="section__desc" key={item.title}>
          <div className="inner" {...animatedItem[idx]}>
            <p>
              <strong>{item.title}</strong>{item.desc}
            </p>
          </div>
        </div>
      ))}      
    </section>
  )
}

export default SectionDesc;