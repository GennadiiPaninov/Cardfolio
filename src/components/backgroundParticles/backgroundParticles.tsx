import type { Container, Engine } from 'tsparticles-engine'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'

import { loadSlim } from 'tsparticles-slim'

export const BackgroundParticle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id={'tsparticles'}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bounce',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: '#2cb67d',
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.1,
            width: 2,
          },
          move: {
            direction: 'outside',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              area: 1000,
              enable: true,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { max: 5, min: 1 },
          },
        },
      }}
    />
  )
}
