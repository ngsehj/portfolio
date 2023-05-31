import { useScrollCalc, useScrollFadeIn } from '../../../hooks';
import UstHeading from '../../../components/UstHeading';

const SectionAbout = () => {
  const headingText = ['A', 'B', 'O', 'U', 'T'];
  const skills = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'React', 'Vue.js', 'Photoshop', 'Figma', 'Git'];

  const text = [
    { text: '111111' },
    { text: '22222' },
    { text: '333333' },
    { text: '111111' },
    { text: '4444444' },
    { text: '55555' },
    // { text: '저는 협업할 때는' },
    // { text: '배려와 소통을 중요시하고', },
    // { text: '일정을 잘 준수합니다.', },
    // { text: '유지보수 최적화를 위해', },
    // { text: '끊임 없이 생각하고', },
    // { text: '끊임없이 배우는 중입니다.', },
  ];

  const animatedText = {
    0: useScrollCalc('left', { start: 0, end: .4 }),
    1: useScrollCalc('right', { start: 0, end: .4 }),
    2: useScrollCalc('left', { start: 0, end: .4 }),
    3: useScrollCalc('right', { start: 0, end: .4 }),
    4: useScrollCalc('left', { start: 0, end: .4 }),
    5: useScrollCalc('right', { start: 0, end: .4 }),
    career0: useScrollFadeIn('right', 1, 0.1),
    career1: useScrollFadeIn('down', 1, 0.1),
    career2: useScrollFadeIn('down', 1, 0.1),
    career3: useScrollFadeIn('right', 1, 0.1),
    career4: useScrollFadeIn('up', 1, 0.1),
    career5: useScrollFadeIn('right', 1, 0.1),
    career6: useScrollFadeIn('down', 1, 0.1),
    career7: useScrollFadeIn('right', 1, 0.1),
    career8: useScrollFadeIn('up', 1, 0.1),
  };

  const career = [
    {
      date: '2012.12 ~ 2014.09',
      company: '이노트리',
      title: '이노트리 경영서비스팀 근무',
      desc: ''
    },
    {
      date: '2014.11 ~ 2015.02',
      company: '하이미디어학원',
      title: '하이미디어학원 웹퍼블리셔 취업반 과정 수료',
      desc: ''
    },
    {
      date: '2015.03 ~ 2016.09',
      company: '이노트리',
      title: '이노트리 UI/UX팀 근무',
      desc: ''
    },
    {
      date: '2017.06 ~ 2017.11',
      company: '디지털웍스',
      title: '디지털웍스 SI사업부 근무',
      desc: ''
    },
    {
      date: '2017.12 ~ 2018.10',
      company: '플라이트그래프',
      title: '플라이트그래프 서비스개발팀 근무',
      desc: ''
    },
    {
      date: '2018.12 ~ 2020.02',
      company: '스토리앤브라더스',
      title: '스토리앤브라더스 개발팀 근무',
      desc: ''
    },
    {
      date: '2020.06 ~ 2020.08',
      company: '아이스크림에듀',
      title: '아이스크림에듀 프리랜서 근무',
      desc: ''
    },
    {
      date: '2021.09 ~ 2023.06',
      company: '아이스크림미디어',
      title: '아이스크림미디어 프리랜서 근무',
      desc: ''
    },
  ]

  return (
    <section className="section">
      <UstHeading words={headingText} />

      <ul className="career__list">
        {career.map((item, idx) => (
          <li 
            className="career__item" 
            {...animatedText[`career${idx}`]}
            key={idx}
          >
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

      <div className="marquee">
        <ul>
          {skills.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {skills.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      {text.map((item, idx) => (
        <div className="section__desc"
          {...animatedText[idx]}
          key={idx}
        >
          <p>{item.text}</p></div>
      ))}
    </section>
  )

}

export default SectionAbout;