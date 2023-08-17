import { useHoverTranslate } from 'hooks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  const animatedElement = {
    logo: useHoverTranslate(),
  };

  return (
    <header className="header">
      <strong
        className="logo uht-hover"
        tabIndex={0}
        {...animatedElement.logo}
        onClick={goHome}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') goHome();
        }}
      >
        E_HYEJIN
      </strong>
    </header>
  );
};

export default Header;
