import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'no', duration = 1, delay = 0, value = '100%') => {
  const element = useRef();

  const handleDirection = name => {
    switch (name) {
      case 'no':
        return 'translate3d(0, 0, 0)';
      case 'up':
        return `translate3d(0, ${value}, 0)`;
      case 'down':
        return `translate3d(0, -${value}, 0)`;
      case 'left':
        return `translate3d(${value}, 0, 0)`;
      case 'right':
        return `translate3d(-${value}, 0, 0)`;
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0.175, 0.885, 0.32, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration],
  );

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
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
