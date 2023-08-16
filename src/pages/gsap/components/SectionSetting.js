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
      <section className="gsap-section section-heading" ref={sectionRef}>
        <strong className="heading">Create React App</strong>
      </section>
      <section className="gsap-section section-setting" ref={pinRef}>
        <strong className="gsap-heading is-show" ref={headingRef}>
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
        <strong className="gsap-heading is-show">Directory</strong>
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

        <strong className="gsap-heading is-show">Modal Component</strong>
        <p className="gsap-heading-sub is-show">1. React portal을 사용했습니다.</p>
        <p className="gsap-text is-show">React portal을 사용하여 Modal component를 부모 컴포넌트 바깥으로 렌더링 해주었습니다.</p>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal01.jpg" alt="react modal component code" />

        <p className="gsap-heading-sub is-show">2. Modal component의 접근성을 높였습니다.</p>
        <p className="gsap-heading-sub is-show">Attributes</p>
        <ul className="gsap-text__list is-show">
          <li>- ARIA Attributes 설정</li>
          <li>- role="dialog" : 모달의 역할을 명시</li>
          <li>- tabIndex="0" : 기본적으로 focus를 받을 수 없는 요소에 받을 수 있게 처리</li>
        </ul>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal02.jpg" alt="react modal component code" />

        <strong className="gsap-heading-sub is-show">focus & keydown</strong>
        <ul className="gsap-text__list is-show">
          <li>- 모달을 열었을 때 모달 컴포넌트로 포커스 설정</li>
          <li>- 모달을 닫았을 때 focus를 모달을 열었던 버튼으로 설정</li>
        </ul>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal03.jpg" alt="react modal component code" />

        <ul className="gsap-text__list is-show">
          <li>- 모달 컴포넌트에서 shitf + tab 눌렀을 때 닫기 버튼 포커스로 이동</li>
          <li>- tab키로 모달 내부 탐색 순환</li>
        </ul>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal04.jpg" alt="react modal component code" />

        <p className="gsap-text is-show">ESC 키를 누르면 모달이 닫힘</p>
        <img className="is-show" src="https://ngsehj.github.io/portfolio/img/code-modal05.jpg" alt="react modal component code" />
      </section>
    </>
  );
};

export default SectionSetting;
