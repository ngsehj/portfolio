import { useEffect, useState } from 'react';
import { useScrollCount } from 'hooks';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);
  const animatedItem = useScrollCount(100, 0, 1000);

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden;`;
    window.setTimeout(() => {
      setShowLoading(false);
      document.body.style.cssText = `overflow: '';`;
    }, 2500);

    return () => {
      document.body.style.cssText = `overflow: '';`;
    };
  }, []);

  return (
    showLoading && (
      <div className="loading-count">
        <div className="box">
          <p className="text">Web_Publisher_LeeHyejin_Portfolio.jsx</p>
          <span className="text" {...animatedItem} />
          <span className="text">%</span>
          <div className="progress"></div>
        </div>
      </div>
    )
  );
};

export default Loading;
