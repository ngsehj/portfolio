import { useHoverTranslate } from 'hooks';
import { useNavigate } from 'react-router-dom';

const SectionLast = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/portfolio');

  const animatedElement = {
    button: useHoverTranslate(),
  };

  return (
    <section className="gsap-section-last">
      <button
        className="btn-back"
        type="button"
        {...animatedElement.button}
        onClick={goHome}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') goHome();
        }}
      >
        🏠 Go Home
      </button>
    </section>
  );
};

export default SectionLast;
