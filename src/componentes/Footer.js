import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 0.875rem;
  color: #CCCCCC;
  padding: 1.5rem 0;
  background-color: #0D0D0D;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © 2025 RedDigitalCreations. Todos los derechos reservados.
    </FooterContainer>
  );
}
