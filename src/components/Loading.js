import { useRef } from "react";

const SpinerItem = () => {
  const result = [];

  for (let i = 0; i <= 12; i ++) {
    result.push(<span></span>);
  }

  return result;
}

const Loading = () =>  {
  const loadingRef = useRef();

  window.addEventListener('load', () => {
    // loadingRef.current.style.display = 'none';
    loadingRef.current.remove();
  });

  return (
    <div className="loading" ref={loadingRef}>
      <div className="loading-spinner">
        <SpinerItem />
      </div>
    </div>
  )
}

export default Loading;