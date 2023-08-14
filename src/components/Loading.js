import { useEffect } from 'react';

const Loading = ({ loadingRef }) => {
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden;`;
    return () => {
      document.body.style.cssText = `overflow: '';`;
    };
  }, []);

  return (
    <div className="loading loading-rotation" ref={loadingRef}>
      <div className="loading__inner">
        <span className="loader">E_HYEJIN_P</span>
        <span className="loader">RTF</span>
        <span className="loader">LI</span>
        <span>.JSX</span>
      </div>
    </div>
  );
};

export default Loading;
