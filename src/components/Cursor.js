import React, { useContext, useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../pages/Home/Home";

const Cursor = () => {
  // if (isTouchDevice) {
  //   return null;
  // }

  const { clientX, clientY } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [cursor] = useContext(CursorContext);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        mixBlendMode: 'difference'
      }}
    >
      <span
        style={{
          display: 'inline-block',
          position: 'absolute',
          pointerEvents: 'none',
          left: clientX,
          top: clientY,
          width: '60px',
          height: '60px',
          transform: `translate(-50%, -50%)`,
          backgroundColor: 'pink',
          transition: 'transform .2 ease-in-out',
          borderRadius: '50%'
        }} 
      >

      </span>
      {/* <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          fill: cursor.active ? "rgba(255,255,255,.5)" : "black",
          transition: "transform .2s ease-in-out",
          // TODO: extra check on clientX needed here 
          // because mouseleave event not always firing
          // when slowly exiting left side of browser
          // opacity: isVisible && clientX > 1 ? 1 : 0,
          opacity: 1
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
          fill="red"
        />
      </svg> */}
    </div>
  )
}

export default Cursor;