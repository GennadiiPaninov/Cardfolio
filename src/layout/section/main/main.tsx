import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { Button, Container } from '@/components'
import { Icon } from '@/components/icon'
import Typewriter from 'typewriter-effect'

import photo from '../../../assets/main-photo.webp'
import { S } from './main_styles'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <S.Main id={'home'}>
      <Container>
        <Fade>
          <S.MainWrapper>
            <S.PhotoWrapper>
              <S.Photo alt={'main-photo'} src={photo} />
            </S.PhotoWrapper>
            <S.InfoWrapper>
              <S.Name>{t('name', { ns: 'main' })}</S.Name>
              <S.MainTitle>
                <p> {t('position', { ns: 'main' })}</p>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: [`${t('position', { ns: 'main' })}`],
                  }}
                />
              </S.MainTitle>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <Button>
                <S.NavLink smooth to={'contacts'}>
                  <Icon height={'20'} id={'send'} viewBox={'0 0 20 20'} width={'25'} />
                  {t('sendButton', { ns: 'main' })}
                </S.NavLink>
              </Button>

              <Button variant={'outlined'}>
                <>
                  <Icon height={'20'} id={'save'} viewBox={'0 0 20 20'} width={'20'} />
                  <a download href={''} rel={'noopener noreferrer'} target={'_blank'}>
                    {/*в href передать ссылку на гугл диск загрузку*/}
                    {t('downloadButton', { ns: 'main' })}
                  </a>
                </>
              </Button>
            </S.ButtonWrapper>
          </S.MainWrapper>
        </Fade>
      </Container>
    </S.Main>
  )
}
