import { useEffect, useRef, useCallback, useState, useContext } from 'react';
import { GlobalDataContext } from '../pages/Home/Home';

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

    if (sliderPosRef.current < sliderMoveMaxRef.current) {
      sliderPosRef.current = sliderMoveMaxRef.current;
      return;
    } else if (sliderPosRef.current > 0) {
      sliderPosRef.current = 0;
      return;
    }
    
    sliderRef.current.style.transform = `translateX(${sliderPosRef.current}px)`;
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