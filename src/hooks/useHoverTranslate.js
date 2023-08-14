import { useCallback, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const useHoverTranslate = () => {
  const element = useRef();

  const handleMouseenter = useCallback(e => {
    const current = element.current;
    const threshold = 15;
    const { offsetX, offsetY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const horizontal = (clientWidth - offsetX) / clientWidth;
    const vertical = (clientHeight - offsetY) / clientHeight;
    const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
    const rotateY = (vertical * threshold - threshold / 2).toFixed(2);
    current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }, []);

  const handleMouseleave = useCallback(e => {
    const { current } = element;
    current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }, []);

  useEffect(() => {
    if (!isMobile && element.current) {
      const target = element.current;
      target.addEventListener('mousemove', handleMouseenter);
      target.addEventListener('mouseleave', handleMouseleave);
      return () => {
        target.removeEventListener('mousemove', handleMouseenter);
        target.removeEventListener('mouseleave', handleMouseleave);
      };
    }
  }, [handleMouseenter, handleMouseleave]);

  return {
    ref: element,
  };
};

export default useHoverTranslate;
