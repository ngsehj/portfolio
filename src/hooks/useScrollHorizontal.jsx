import { useRef, useCallback, useEffect } from 'react';

const useScrollHorizontal = () => {
  const element = useRef();

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    let currentY = entry.intersectionRect.y; 
    let totalY = entry.boundingClientRect.height;
    let ratio = currentY / totalY;
    let w = entry.boundingClientRect.width;
    let moveX = -(totalY - w)

    console.log(current.offsetTop)

    if (entry.isIntersecting) {
      current.children[0].children[0].children[0].style.transform = `translateX(${moveX}px)`;
      
    }
  },[]);

  useEffect(() => {
    let observer;
    let thresholdSet = [];

    for (let i = 0; i <= 1.0; i += 0.001) {
      thresholdSet.push(i);
    }

    if(element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: thresholdSet })
      observer.observe(element.current);
      return () => observer && observer.disconnect();
    }


  }, [onScroll]);

  return {
    ref: element
  }
}

export default useScrollHorizontal;
