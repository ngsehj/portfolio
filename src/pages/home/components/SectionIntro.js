import React, { useContext } from 'react';
import { useScrollCalc, useScrollFadeIn, useScrollTranslate } from 'hooks';
import { ScrollPageContext } from 'pages/home/Home';
import RotateCircleButton from 'components/RotateCircleButton';

const SectionIntro = () => {
  const text = ['꾸준히 성장하는', '웹 퍼블리셔 이야기', 'Web Publisher Portfolio'];
  const animatedElement = {
    circle: useScrollCalc('scale', { start: 0.1, end: 1.1 }),
    heading: useScrollCalc('opacity', { start: 2, end: 0 }),
    bg: useScrollFadeIn('no', 1, 0.2),
    0: useScrollTranslate(1, 0.5),
    1: useScrollTranslate(1, 0.6),
    2: useScrollTranslate(1, 0.7),
  };

  const scrollPageContext = useContext(ScrollPageContext);
  const handleClick = () => {
    scrollPageContext.sectionWorkRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="section section__intro" {...animatedElement.bg}>
      <RotateCircleButton text="Go portfolio * Go Portfolio * Go Portfolio * * * * * * " handleClick={handleClick} />
      <div className="intro-bg">
        <span className="box" />
      </div>
      <span className="intro-circle" {...animatedElement.circle} />
      <h1 className="intro-heading" {...animatedElement.heading}>
        {text.map((item, idx) => (
          <div className="inner" key={idx}>
            <span className={`heading${idx}`} {...animatedElement[idx]} key={item}>
              {item}
            </span>
          </div>
        ))}
      </h1>
    </section>
  );
};

export default SectionIntro;
