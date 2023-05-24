import React from 'react';
import { useScrollFadeIn } from '../../../hooks';


const items = [
  {
    title: 'Volutpat odio',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
    button: 'Get started',
  },
  {
    title: 'Diam donec',
    description:
      'Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.',
    button: 'Switch over',
  },
  {
    title: 'Elit at imperdiet',
    description:
      'Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.',
    button: 'Read more',
  },
]

const SectionFadeIn = () => {
  // const { targetRef } = useHoverCursor();
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2)
  };

  return (
    <section className="section">
      <div className="section__list">
        {items.map((item, idx) => (
          <div className="section__item" 
            key={item.title} 
            // {...animatedItem[idx]}
            // ref={(el) => (targetRef.current[idx] = el)}
          >
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <button>{item.button}</button>
            <span className="cursor">Click</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionFadeIn;