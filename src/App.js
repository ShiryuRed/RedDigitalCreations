import { ParallaxProvider } from 'react-scroll-parallax';
import ParticlesBackground from './componentes/ParticlesBackground';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Servicios from './componentes/Servicios';
import Portafolio from './componentes/Portafolio';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <ParticlesBackground />
        <Header />
        <main className="pt-20 space-y-24">
          <Inicio />
          <Servicios />
          <Portafolio />
          <Contacto />
          <Footer />
        </main>
      </ParallaxProvider>
    </>
  );
}
