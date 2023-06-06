import React, { useState, useEffect, useMemo, useContext } from 'react';
import { throttle } from 'lodash';
import { GlobalDataContext } from '../App';
// import { ScrollDataContext {}

const TopButton = () => {
  const { viewportHeight } = useContext(GlobalDataContext);
  const [showButton, setShowButton] = useState(false);
  
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > viewportHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }, 100),
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
      behavior: 'smooth'
    })
  }

  return showButton && (
    <div className="scroll__container">
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