import { useScrollFadeIn } from 'hooks';
import UstHeading from 'components/UstHeading';

const SectionAbout = () => {
  const headingText = ['A', 'B', 'O', 'U', 'T'];
  const skills = ['HTML5', 'CSS3', 'SCSS', 'ResponsiveWeb', 'JavaScript', 'jQuery', 'React', 'Vue.js', 'Photoshop', 'Figma', 'Git'];

  const animatedText = {
    career0: useScrollFadeIn('right', 1, 0.1, '5rem'),
    career1: useScrollFadeIn('down', 1, 0.1, '5rem'),
    career2: useScrollFadeIn('left', 1, 0.1, '5rem'),
    career3: useScrollFadeIn('up', 1, 0.1, '5rem'),
    career4: useScrollFadeIn('right', 1, 0.1, '5rem'),
    career5: useScrollFadeIn('down', 1, 0.1, '5rem'),
    career6: useScrollFadeIn('left', 1, 0.1, '5rem'),
    career7: useScrollFadeIn('up', 1, 0.1, '5rem'),
  };

  const career = [
    {
      date: '2021.09 ~ 2023.06',
      company: '아이스크림미디어',
      title: '프리랜서 근무 (Web Publisher)',
    },
    {
      date: '2020.06 ~ 2020.08',
      company: '아이스크림에듀',
      title: '프리랜서 근무 (Web Publisher)',
    },
    {
      date: '2018.12 ~ 2020.02',
      company: '스토리앤브라더스',
      title: '개발팀 대리 (Web Publisher)',
    },
    {
      date: '2017.12 ~ 2018.10',
      company: '플라이트그래프',
      title: '서비스개발팀 사원 (Web Publisher)',
    },
    {
      date: '2017.06 ~ 2017.11',
      company: '디지털웍스',
      title: 'SI사업부 사원 (Web Publisher)',
    },
    {
      date: '2015.04 ~ 2016.09',
      company: '이노트리',
      title: 'UI/UX팀 대리 (Web Publisher)',
    },
    {
      date: '2014.11 ~ 2015.02',
      company: '하이미디어학원',
      title: '웹퍼블리셔 취업반 과정 수료',
    },
    {
      date: '2012.12 ~ 2014.09',
      company: '이노트리',
      title: '경영서비스팀 사원',
    },
  ];

  return (
    <section className="section section__about">
      {/* <p>- 웹 표준을 준수</p>
      <p>- SCSS 전처리기 사용이 가능하며 Minxin</p>
      <p>- JavaScript로 인터랙션 구현</p>
      <p>- ES6 문법 공부 (변수, 화살표 함수, 비구조화할당)</p>
      <p>- </p>
      <p>
        HTML & CSS - 크로스브라우징 & 시맨틱 마크업을 준수합니다. - 반응형/적응형 개발 경험이 있습니다. - 애니메이션 활용 가능합니다. - 변수 사용 경험이 있습니다. - 다양한 레이아웃을 문제없이 개발할
        수 있습니다. SCSS - css를 컴포넌트화 하여 모듈 형태로 개발할 수 있습니다. - Mixins를 확장성 있게 개발하여 재사용성을 높일 수 있습니다. - 함수와 조건문을 사용할 수 있습니다. Javascript -
        기본적인 자바스크립트 문법에 대해 이해하고 있습니다. - 함수를 만들어 사용하고 인자를 전달할 수 있습니다. - 배열과 객체 문법에 대해서 이해하고 메서드를 사용한 경험이 있습니다. - 로컬스토리지를
        활용하여 토이프로젝트를 개발한 경험이 있습니다. - ES6 문법에 대해 꾸준히 공부하고 있습니다.(클래스, this, 화살표함수, 비구조화할당 등) React - 리액트 프로젝트 경험이 있습니다. - 기본 문법에
        대한 이해가 있습니다. - React hooks 사용 경험이 있습니다. - Router를 이용한 SPA 개발 경험이 있고 조건에 따라 컴포넌트 분기 처리를 할 수 있습니다. - 함수형 컴포넌트를 만들어 props를 전달하고
        받을 수 있습니다. - 로컬스토리지에 저장한 데이터를 불러와 컴포넌트에 바인딩한 경험이 있습니다. - React Bootstrap / Styled-components / SCSS / css-module을 모두 사용할 수 있습니다. - Redux
        toolkit을 사용한 경험이 있습니다. - axios를 이용하여 API 데이터를 받아와, 컴포넌트에 데이터를 바인딩한 경험이 있습니다.
      </p> */}
      <div className="marquee">
        <ul>
          {skills.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul>
          {skills.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <UstHeading words={headingText} />
      <p className="career">경력 총 7년 2개월</p>
      <ul className="career__list">
        {career.map((item, idx) => (
          <li className="career__item" {...animatedText[`career${idx}`]} key={idx}>
            <div className="career__heading">
              <strong>{item.company}</strong>
            </div>
            <div className="career__info">
              <p>{item.date}</p>
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionAbout;
