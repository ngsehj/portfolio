import { useRef, useCallback, useEffect } from 'react';

const useScrollCalc = (type='opacity', values) => {
  const element = useRef();

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    let ratio = entry.intersectionRatio;
    let currentY = entry.intersectionRect.y; 
    let totalY = entry.boundingClientRect.height;
    let ratio2 = 1 - (currentY / totalY)
    let value = values.start + ((values.end - values.start) * ratio2);
    let valuePct = value * 100;
    // console.log(entry)

    if (entry.isIntersecting) {
      if (ratio) {
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
            current.style.transform = `translate3d(${valuePct}px, 0, 0)`;
            break;
          case 'right':
            current.style.textAlign = 'right';
            current.style.transform = `translate3d(-${valuePct}px, 0, 0)`;
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
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();

  }, [onScroll]);

  return {
    ref: element
  }
}

export default useScrollCalc;
