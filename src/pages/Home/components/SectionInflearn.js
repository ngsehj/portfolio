import { useHoverOffset, useScrollHorizontal } from "../../../hooks";

const SectionInflearn = () => {
  const { targetRef } = useHoverOffset();
  const { sectionRef, sliderRef, sectionHeight } = useScrollHorizontal();
  const items = [
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn01.png`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn02.jpg`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn03.gif`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn04.png`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn05.jpg`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn06.png`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
    { 
      title: '',
      img: process.env.PUBLIC_URL + `img/inflearn07.png`,
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767'
    },
  ];

  return (
    <section 
      className="section section__inflearn section__horizontal"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      <div className="section__sticky">
        <div className="slider__wrap">
          <div className="slider" ref={sliderRef}>
            {items.map((item, idx) => (
              <a 
                className="slide"
                target="_blank"
                rel="noreferrer"
                href={item.url} 
                key={idx} 
                ref={(el) => (targetRef.current[idx] = el)}
              >
                <img src={item.img} alt="인프런 썸네일" />
                <div className="hoverbox">
                  <strong>{item.title}</strong>
                </div>
                <span className="hover"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionInflearn;

