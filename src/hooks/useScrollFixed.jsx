import { useRef, useCallback, useEffect } from 'react';

const useScrollFixed = () => {
  const element = useRef();

  let thresholdSet = [];

  for (let i = 0; i <= 1.0; i += 0.001) {
    thresholdSet.push(i);
  }


  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    let ratio = entry.intersectionRatio.toFixed(2);

    console.log(ratio)

    if (ratio > 0.9) {
      current.children[0].classList.add('is-fixed')
    } else if( ratio < 0.1 ) {
      current.children[0].classList.remove('is-fixed')
    }
  },[]);

  useEffect(() => {
    let observer;

    if(element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: thresholdSet })
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();

  }, [onScroll]);

  return {
    ref: element
  }
}

export default useScrollFixed;
