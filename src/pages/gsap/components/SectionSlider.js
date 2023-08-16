import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const SectionSlider = () => {
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      let panels = gsap.utils.toArray('.gsap-section-slider .panel');

      gsap.to(panels[0], {
        color: '#fff',
        backgroundColor: '#58b0ba',
        scrollTrigger: {
          trigger: panels[0],
          start: 'bottom bottom',
        },
      });

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: `top+=${pixelsPause} top`,
          end: () => '+=' + window.innerWidth * panels.length,
          // markers: { startColor: 'fuchsia', endColor: 'fuchsia', indent: 200 },
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        backgroundColor: 'yellow',
        end: () => '+=' + (window.innerWidth * panels.length + pixelsPause),
        pin: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section className="gsap-section gsap-section-slider" ref={sectionRef}>
      <div className="panel">
        <strong className="heading">Animation</strong>
      </div>
      <div className="panel">
        <strong className="gsap-heading">React Custom Hooks</strong>
        <p className="gsap-text">
          React Custom Hook으로 스크롤과 마우스 애니메이션을 재사용 가능하게 만들었습니다.
          <a href="https://github.com/jus0k/scroll-hooks" target="_blank" rel="noreferrer">
            참고
          </a>
        </p>

        <img src="https://ngsehj.github.io/portfolio/img/code-modal05.jpg" alt="인프런 썸네일" />
      </div>
      <div className="panel">
        <strong className="gsap-heading">GSAP</strong>
        <p className="gsap-text">react-gsap를 적용후 ScrollTrigger, Timeline을 사용하여 애니메이션을 구현했습니다.</p>
        <img src="https://ngsehj.github.io/portfolio/img/code-modal05.jpg" alt="인프런 썸네일" />
      </div>
    </section>
  );
};

export default SectionSlider;
