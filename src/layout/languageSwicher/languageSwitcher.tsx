import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { theme } from '@/styles'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isShowButton, setIsShowButton] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 60) {
        setIsShowButton(true)
      } else {
        setIsShowButton(false)
      }
    })
  }, [])

  const { i18n } = useTranslation()
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <AnimatePresence>
      {isShowButton && (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
          <LanguageSwitcherStyled>
            <Button
              active={selectedLanguage === 'en'}
              onClick={() => onChangeLanguage('en')}
              value={'en'}
              variant={'text'}
            >
              EN
            </Button>
            <Button
              active={selectedLanguage === 'ru'}
              onClick={() => onChangeLanguage('ru')}
              value={'ru'}
              variant={'text'}
            >
              RU
            </Button>
          </LanguageSwitcherStyled>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const LanguageSwitcherStyled = styled.div`
  position: absolute;
  top: 120px;
  right: 10px;
  box-shadow: ${theme.shadow.main};
  border-radius: 10px;

  z-index: 9998;
  @media ${theme.media.tablet} {
    box-shadow: none;
    top: 10px;
    left: 10px;
    z-index: 9999;
    display: flex;
  }
`
