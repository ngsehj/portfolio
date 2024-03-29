import React, { useCallback, useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const animateCursor = useCallback(
    time => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) * 0.3;
        coords.y += (endY.current - coords.y) * 0.3;
        cursorRef.current.style.top = coords.y + 'px';
        cursorRef.current.style.left = coords.x + 'px';
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateCursor);
    },
    [coords, requestRef],
  );

  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);
  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const onInit = useCallback(() => {
    cursorRef.current.style.opacity = 1;
  }, []);

  const onClickableMouseEnter = useCallback(() => {
    cursorRef.current.classList.add('is-clickable');
    setIsClickable(true);
  }, []);
  const onClickablMouseLeave = useCallback(() => {
    cursorRef.current.classList.remove('is-clickable');
    setIsClickable(false);
  }, []);

  useEffect(() => {
    document.body.addEventListener('mouseenter', onInit);
    return () => {
      document.body.removeEventListener('mouseenter', onInit);
    };
  });

  // 브라우저 화면 바깥으로 나가면 커서 사라짐
  useEffect(() => {
    if (isVisible) {
      cursorRef.current.style.opacity = 1;
    } else {
      cursorRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateCursor]);

  useEffect(() => {
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mousemove', onMouseMove);
    return () => {
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseEnter, onMouseLeave, onMouseMove]);

  useEffect(() => {
    const clickables = document.querySelectorAll('.cursor-clickable');
    clickables.forEach(el => {
      el.addEventListener('mouseover', onClickableMouseEnter);
      el.addEventListener('mouseleave', onClickablMouseLeave);
    });
    return () => {
      clickables.forEach(el => {
        el.removeEventListener('mouseover', onClickableMouseEnter);
        el.removeEventListener('mouseleave', onClickablMouseLeave);
      });
    };
  }, [isClickable, onClickableMouseEnter, onClickablMouseLeave]);

  return <div className="cursor" ref={cursorRef} />;
};

export default Cursor;
