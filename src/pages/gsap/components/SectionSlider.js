import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const SectionSlider = () => {
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      let panels = gsap.utils.toArray('.section-gsap-slider .panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          // snap: 1 / (panels.length - 1),
          start: `top+=${pixelsPause} top`,
          end: () => '+=' + window.innerWidth * panels.length,
          markers: { startColor: 'fuchsia', endColor: 'fuchsia', indent: 200 },
        },
      });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        end: () => '+=' + (window.innerWidth * panels.length + pixelsPause),
        markers: true,
        pin: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section className="sectio-gsap section-gsap-slider" ref={sectionRef}>
      <div className="panel">
        <strong className="heading">Create React App</strong>
      </div>
      <div className="panel">
        <strong className="heading-sub">Setting</strong>
        <ul className="list">
          <li>
            <p>CRA로 프로젝트 생성하기</p>
            <div className="box">npx create-react-app portfolio</div>
          </li>
          <li>
            <p>절대 경로 및 gitignore 파일 설정</p>
            <div className="box">jsconfig.json 및 .gitignore</div>
          </li>
          <li>
            <p>react-router-dom 설치</p>
            <div className="box">npm install --save react-router-dom</div>
          </li>
          <li>
            <p>SASS 설치</p>
            <div className="box">npm install --save node-sass</div>
          </li>
          <li>
            <p>eslint 와 prettier를 연동</p>
            <div className="box">npm i prettier eslint-config-prettier eslint-plugin-prettier -D</div>
          </li>
          <li>
            <p>react-device-detect 설치</p>
            <div className="box">npm install react-device-detect --save</div>
          </li>
          <li>
            <p>react-lazy-load-image-component 설치</p>
            <div className="box">npm i --save react-lazy-load-image-component</div>
          </li>
        </ul>
      </div>
      <div className="panel">
        <strong className="heading-sub">Animation</strong>
      </div>
      <div className="panel">
        <strong className="heading-sub">Modal</strong>
      </div>
    </section>
  );
};

export default SectionSlider;
