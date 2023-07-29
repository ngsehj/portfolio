import { useRef, useCallback, useEffect } from 'react';

const useScrollCalc = (type = 'opacity', values, calcYtoTop = false) => {
  const element = useRef();

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      // let ratio = entry.intersectionRatio;
      let currentY = entry.boundingClientRect.height - entry.boundingClientRect.top;
      let totalY = entry.boundingClientRect.height * 2;
      let ratio = currentY / totalY;
      let value = ratio * (values.end - values.start) + values.start;
      let valuePct = value * 100;
      let calcY = calcYtoTop ? entry.boundingClientRect.top >= 0 : ratio >= 0 && ratio <= 1; // Y 계산 = top이 0일때 까지 계산 : 전체 계산

      if (entry.isIntersecting) {
        if (calcY) {
          switch (type) {
            case 'scale':
              current.style.transform = `scale(${value})`;
              break;
            case 'width':
              current.style.width = `${valuePct}%`;
              break;
            case 'opacity':
              current.style.opacity = value;
              break;
            case 'up':
              current.style.transform = `translate3d(0, -${valuePct}%, 0)`;
              break;
            case 'left':
              current.style.transform = `translate3d(${valuePct}%, 0, 0)`;
              break;
            case 'right':
              current.style.transform = `translate3d(-${valuePct}%, 0, 0)`;
              break;
            default:
              return;
          }
        }
      }
    },
    [type, calcYtoTop, values],
  );

  useEffect(() => {
    let observer;
    let thresholdSet = [];

    for (let i = 0; i <= 1.0; i += 0.01) {
      thresholdSet.push(i);
    }

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: thresholdSet });
      observer.observe(element.current.parentNode);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCalc;
