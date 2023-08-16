import { Elastic, Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
const SectionIntro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let tl = gsap.timeline({ paused: false });
    tl.to('.image', { y: 0, opacity: 0.3, scale: 0.6, ease: Power3, duration: 0.7, delay: 0.5 });
    tl.to('.type', { y: -20, opacity: 1, ease: Elastic });
    tl.to('.heading', { y: -20, opacity: 1, ease: Elastic }, '-=0.3');
    tl.to('dl', { y: -100, opacity: 1, ease: Elastic }, '<');

    let ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundColor: '#fcfaf8',
        color: '#222',
        scrollTrigger: {
          duration: 2,
          scrub: 2,
          start: sectionRef.current.offsetHeight * 0.1,
          end: sectionRef.current.offsetHeight * 0.15,
        },
      });
      ScrollTrigger.create({
        // trigger: sectionRef.current,
        // end: sectionRef.current.offsetHeight * 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gsap-section gsap-section-intro" ref={sectionRef}>
      <div className="intro__heading">
        <span className="type">React</span>
        <h2 className="heading">Portfolio</h2>
        <div className="image">
          {isMobile ? <img src="https://ngsehj.github.io/portfolio/img/bg-intro-m.jpg" alt="portfolio" /> : <img src="https://ngsehj.github.io/portfolio/img/bg-intro.jpg" alt="portfolio" />}
        </div>
      </div>
      <dl className="intro__inner">
        <dt>문서 및 버전</dt>
        <dd>HTML5, CSS3, SCSS, React</dd>
        <dt>웹 유형</dt>
        <dd>Responsive Web</dd>
        <dt>해상도</dt>
        <dd>Mobile : ~ 767 / Tablet : 768 ~ 1023 / Laptop: 1024 ~ 1279 / Desktop : 1280 ~</dd>
        <dt>에디터</dt>
        <dd>VScode</dd>
        <dt>배포</dt>
        <dd>Github Pages</dd>
        <dt>기간</dt>
        <dd>2023.07.17 ~ 2023.08.17</dd>
      </dl>
    </section>
  );
};
export default SectionIntro;
