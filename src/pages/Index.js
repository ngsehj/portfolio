import React, { useEffect, useRef, useState, useMemo } from 'react';

import { throttle } from 'lodash';



const Index = () => {
  const sectionRef = useRef([]);

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        console.log('스크롤 이벤트');
        // if (!tabSelectorRef.current) return;
        // const nextTabnavOn = window.scrollY > tabSelectorRef.current.offsetTop + 100;
        // if (nextTabnavOn !== isTabnavOn) setIsTabnavOn(nextTabnavOn);
      }, 300),
    []
  );
  
  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]); // 여기에 throttledScroll 대신 isTabnavon을 넣어줘도 정상작동한다

  useEffect(() => {
    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollH = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
    let currentSection = 0; // 현재 활성화된 section
    let enterNewSection = false; // 새 섹션이 시작되는 순간

    const sectionInfo = [
      {
        id: 0,
        type: 'sticky',
        heightNum: 5,
        scrollH: 0,
        objs: {
          container: document.querySelectorAll('.section')[0]
        }
      },
      {
        id: 1,
        type: 'normal',
        heightNum: 2,
        scrollH: 0,
        objs: {
          container: document.querySelectorAll('.section')[1]
        }
      },
      {
        id: 2,
        type: 'sticky',
        heightNum: 5,
        scrollH: 0,
        objs: {
          container: document.querySelectorAll('.section')[2]
        }
      }
    ];

    function setSectionH() {
      // 각 스크롤 높이값 세팅
      for (let i = 0; i < sectionInfo.length; i++) {
        sectionInfo[i].scrollH = sectionInfo[i].heightNum * window.innerHeight;
        sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollH}px`;
      }
    }

    function scrollLoop() {
      enterNewSection = false;
      prevScrollH = 0; // reset

      for (let i = 0; i < currentSection; i++) {
        prevScrollH += sectionInfo[i].scrollH;
      }

      if (yOffset > prevScrollH + sectionInfo[currentSection].scrollH) {
        enterNewSection = true;
        currentSection++;
      }

      if (yOffset < prevScrollH) {
        if (currentSection === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지 (모바일)
        enterNewSection = true;
        currentSection--;
      }

      sectionInfo.forEach((sec) => sec.objs.container.classList.remove('is-active'));
      sectionInfo[currentSection].objs.container.classList.add('is-active');
      document.body.setAttribute('class', `is-active-section-${currentSection}`);

      if (enterNewSection) return;
    }

    function calcAnimation(values, currentYOffset) {
      let rv;
      let scrollRatio = currentYOffset / sectionInfo[currentSection].scrollH; // 현재 섹션에서 스크롤된 범위를 비율로 구하기

      rv = scrollRatio * (values[1] - values[0]) + values[1];

      return rv;
    }

    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });

    window.addEventListener('load', () => {
      setSectionH();
      scrollLoop();
    });

    window.addEventListener('resize', setSectionH);
  }, []);

  return (
    <div className="container">
      
      <section className="section" ref={(el) => (sectionRef.current[0] = el)}>
        <div className="section__heading">
          <h1 className="heading">Hello World</h1>
        </div>
        <div className="section__bg is-fixed">
          <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
        </div>
        <div className="section__text is-fixed">
          <p>message 111</p>
        </div>
        <div className="section__text is-fixed">
          <p>message 222</p>
        </div>
        <div className="section__text is-fixed">
          <p>message 333</p>
        </div>
        <div className="section__text is-fixed">
          <p>message 444</p>
        </div>
      </section>

      <section className="section" ref={(el) => (sectionRef.current[1] = el)}>
        <div className="section__desc">
          <p><strong>보통 스크롤 영역</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
        </div>
      </section>

      <section className="section" ref={(el) => (sectionRef.current[1] = el)}>
        <div className="section__desc">
          <p><strong>Retina 머그</strong>아이디어를 광활하게 펼칠 아름답고 부드러운 음료 공간.</p>
        </div>

        <canvas className="image-blend"></canvas>

        <div className="section__desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
        </div>
      </section>

    </div>
  )
}

export default Index;