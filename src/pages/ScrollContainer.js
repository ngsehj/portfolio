import React, { useCallback, useEffect, useRef, useState } from 'react';
import SectionIntro from '../components/index/SectionIntro';
export const ScrollDataContext = React.createContext();
// export const ScrollPageContext = React.createContext();

const scrollParent = window || HTMLElement;

const initScrollData = {
  currentY: 0, // window.pageYOffset
  viewportHeight: 0,
  totalPage: 0,
  totalHeight: 0,
  totalProgress: 0,
  realPage: 0,
  currentPage: 0,
  currentProgress: 0,
}

const ScrollContainer = () => {
  const pageRef = useRef([]);
  const [scrollData, setScrollData] = useState(initScrollData);

  const scrollEvent = useCallback (() => {
    const currentY = scrollParent.pageYOffset,
          viewportHeight = scrollParent.innerHeight,
          totalPage = pageRef.current.length,
          totalHeight = scrollData.totalPage * scrollData.viewportHeight,
          totalProgress = scrollData.currentY / scrollData.totalHeight,
          realPage = scrollData.currentY / scrollData.totalHeight,
          currentPage = scrollData.currentY / scrollData.viewportHeight,
          currentProgress = scrollData.realPage - scrollData.currentPage

    setScrollData({
      ...scrollData,
      currentY,
      viewportHeight,
      totalPage,
      totalHeight,
      totalProgress,
      realPage,
      currentPage,
      currentProgress
    });

    setTimeout(() => {
      const newCurrentPage = Math.round(realPage);
      let newCurrentY = currentY;

      if (Math.abs(newCurrentPage - realPage) < 0.3)
        newCurrentY = newCurrentPage * viewportHeight;

      if (newCurrentY !== currentY)
        window.scrollTo({
          top: newCurrentY,
          behavior: "smooth",
        });
    }, 50);

  }, [scrollParent, setScrollData]);

  useEffect(() => {
    if (scrollParent) {
      scrollEvent();

      scrollParent.addEventListener('scroll', scrollEvent);
      scrollParent.addEventListener('resize', scrollEvent);
    }
  }, [scrollEvent, scrollParent]);

  return (
    <ScrollDataContext.Provider value={scrollData}>

      <SectionIntro ref={(el) => (pageRef.current[0] = el)} />

      <section className="section" ref={(el) => (pageRef.current[1] = el)}>
        <div className="section__desc">
          <p><strong>보통 스크롤 영역</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
        </div>
      </section>

      <section className="section" ref={(el) => (pageRef.current[2] = el)}>
        <div className="section__desc">
          <p><strong>Retina 머그</strong>아이디어를 광활하게 펼칠 아름답고 부드러운 음료 공간.</p>
        </div>

        <canvas className="image-blend"></canvas>

        <div className="section__desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
        </div>
      </section>

    </ScrollDataContext.Provider>
  )
}

export default ScrollContainer;