import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem;
  background-color: #0D0D0D;
  max-width: 64rem;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #FF4C4C;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: #1E1E1E;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
`;

const Description = styled.p`
  color: #CCCCCC;
`;

export default function Portafolio() {
  return (
    <Section id="portafolio">
      <Heading>Portafolio</Heading>
      <Grid>
        <Card>
          <Title>Hi Blinds</Title>
          <Description>
            Sitio de persianas y productos WPC desarrollado con React y carruseles personalizados.
          </Description>
        </Card>
        <Card>
          <Title>Hecho a Mano</Title>
          <Description>
            Desarrollo de guiones de video y maquetación de productos personalizados para ecommerce.
          </Description>
        </Card>
      </Grid>
    </Section>
  );
}
