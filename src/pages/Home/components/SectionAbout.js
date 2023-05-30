import { useScrollCalc } from '../../../hooks';

const text = [
  // { text: '111111' },
  // { text: '22222' },
  // { text: '333333' },
  // { text: '111111' },
  // { text: '4444444' },
  // { text: '55555' },
  { text: '저는 협업할 때는' },
  { text: '배려와 소통을 중요시하고', },
  { text: '일정을 잘 준수합니다.', },
  { text: '유지보수 최적화를 위해', },
  { text: '끊임 없이 생각하고', },
  { text: '끊임없이 배우는 중입니다.', },
];

const skills = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'React', 'Vue.js', 'Photoshop', 'Figma', 'Git'];

const SectionAbout = () => {

  const animatedText = {
    0: useScrollCalc('left', { start: 0, end: .4 }, true),
    1: useScrollCalc('right', { start: 0, end: .4 }, true),
    2: useScrollCalc('left', { start: 0, end: .4 }, true),
    3: useScrollCalc('right', { start: 0, end: .4 }, true),
    4: useScrollCalc('left', { start: 0, end: .4 }, true),
    5: useScrollCalc('right', { start: 0, end: .4 }, true),
  };

  return (
    <section className="section">
      <div className="">
        <p>저는 시맨틱하고, 어떻게 하면 운영과 유지보수, 개발에 효율적일지 끊임없이 생각하며 코딩합니다.</p>
        <strong>Career</strong>
        <ul>
          <li>
            <strong>2012.12 ~ 2014.09</strong>
            <span>이노트리 경영서비스팀 근무</span>
          </li>
          <li>
            <strong>2014.11 ~ 2015.02</strong>
            <span>하이미디어학원 웹퍼블리셔 취업반 과정 수료</span>
          </li>
          <li>
            <strong>2015.03 ~ 2016.09</strong>
            <span>이노트리 UI/UX팀</span>
          </li>
          <li>
            <strong>2017.06 ~ 2017.11</strong>
            <span>디지털웍스 SI사업부 근무</span>
          </li>
          <li>
            <strong>2017.12 ~ 2018.10</strong>
            <span>플라이트그래프 서비스개발팀 근무</span>
          </li>
          <li>
            <strong>2018.12 ~ 2020.02</strong>
            <span>스토리앤브라더스 개발팀 근무</span>
          </li>
          <li>
            <strong>2020.06 ~ 2020.08</strong>
            <span>아이스크림에듀 프리랜서 근무</span>
          </li>
          <li>
            <strong>2021.09 ~ 2023.06</strong>
            <span>아이스크림미디어 프리랜서 근무</span>
          </li>
        </ul>
        <strong>Certification</strong>
      </div>
      <strong>Skill</strong>
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
          <p
          >{item.text}</p></div>
      ))}
    </section>
  )

}

export default SectionAbout;