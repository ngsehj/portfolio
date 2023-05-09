import { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
  
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 500) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }, 300),
    []
  );
  
  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      // behavior: 'smooth'
    })
  }

  return showButton && (
    <div className="scroll__container" style={{height: "100px"}}>
      <button
        style={Object.assign({}, styles.button)} 
        onClick={scrollToTop} 
        type="button"
      >Top</button>
    </div>
  )
}

const styles = {
  button: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    color: '#fff',
    backgroundColor: '#333',
    border: 0,
    padding: '1rem',
  }
}

export default TopButton;