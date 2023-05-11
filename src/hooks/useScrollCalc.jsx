import { useRef, useCallback, useEffect } from 'react';

const useScrollCalc = (type='opacity', fixed=false, values, threshold) => {
  const element = useRef();

  let thresholdSet = [];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSet.push(i);
  }

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    let ratio = entry.intersectionRatio;
    let value = values.start + ((values.end - values.start) * ratio);
    // let value = ratio * (values.end + values.start) + values.start;
    let valuePct = value * 100;

    console.log(value)

    if(ratio) {
      switch(type) {
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
          if(ratio <= 0.5) current.style.transform = `translate3d(${valuePct}%, 0, 0)`;
          break;
        case 'right': 
          current.style.textAlign = 'right';
          if(ratio <= 0.5) current.style.transform = `translate3d(${valuePct * -10}px, 0, 0)`;
          break;
        default: 
          return;
      }
    }

    // if(ratio < 0.9 && fixed) {
    //   current.classList.add('is-fixed')
    // } else {
    //   current.classList.remove('is-fixed')
    // }
  },[]);

  useEffect(() => {
    let observer;

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
