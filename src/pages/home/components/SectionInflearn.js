import { useHoverOffset, useScrollFadeIn, useScrollCalc } from 'hooks';

const MarqueeItem = () => {
  const result = [];
  for (let i = 0; i <= 5; i++) {
    result.push(
      <li key={i}>
        <span>Inflearn</span> <span>Certificate</span>
      </li>,
    );
  }
  return result;
};

const SectionInflearn = () => {
  const { targetRef } = useHoverOffset();
  const items = [
    {
      title: '만들면서 배우는 리액트 : 기초',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn01.png',
      url: 'https://www.inflearn.com/certificate/33336-328234-11759767',
    },
    {
      title: 'CSS Flex와 Grid 제대로 익히기',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn02.jpg',
      url: 'https://www.inflearn.com/certificate/33336-324748-10720397',
    },
    {
      title: '몇 줄로 끝내는 인터랙티브 웹 개발 노하우 [초급편]',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn08.gif',
      url: 'https://www.inflearn.com/certificate/33336-325641-10606627',
    },
    {
      title: '인터랙티브 개발 실무 끝장내기 [역량 강화편]',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn03.gif',
      url: 'https://www.inflearn.com/certificate/33336-326540-10574609',
    },
    {
      title: 'Vue.js 시작하기 - Age of Vue.js',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn04.png',
      url: 'https://www.inflearn.com/certificate/33336-324088-4499975',
    },
    {
      title: 'SVG 마스터',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn05.jpg',
      url: 'https://www.inflearn.com/certificate/33336-324138-2090137',
    },
    {
      title: '한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn06.png',
      url: 'https://www.inflearn.com/certificate/33336-328340-10948773',
    },
    {
      title: '빠르게 git - 핵심만 골라 배우는 Git/Github',
      img: 'https://ngsehj.github.io/portfolio/img/inflearn07.png',
      url: 'https://www.inflearn.com/certificate/33336-324744-11628501',
    },
  ];

  const animatedElement = {
    sticky: useScrollCalc('width', { start: -0.5, end: 2.55 }, true),
    inflearn0: useScrollFadeIn('left', 1, 0, '15rem'),
    inflearn1: useScrollFadeIn('right', 1, 0, '15rem'),
    inflearn2: useScrollFadeIn('left', 1, 0, '15rem'),
    inflearn3: useScrollFadeIn('right', 1, 0, '15rem'),
    inflearn4: useScrollFadeIn('left', 1, 0, '15rem'),
    inflearn5: useScrollFadeIn('right', 1, 0, '15rem'),
    inflearn6: useScrollFadeIn('left', 1, 0, '15rem'),
    inflearn7: useScrollFadeIn('right', 1, 0, '15rem'),
  };

  return (
    <section className="section section-inflearn">
      <div className="section__inner" {...animatedElement.sticky}>
        <div className="inflearn__bg">
          <div className="marquee">
            <ul>
              <MarqueeItem />
            </ul>
            <ul>
              <MarqueeItem />
            </ul>
          </div>
          <div className="marquee is-reverse">
            <ul>
              <MarqueeItem />
            </ul>
            <ul>
              <MarqueeItem />
            </ul>
          </div>
        </div>

        <ul className="inflearn__list">
          {items.map((item, idx) => (
            <li className="inflearn__item cursor-clickable" key={idx} {...animatedElement[`inflearn${idx}`]}>
              <a target="_blank" rel="noreferrer" ref={el => (targetRef.current[idx] = el)} href={item.url}>
                <img src={item.img} alt="인프런 썸네일" />
                <div className="hoverbox">
                  <strong>{item.title}</strong>
                </div>
                <span className="hover" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionInflearn;
