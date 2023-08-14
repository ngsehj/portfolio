import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import SectionIntro from 'pages/gsap/components/SectionIntro';
import SectionSlider from './components/SectionSlider';

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const component = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.lastContainer .panel').forEach(panel => {
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            pin: true,
            pinSpacing: false,
          },
        });
      });
    }, component);
    return () => ctx.revert();
  });

  useEffect(() => {
    document.body.classList.add('l-page-sub');
    return () => {
      document.body.classList.remove('l-page-sub');
    };
  }, []);

  return (
    <article className="portfolio-detail" ref={component}>
      <SectionIntro />
      <SectionSlider />
      <section className="section section-info">
        <h1>Color</h1>
      </section>

      {/* <div className="lastContainer">
        <div className="description panel blue">
          <div>
            Mouseover Animation Hooks
            <div className="scroll-down" />
          </div>
        </div>
        <div className="panel red">cursor</div>
        <div className="panel orange">useHoverOffset</div>
        <div className="panel purple">useHoverTranslate</div>
      </div> */}
      <section className="section section-info">
        <h2>Typography</h2>
      </section>
    </article>
  );
};

export default Gsap;
