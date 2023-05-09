import { forwardRef, useContext, useEffect } from "react";
import { ScrollDataContext } from "../../pages/ScrollContainer";

const SectionIntro = forwardRef((props, ref) => {
  const { currentY, viewportHeight } = useContext(ScrollDataContext);

  useEffect(() => {
    console.log(ref);


    window.addEventListener('scroll', () => {
    });
  }, [])

  const textContent = [
    { text: "message 111" },
    { text: "message 222" },
    { text: "message 333" },
    { text: "message 444" },
  ]

  return (
    <section className="section" ref={ref} style={{height: `${viewportHeight * 5}px`}}>
      <div className="section__heading" style={{color: 'red', opacity: `${1 - (currentY / viewportHeight)}`}}>
        <h1 className="heading">Hello World</h1>
      </div>
      <div className="section__bg is-fixed">
        <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
      </div>

      {textContent.map((item, idx) => (
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
});


//   
// })

export default SectionIntro;