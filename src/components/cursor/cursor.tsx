import { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'

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
            backgroundColor: 'white',
          }}
          outerScale={1.3}
          outerSize={25}
          outerStyle={{
            backgroundColor: ' #2cb67d',
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
