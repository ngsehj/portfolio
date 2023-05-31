import { useScrollCalc, useScrollFadeIn } from '../../../hooks';
import UstHeading from '../../../components/UstHeading';

const SectionAbout = () => {
  const headingText = ['A', 'B', 'O', 'U', 'T'];
  const skills = ['HTML5', 'CSS3', 'SCSS', 'ResponsiveWeb', 'JavaScript', 'jQuery', 'React', 'Vue.js', 'Photoshop', 'Figma', 'Git'];

  const text = [
    { text: 'I have a passion for my work' },
    { text: 'I have a passion for my work', },
    { text: 'I have a passion for my work', },
    { text: 'I have a passion for my work', },
    { text: 'I have a passion for my work', },
    { text: 'I have a passion for my work', },
  ];

  const animatedText = {
    0: useScrollCalc('left', { start: 0, end: .4 }),
    1: useScrollCalc('right', { start: 0, end: .4 }),
    2: useScrollCalc('left', { start: 0, end: .4 }),
    3: useScrollCalc('right', { start: 0, end: .4 }),
    4: useScrollCalc('left', { start: 0, end: .4 }),
    5: useScrollCalc('right', { start: 0, end: .4 }),
    career0: useScrollFadeIn('up', 1, 0.1),
    career1: useScrollFadeIn('right', 1, 0.1),
    career2: useScrollFadeIn('down', 1, 0.1),
    career3: useScrollFadeIn('left', 1, 0.1),
    career4: useScrollFadeIn('up', 1, 0.1),
    career5: useScrollFadeIn('right', 1, 0.1),
    career6: useScrollFadeIn('down', 1, 0.1),
    career7: useScrollFadeIn('left', 1, 0.1),
    career8: useScrollFadeIn('up', 1, 0.1),
  };

  const career = [
    {
      date: '2012.12 ~ 2014.09',
      company: '이노트리',
      title: '경영서비스팀 사원',
      desc: ''
    },
    {
      date: '2014.11 ~ 2015.02',
      company: '하이미디어학원',
      title: '웹퍼블리셔 취업반 과정 수료',
      desc: ''
    },
    {
      date: '2015.03 ~ 2016.09',
      company: '이노트리',
      title: 'UI/UX팀 대리 (Web Publisher)',
      desc: ''
    },
    {
      date: '2017.06 ~ 2017.11',
      company: '디지털웍스',
      title: 'SI사업부 사원 (Web Publisher)',
      desc: ''
    },
    {
      date: '2017.12 ~ 2018.10',
      company: '플라이트그래프',
      title: '서비스개발팀 사원 (Web Publisher)',
      desc: ''
    },
    {
      date: '2018.12 ~ 2020.02',
      company: '스토리앤브라더스',
      title: '개발팀 대리 (Web Publisher)',
      desc: ''
    },
    {
      date: '2020.06 ~ 2020.08',
      company: '아이스크림에듀',
      title: '프리랜서 근무 (Web Publisher)',
      desc: ''
    },
    {
      date: '2021.09 ~ 2023.06',
      company: '아이스크림미디어',
      title: '프리랜서 근무 (Web Publisher)',
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

      <div>
        {text.map((item, idx) => (
          <div className="section__desc"
            {...animatedText[idx]}
            key={idx}
          >
            <p>{item.text}</p></div>
        ))}
      </div>

      
    </section>
  )

}

export default SectionAbout;