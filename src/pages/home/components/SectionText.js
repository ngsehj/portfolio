import { useScrollCalc } from 'hooks';

const SectionText = () => {
  const text = [
    { text: '* Passion for my work * Passion for my work ' },
    { text: '* Passion for my work * Passion for my work ' },
    { text: '* Passion for my work * Passion for my work ' },
    { text: '* Passion for my work * Passion for my work ' },
  ];

  const animatedText = {
    0: useScrollCalc('left', { start: 0, end: 0.4 }),
    1: useScrollCalc('right', { start: 0, end: 0.4 }),
    2: useScrollCalc('left', { start: 0, end: 0.4 }),
    3: useScrollCalc('right', { start: 0, end: 0.4 }),
  };

  return (
    <section className="section section-text">
      {text.map((item, idx) => (
        <div className="is-animated" {...animatedText[idx]} key={idx}>
          <p className="text">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default SectionText;
