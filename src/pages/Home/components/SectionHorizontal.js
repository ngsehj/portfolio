import React, { useEffect, useRef, useCallback } from 'react';

const items = [
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_01.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_02.jpg'},
  { img: 'https://www.etude.com/wp-content/uploads/2022/09/makeup_look_playlist.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/glowfixing_kazuha_02.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_01.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_02.jpg'},
  { img: 'https://www.etude.com/wp-content/uploads/2022/09/makeup_look_playlist.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/glowfixing_kazuha_02.jpg' },
]

const SectionHorizontal = () => {
  let thresholdSet = [];

  for (let i = 0; i <= 1.0; i += 0.001) {
    thresholdSet.push(i);
  }

  const section = useRef();
  const fixed = useRef();
  const slider = useRef();

  // const sliderW = section.current.scrollWidth;
  //   let winW = window.innerWidth;
  //   let sliderMoveMax = sliderW - winW;
  //   let sliderPos = 0;

  // const onScroll = useCallback(([entry]) => {
  //   let ratio = entry.intersectionRatio.toFixed(2);

  //   if (ratio > 0.9) {
  //     section.current.children[0].classList.add('is-fixed')
  //   } else if( ratio < 0.1 ) {
  //     section.current.children[0].classList.remove('is-fixed')
  //   }
  // },[]);

  // const onScrollHorizontal = useCallback((amount, e) => {sliderPos -= amount;

  //     function remove() {}
      
  //     if ( sliderPos > 0 ) {
  //       sliderPos = 0;
  //       remove();
  //       return;
  //     } else if ( sliderPos <= -sliderMoveMax ) {
  //       sliderPos = -sliderMoveMax;
  //       remove();
  //       return;
  //     } else {
  //       e.preventDefault();
  //     }
      
  //     slider.current.style.transform = `translateX(${sliderPos}px)`;

  // }, []);
  
  // useEffect(() => {
  
  //   section.current.addEventListener('wheel', function(e) {
      
  //     onScrollHorizontal(e.deltaY, e);
  //   });

  //   let observer;

  //   if(section.current) {
  //     observer = new IntersectionObserver(onScroll, { threshold: thresholdSet })
  //     observer.observe(section.current);
  //   }

  //   return () => observer && observer.disconnect();

  // }, []);

  return (
    <section className="section section__vertical" ref={section}>
      <div ref={fixed} style={{backgroundColor: '#fff'}}>
        <div className="inner" >
          <div className="slider" ref={slider}>
            {items.map((item, idx) => (
              <div className="slide" key={idx}>
                <img src={item.img} alt="kazuha" />
              </div>
            ))}
          </div>

        </div>

      </div>



    </section>
  )
}

export default SectionHorizontal;

