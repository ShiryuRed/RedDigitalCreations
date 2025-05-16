import styled from 'styled-components';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  background-color: #0D0D0D;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    color: #ffffff;
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #FF4C4C;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LangButton = styled.button`
  margin-left: 1rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  background-color: #E63946;
  color: white;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #FF4C4C;
  }
`;

export default function Header() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <HeaderWrapper>
      <Title onClick={() => scroll.scrollToTop()}>RedDigitalCreations</Title>
      <Nav>
        <NavLink to="inicio" smooth duration={500}>Inicio</NavLink>
        <NavLink to="servicios" smooth duration={500}>Servicios</NavLink>
        <NavLink to="portafolio" smooth duration={500}>Portafolio</NavLink>
        <NavLink to="contacto" smooth duration={500}>Contacto</NavLink>
        <LangButton onClick={toggleLanguage}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </LangButton>
      </Nav>
    </HeaderWrapper>
  );
}
