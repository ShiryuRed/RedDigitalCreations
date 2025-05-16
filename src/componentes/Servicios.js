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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  background-color: #1E1E1E;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #CCCCCC;

  strong {
    color: #FFFFFF;
  }
`;

export default function Servicios() {
  return (
    <Section id="servicios">
      <Heading>Servicios</Heading>
      <List>
        <ListItem>
          <strong>Diseño y desarrollo de sitios web</strong><br/>
          Sitios responsivos, rápidos y atractivos desde $15,000 MXN
        </ListItem>
        <ListItem>
          <strong>Entrega de código fuente</strong><br/>
          Código comentado, ordenado y documentado por $3,000 MXN adicionales
        </ListItem>
      </List>
    </Section>
  );
}
