import { useCallback, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const useHoverOffset = () => {
  const element = useRef();

  const handleMouseenter = useCallback(e => {
    const hover = element.current.querySelector('.hover');
    // const hover = e.target.querySelector('.hover'); 위와 동일
    if (hover) {
      const pos = { x: e.offsetX, y: e.offsetY };
      hover.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(100)`;
    }
  }, []);

  const handleMouseleave = useCallback(e => {
    const hover = e.target.querySelector('.hover');
    if (hover) {
      const pos = { x: e.offsetX, y: e.offsetY };
      hover.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(0.1)`;
    }
  }, []);

  useEffect(() => {
    if (!isMobile && element.current) {
      const target = element.current;
      target.addEventListener('mouseenter', handleMouseenter);
      target.addEventListener('mouseleave', handleMouseleave);
      return () => {
        target.removeEventListener('mouseenter', handleMouseenter);
        target.removeEventListener('mouseleave', handleMouseleave);
      };
    }
  }, [handleMouseenter, handleMouseleave]);

  return {
    ref: element,
  };
};

export default useHoverOffset;
