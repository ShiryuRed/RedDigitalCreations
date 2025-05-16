import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0D0D0D;
`;

const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF4C4C;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: #CCCCCC;
  max-width: 36rem;

  strong {
    color: #FFFFFF;
  }
`;

export default function Inicio() {
  return (
    <Section id="inicio">
      <Heading
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hola, soy Yahir
      </Heading>
      <Text>
        Desarrollador web y fundador de <strong>RedDigitalCreations</strong>. Creo páginas modernas, responsivas y con estilo para empresas que quieren destacar.
      </Text>
    </Section>
  );
}