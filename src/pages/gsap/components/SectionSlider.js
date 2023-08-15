import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const SectionSlider = () => {
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      let panels = gsap.utils.toArray('.section-slider .panel');

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
    <section className="section-gsap section-slider" ref={sectionRef}>
      <div className="panel">
        <strong className="heading">Animation</strong>
      </div>
      <div className="panel">
        <strong className="heading-sub">React Custom Hooks</strong>
        <p class="text-gsap">React Custom Hook으로 스크롤과 마우스 애니메이션을 재사용 가능하게 만들었습니다.</p>
        <a className="link" href="https://github.com/jus0k/scroll-hooks" target="_blank" rel="noreferrer">
          참고자료
        </a>
        <img src="https://ngsehj.github.io/portfolio/img/inflearn03.gif" alt="인프런 썸네일" />
      </div>
      <div className="panel">
        <strong className="heading-sub">GSAP</strong>
        <p className="text-gsap">GSAP ScrollTrigger, Timeline을 사용하여 애니메이션을 구현했습니다.</p>
        <img src="https://ngsehj.github.io/portfolio/img/inflearn03.gif" alt="인프런 썸네일" />
      </div>
    </section>
  );
};

export default SectionSlider;
