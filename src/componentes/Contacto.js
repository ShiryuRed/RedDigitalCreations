import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem;
  text-align: center;
  background-color: #0D0D0D;
`;

const Heading = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #FF4C4C;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #CCCCCC;
  margin-bottom: 0.5rem;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #FF4C4C;
  color: white;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E63946;
  }
`;

export default function Contacto() {
  return (
    <Section id="contacto">
      <Heading>Contacto</Heading>
      <Text>¿Quieres trabajar conmigo o tienes una idea en mente?</Text>
      <Button href="mailto:reddigitalcreations.y@gmail.com">Escríbeme</Button>
    </Section>
  );
}