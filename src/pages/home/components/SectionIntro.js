import React, { useContext } from 'react';
import { useHoverTranslate, useScrollCalc, useScrollTranslate } from 'hooks';
import { ScrollPageContext } from 'pages/home/Home';
import RotateCircleButton from 'components/RotateCircleButton';

const SectionIntro = () => {
  const text = ['꾸준히 성장하는', '웹 퍼블리셔 이야기', 'Web Publisher', 'Portfolio'];
  const animatedElement = {
    heading: useScrollCalc('opacity', { start: 3, end: -1 }),
    inner: useHoverTranslate(),
    0: useScrollTranslate(1, 0.4),
    1: useScrollTranslate(1, 0.5),
    2: useScrollTranslate(1, 0.6),
    3: useScrollTranslate(1, 0.7),
  };

  const scrollPageContext = useContext(ScrollPageContext);
  const handleClick = () => {
    scrollPageContext.sectionWorkRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="section section-intro">
      <RotateCircleButton text="Go portfolio * Go Portfolio * Go Portfolio * * * * * * " handleClick={handleClick} />
      <div className="section__inner uht-hover" {...animatedElement.inner}>
        <h1 className="intro__heading" {...animatedElement.heading}>
          {text.map((item, idx) => (
            <div className="inner" key={idx}>
              <span className={`heading${idx}`} {...animatedElement[idx]} key={item}>
                {item}
              </span>
            </div>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default SectionIntro;
