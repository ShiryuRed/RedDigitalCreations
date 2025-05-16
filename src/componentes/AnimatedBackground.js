import { useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

export default function AnimatedBackground() {
  useEffect(() => {
    loadFull(tsParticles);
    tsParticles.load("tsparticles", {
      background: {
        color: {
          value: "#0D0D0D",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#FF4C4C",
        },
        links: {
          color: "#FF4C4C",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: {
            default: "bounce",
          },
        },
        number: {
          value: 40,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    });
  }, []);

  return <div id="tsparticles" className="fixed top-0 left-0 w-full h-full -z-10" />;
}
