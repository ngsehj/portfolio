import { useScrollCalc } from '../../../hooks';

const text = [
  { text: 'FEARLESS', },
  { text: 'Blue Flame', },
  { text: 'ANTIFRAGILE', },
  { text: 'UNFORGIVEN', },
]

const SectionText = () => {
  
  const animatedText = {
    0: useScrollCalc('left', {start: 0, end: 1}),
    1: useScrollCalc('right', {start: 0, end: 1}),
    2: useScrollCalc('left', {start: 0, end: .5}),
    3: useScrollCalc('right', {start: 0, end: .5}),
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