import { useScrollHorizontal } from '../../../hooks';
import { useHoverOffset } from '../../../hooks';

const SectionHorizontalUseHook = () => {
  const { targetRef } = useHoverOffset();
  const { sectionRef, sliderRef, sectionHeight } = useScrollHorizontal();

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

  return (
    <section className="section section__horizontal"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      <div className="section__sticky">
        <div className="slider__wrap">
          <div className="slider" ref={sliderRef}>
            {items.map((item, idx) => (
              <div className="slide" key={idx} ref={(el) => (targetRef.current[idx] = el)}>
                <img src={item.img} alt="Sanrio" />
                <span className="cursor"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHorizontalUseHook;