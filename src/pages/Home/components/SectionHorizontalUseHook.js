import { useEffect, useRef } from 'react';
import { useScrollHorizontal } from '../../../hooks';

const SectionHorizontalUseHook = () => {
  const { sectionRef, sliderRef, sectionHeight } = useScrollHorizontal();
  const slideRef = useRef([]);

  const items = [
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt1.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt2.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt3.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt4.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt5.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt6.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt7.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt8.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt9.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt10.png' },
    { img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt11.png' },
  ];

  const handleMouseenter = (e) => {
    const circle = e.target.querySelector('.circle');
    if (circle) {
      const pos = { x: e.offsetX, y: e.offsetY };
      circle.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(100)`;
    }
  };

  const handleMouseleave = (e) => {
    const circle = e.target.querySelector('.circle');
    console.log(circle)
    if (circle) {
      const pos = { x: e.offsetX, y: e.offsetY };
      circle.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(.1)`;
    }
  };

  useEffect(() => {
    const slideRefs = slideRef.current;
    slideRefs.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseenter);
      el.addEventListener('mouseleave', handleMouseleave);
    });

    return () => {
      slideRefs.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseenter);
        el.removeEventListener('mouseleave', handleMouseleave);
      });
    };
  }, []);

  return (
    <section className="section section__horizontal"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      <div className="section__sticky">
        <div className="slider__wrap">
          <div className="slider" ref={sliderRef}>
            {items.map((item, idx) => (
              <div className="slide" key={idx} ref={(el) => (slideRef.current[idx] = el)}>
                <img src={item.img} alt="kazuha" />
                <span className="circle"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHorizontalUseHook;