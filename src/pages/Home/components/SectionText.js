import { useScrollCalc } from "../../../hooks";

const SectionText = () => {
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
  };

  return (
    <section className="section section__text">
      {text.map((item, idx) => (
        <div className="is-animated-text"
          {...animatedText[idx]}
          key={idx}
        >
          <p>{item.text}</p></div>
      ))}
    </section>
  )
}

export default SectionText;