import { useContext, useEffect } from "react";
import { ScrollDataContext } from "../Home";

const SectionIntro = () => {
  const { currentY, viewportHeight } = useContext(ScrollDataContext);
  const pageHeight = viewportHeight * 5;

  useEffect(() => {
    window.addEventListener('scroll', () => {
    });
  }, [])

  const text = [
    { text: "message 111" },
    { text: "message 222" },
    { text: "message 333" },
    { text: "message 444" },
  ]

  return (
    <section className="section" style={{height: `${pageHeight}px`}}>
      <div className="section__heading" style={{color: 'violet', opacity: `${1 - (currentY / viewportHeight)}`}}>
        <h1 className="heading">Hello World</h1>
      </div>
      <div className="section__bg is-fixed">
        <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
      </div>

      {text.map((item, idx) => (
        <div 
          className="section__text is-fixed" 
          style={{ height: `${viewportHeight}px`}}
          key={idx}
        >
          {item.text}
        </div>
      ))}
    </section>
  )
};

export default SectionIntro;