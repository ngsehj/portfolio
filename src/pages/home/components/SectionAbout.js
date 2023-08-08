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
    <section className="section section-career">
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
      <div className="section__inner">
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
      </div>
    </section>
  );
};

export default SectionAbout;
