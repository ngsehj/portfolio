import React from 'react';
import { useScrollCalc } from '../../../hooks';

const items = [
  {
    title: 'Volutpat odio',
    desc:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
  },
  {
    title: 'Diam donec',
    desc:
      'Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.',
  },
  {
    title: 'Elit at imperdiet',
    desc:
      'Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.',
  },
]

const SectionDesc = () => {
  const animatedItem = {
    0: useScrollCalc([0, 0.33]),
    1: useScrollCalc([0.33, 0.66]),
    2: useScrollCalc([0.66, 1]),
  };

  return (
    <section className="section">
      {items.map((item, idx) => (
        <div className="section__desc" key={item.title} {...animatedItem[idx]}>
          <p>
            <strong>{item.title}</strong>{item.desc}</p>
        </div>
      ))}      
    </section>
  )
}

export default SectionDesc;