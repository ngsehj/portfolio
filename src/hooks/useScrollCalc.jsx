import { useRef, useCallback, useEffect } from 'react';

const useScrollCalc = (type='opacity', values, delay = 0) => {
  const element = useRef();

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    let ratio1 = entry.intersectionRatio;

    let currentY = entry.boundingClientRect.height - entry.boundingClientRect.top;
    let totalY = entry.boundingClientRect.height * 2;
    let ratio2 = currentY / totalY;
    let value = ratio2 * (values.end - values.start) + values.start;
    let valuePct = value * 100;

    console.log(ratio2)

    if (entry.isIntersecting) {

      current.style.transitionDelay = `${delay}s`;
      // if (entry.boundingClientRect.top) {
      if (ratio2 >= 0 && ratio2 <= 1) {
        switch (type) {
          case 'scale':
            current.style.transform = `scale(${value})`;
            break;
          case 'width':
            current.style.width = `${valuePct}%`
            break;
          case 'opacity':
            current.style.opacity = value;
            break;
          case 'left':
            current.style.transform = `translate3d(${valuePct}%, 0, 0)`;
            break;
          case 'right':
            current.style.textAlign = 'right';
            current.style.transform = `translate3d(-${valuePct}%, 0, 0)`;
            break;
          default:
            return;
        }
      }
    }
  },[]);

  useEffect(() => {
    let observer;
    let thresholdSet = [];

    for (let i = 0; i <= 1.0; i += 0.01) {
      thresholdSet.push(i);
    }

    if(element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: thresholdSet })
      observer.observe(element.current.parentNode);
    }

    return () => observer && observer.disconnect();

  }, [onScroll]);

  return {
    ref: element
  }
}

export default useScrollCalc;
