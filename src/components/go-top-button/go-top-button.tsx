import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { Icon } from '@/components/icon'
import { theme } from '@/styles'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

export const GoTopButton = () => {
  const [isShowButton, setIsShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsShowButton(true)
      } else {
        setIsShowButton(false)
      }
    })
  }, [])

  return (
    <AnimatePresence>
      {isShowButton && (
        <StyledGoTopButton onClick={scroll.scrollToTop}>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            initial={{ opacity: 0, x: 30 }}
          >
            <Icon height={'40'} id={'arrowTop'} viewBox={'0 0 40 40'} width={'40'} />
          </motion.div>
        </StyledGoTopButton>
      )}
    </AnimatePresence>
  )
}

const StyledGoTopButton = styled.button`
  position: fixed;
  background-color: ${theme.colors.primaryBg};
  border-radius: 100%;
  box-shadow: 0 0 20px 20px rgba(12, 7, 10, 0.8);
  right: 30px;
  bottom: 30px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.4;
    transition: ${theme.animations.transitions};
  }
  @media ${theme.media.tablet} {
    &:hover {
      scale: 1.05;
    }
  }
`
