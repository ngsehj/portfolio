import { useScrollTranslate } from 'hooks';

const UstHeading = ({ words }) => {
  const animatedItem = {
    0: useScrollTranslate(1, 0.1),
    1: useScrollTranslate(1, 0.2),
    2: useScrollTranslate(1, 0.3),
    3: useScrollTranslate(1, 0.4),
    4: useScrollTranslate(1, 0.5),
    5: useScrollTranslate(1, 0.6),
    6: useScrollTranslate(1, 0.7),
    7: useScrollTranslate(1, 0.8),
  };

  return (
    <div className="ust-up-heading">
      <div className="inner">
        {words.map((text, idx) => (
          <span {...animatedItem[idx]} key={idx}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UstHeading;
