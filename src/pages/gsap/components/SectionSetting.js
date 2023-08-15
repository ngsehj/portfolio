import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const SectionSetting = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const pinRef = useRef();
  const headingRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        color: '#fff',
        backgroundColor: '#58b0ba',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        },
      });
    }, sectionRef);

    gsap.utils.toArray('.is-show').forEach(item => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section-gsap section-heading" ref={sectionRef}>
        <strong className="heading">Create React App</strong>
      </section>
      <section className="section-gsap section-setting" ref={pinRef}>
        <strong className="heading-gsap is-show" ref={headingRef}>
          Setting
        </strong>
        <ul className="setting__list is-show">
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
        <strong className="heading-gsap is-show">Directory</strong>
        <div className="folder is-show">
          <h4 className="heading-folder">📂 public</h4>
          <ul className="folder__list">
            <li>📁 img : 이미지 파일이 위치한 폴더</li>
          </ul>
          <h4 className="heading-folder">📂 src</h4>
          <ul className="folder__list">
            <li>📁 components : 재사용 가능한 모듈 및 레이아웃 컴포넌트들이 위치한 폴더</li>
            <li>📁 hooks : 커스텀 훅이 위치한 폴더</li>
            <li>📁 pages : 라우터 페이지 단위의 컴포넌트 폴더로 구성된 폴더</li>
            <li>📁 styles : scss 파일들이 위치한 폴더</li>
          </ul>
        </div>

        <strong className="heading-gsap is-show">Modal Component</strong>
        <p className="text-gsap is-show">Portal을 사용하여 Modal component를 부모 컴포넌트 바깥으로 렌더링 해주었습니다.</p>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal01.jpg" alt="react modal component code" />
        <br />
        <br />
        <p className="text-gsap is-show">Modal의 웹 접근성을 고려했습니다.</p>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal02.jpg" alt="react modal component code" />
      </section>
    </>
  );
};

export default SectionSetting;
