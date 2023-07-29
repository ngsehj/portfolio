import { useRef, useEffect, useCallback } from 'react';

const useScrollAddClass = () => {
  const element = useRef();

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.classList.add('is-active');
    }
  }, []);

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollAddClass;
