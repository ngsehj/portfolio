import { useHoverTranslate } from 'hooks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const animatedElement = {
    logo: useHoverTranslate(),
  };
  return (
    <header className="header">
      <strong className="logo uht-hover" {...animatedElement.logo} onClick={() => navigate('/portfolio')}>
        E_HYEJIN
      </strong>
    </header>
  );
};

export default Header;
