import { useRef, useCallback, useEffect } from 'react';

const useScrollCalc = ( threshold ) => {

  const element = useRef();

  const onScroll = useCallback(([entry]) => {
    const { current } = element;

    let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;
    
    if (entry.isIntersecting) {
      current.style.opacity = visiblePct;
      // console.log(entry.intersectionRatio);
    }


  },[]);

  useEffect(() => {
    let observer;

    if(element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: threshold })
      observer.observe(element.current.parentNode);
    }

    return () => observer && observer.disconnect();

  }, [onScroll]);

  return {
    ref: element
  }
}

export default useScrollCalc;