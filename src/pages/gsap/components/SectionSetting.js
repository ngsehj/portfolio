import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionSetting = () => {
  const wrapperRef = useRef();
  const pinRef = useRef();
  const sectionRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pinRef.current, {
        color: '#fff',
        backgroundColor: '#58b0ba',
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          // end: wrapperRef.current.offsetH/eight,
          pin: true,
          pinSpacing: false,
        },
      });
    }, pinRef);

    return () => ctx.revert();
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundColor: '#fff',
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: 'bottom bottom',
        },
      });
    }, sectionRef);

    gsap.utils.toArray('.is-show').forEach(item => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
          end: () => `+=${item.offsetHeight}`,
        },
      });
    });

    return () => ctx.revert();
  });

  return (
    <div ref={wrapperRef}>
      <section className="gsap-section gsap-section-heading" ref={pinRef}>
        <strong className="heading">Create React App</strong>
      </section>
      <section className="gsap-section gsap-section-setting" ref={sectionRef}>
        <strong className="gsap-heading is-show">Setting</strong>
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
        <div className="is-show">
          <p className="gsap-heading-sub">1. React portal을 사용했습니다.</p>
          <p className="gsap-text">React portal을 사용하여 Modal component를 부모 컴포넌트 바깥으로 렌더링 해주었습니다.</p>
          <div className="image">
            <img src="https://ngsehj.github.io/portfolio/img/code-modal01.jpg" alt="react modal component code" />
          </div>
        </div>

        <div className="is-show">
          <p className="gsap-heading-sub">2. Modal component의 접근성을 높였습니다.</p>
          <br />
          <p className="gsap-heading-sub">Attributes</p>
          <ul className="gsap-text__list">
            <li>- ARIA Attributes 설정</li>
            <li>- role="dialog" : 모달의 역할을 명시</li>
            <li>- tabIndex="0" : 기본적으로 focus를 받을 수 없는 요소에 받을 수 있게 처리</li>
          </ul>
          <div className="image">
            <img src="https://ngsehj.github.io/portfolio/img/code-modal02.jpg" alt="react modal component code" />
          </div>
        </div>
        <div className="is-show">
          <strong className="gsap-heading-sub">focus</strong>
          <ul className="gsap-text__list">
            <li>- 모달을 열었을 때 모달 컴포넌트로 포커스 설정</li>
            <li>- 모달을 닫았을 때 focus를 모달을 열었던 버튼으로 설정</li>
            <li>- 모달 컴포넌트에서 shitf + tab 눌렀을 때 닫기 버튼 포커스로 이동</li>
            <li>- tab키로 모달 내부 탐색 순환</li>
          </ul>
          <div className="image">
            <img src="https://ngsehj.github.io/portfolio/img/code-modal03.jpg" alt="react modal component code" />
          </div>
        </div>
        <div className="is-show">
          <strong className="gsap-heading-sub">keydown</strong>
          <ul className="gsap-text__list">
            <li>- button, a요소를 두고 ENTER키 또는 SPACE키를 누를 경우 각각의 요소에 등록된 클릭 이벤트 핸들러가 실행되지만, 그 외 요소에는 keydown 이벤트 추가하여 모달이 열리게 구현</li>
            <li>- ESC 키를 누르면 모달이 닫힘</li>
          </ul>
          <div className="image">
            <img src="https://ngsehj.github.io/portfolio/img/code-modal04.jpg" alt="react modal component code" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSetting;
