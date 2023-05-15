import React, { useEffect, useRef, useCallback, useState, useContext } from 'react';
import { ScrollDataContext } from "../Home";
import { useScrollHorizontal } from '../../../hooks';

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
  const { viewportWidth } = useContext(ScrollDataContext);
  let sliderMoveMax = 0;
  let sliderPos = 0;

  console.log(viewportWidth)
  
  const sectionRef = useRef();
  const sliderRef = useRef();
  const [height, setHeight] = useState(null);
  
  const onScrollHorizontal = useCallback((amount, max) => {
    sliderMoveMax = max;
    sliderPos = amount;
    // console.log(sliderPos, sliderMoveMax)

    if (sliderPos < sliderMoveMax) {
      sliderPos = sliderMoveMax;
      return;
    } else if (sliderPos > 0) {
      sliderPos = 0;
      return;
    }

    sliderRef.current.style.transform = `translateX(${sliderPos}px)`;
    setTimeout(() => {
    }, 1000);

  }, []);


  useEffect(() => {
    const width = sliderRef.current.offsetWidth;
    setHeight(width);

    window.addEventListener('scroll', function () {
      let sectionY = sectionRef.current.getBoundingClientRect().top;
      let maxY = -(width - viewportWidth);

      console.log(maxY)

      if (sectionY <= 0 && sectionY >= maxY) {
        onScrollHorizontal(sectionY, maxY);
      }
    });

    // window.addEventListener('resize', function() {
    //   let sectionY = sectionRef.current.getBoundingClientRect().top;
    //   let maxY = -(width - viewportWidth);

    //   if (sectionY <= 0 && sectionY >= maxY) {
    //     onScrollHorizontal(sectionY, maxY);
    //   }
    // })

  }, []);


  const animatedElement = {
    0 : useScrollHorizontal()
  }
  
  return (
    <section className="section section__horizontal"
      ref={sectionRef}
      style={{ height: height }}
      // {...animatedElement[0]}
    >
      <div className="section__sticky">
        <div className="slider__wrap">
          <div className="slider" ref={sliderRef}>
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

