import { useCallback, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const useHoverOffset = () => {
  const targetRef = useRef([]);

  const handleMouseenter = useCallback(e => {
    const hover = e.target.querySelector('.hover');
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
    if (isMobile) return null;

    const targetRefs = targetRef.current;

    targetRefs.forEach(target => {
      target.addEventListener('mouseenter', handleMouseenter);
      target.addEventListener('mouseleave', handleMouseleave);
    });

    return () => {
      targetRefs.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseenter);
        target.removeEventListener('mouseleave', handleMouseleave);
      });
    };
  }, [handleMouseenter, handleMouseleave]);

  return { targetRef };
};

export default useHoverOffset;
