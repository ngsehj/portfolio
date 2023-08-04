import React, { useState, useEffect, useMemo, useContext } from 'react';
import { throttle } from 'lodash';
import { GlobalDataContext } from '../App';

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
    [viewportHeight],
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
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button className="btn-top" style={Object.assign({}, styles.button)} onClick={scrollToTop} type="button">
        Top
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
  },
};

export default TopButton;
