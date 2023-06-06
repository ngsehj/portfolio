import { useEffect, useRef, useCallback, useState, useContext } from 'react';
import { GlobalDataContext } from '../App';

const useScrollHorizontal = () => {
  const { viewportWidth } = useContext(GlobalDataContext);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderMoveMaxRef = useRef(0);
  const sliderPosRef = useRef(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const onScrollHorizontal = useCallback((amount, max) => {
    sliderPosRef.current = amount;
    sliderMoveMaxRef.current = max;

    const add = 150;

    if (sliderPosRef.current <= sliderMoveMaxRef.current + add) {
      sliderPosRef.current = sliderMoveMaxRef.current;
      sliderRef.current.classList.remove('is-fixed');
    } else if (sliderPosRef.current >= -add) {
      sliderPosRef.current = 0;
      sliderRef.current.classList.remove('is-fixed');
    } else {
      sliderRef.current.classList.add('is-fixed');
    }
    
    sliderRef.current.style.transform = `translate3d(${sliderPosRef.current}px, 0, 0)`;
  }, []);

  const handleEvent = useCallback(() => {
    const sliderW = sliderRef.current.offsetWidth;
    const sectionY = sectionRef.current.getBoundingClientRect().top;
    const maxY = viewportWidth - sliderW;
    setSectionHeight(sliderW);

    if (sectionY <= 0 && sectionY >= maxY) {
      onScrollHorizontal(sectionY, maxY);
    }
  }, [onScrollHorizontal, viewportWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleEvent);
    window.addEventListener("scroll", handleEvent);

    return () => {
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("scroll", handleEvent);
    };
  }, [handleEvent]);
  
  return { sectionRef, sliderRef, sectionHeight };
}

export default useScrollHorizontal;