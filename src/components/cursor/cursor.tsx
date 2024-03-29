import { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const Cursor = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <StyledCursor>
      {width > breakPoint && (
        <AnimatedCursor
          innerScale={1.5}
          innerSize={10}
          innerStyle={{
            backgroundColor: theme.colors.font,
          }}
          outerScale={1.3}
          outerSize={25}
          outerStyle={{
            backgroundColor: ' rgba(255, 120, 45, 0.8)',
          }}
        />
      )}
    </StyledCursor>
  )
}

const StyledCursor = styled.div`
  position: relative;
  z-index: 99999999999;
`
