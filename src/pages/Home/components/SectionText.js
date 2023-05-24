import { useScrollCalc } from '../../../hooks';

const text = [
  { text: '111111' },
  { text: '22222' },
  { text: '333333' },
  { text: '111111' },
  { text: '4444444' },
  { text: '55555' },
  // { text: '저는 함께 일하기 꽤 괜찮은 사람입니다.', },
  // { text: '배려와 소통을 중요시하고', },
  // { text: '효율적인 업무를 지향하며', },
  // { text: '일정을 잘 준수하고', },
  // { text: '새로운 기술과 트렌드에 대해', },
  // { text: '끊임없이 배우는 중입니다.', },
]

const SectionText = () => {
 
  const animatedText = {
    0: useScrollCalc('left', {start: 0, end: .4}, true),
    1: useScrollCalc('right', {start: 0, end: .4}, true),
    2: useScrollCalc('left', {start: 0, end: .4}, true),
    3: useScrollCalc('right', {start: 0, end: .4}, true),
    4: useScrollCalc('left', {start: 0, end: .4}, true),
    5: useScrollCalc('right', {start: 0, end: .4}, true),
  };

  return (
    <section className="section">
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

export default SectionText;