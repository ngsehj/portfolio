import { Elastic, Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
const SectionIntro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let tl = gsap.timeline({ paused: false });
    tl.to('.image', { y: 0, opacity: 1, scale: 0.5, ease: Power3, duration: 0.7, delay: 0.5 });
    tl.to('.type', { y: -20, opacity: 1, ease: Elastic });
    tl.to('.heading', { y: -20, opacity: 1, ease: Elastic }, '-=0.3');
    tl.to('dl', { y: -150, opacity: 1, ease: Elastic, duration: 0.7 });

    let ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundColor: '#fff',
        color: '#222',
        scrollTrigger: {
          duration: 2,
          scrub: 2,
          start: sectionRef.current.offsetHeight * 0.1,
          end: sectionRef.current.offsetHeight * 0.15,
        },
      });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        end: sectionRef.current.offsetHeight * 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="section-gsap section-gsap-intro" ref={sectionRef}>
      <div className="intro__heading">
        <span className="type">Responsive Web</span>
        <h2 className="heading">포트폴리오</h2>
        <div className="image">
          {isMobile ? <img src="https://ngsehj.github.io/portfolio/img/bg-intro-m.jpg" alt="portfolio" /> : <img src="https://ngsehj.github.io/portfolio/img/bg-intro.jpg" alt="portfolio" />}
        </div>
      </div>
      <dl>
        <dt>기간</dt>
        <dd>2023.07.17 ~ 2023.08.17</dd>
        <dt>기술</dt>
        <dd>React, HTML, SCSS, JavaScript</dd>
        <dt>에디터</dt>
        <dd>VScode</dd>
        <dt>배포</dt>
        <dd>Github Pages</dd>
      </dl>
    </section>
  );
};
export default SectionIntro;
