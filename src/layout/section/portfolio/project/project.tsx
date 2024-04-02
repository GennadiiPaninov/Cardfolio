import { useTranslation } from 'react-i18next'

import { Button } from '@/components'

import { S } from './project_styles'

type Props = {
  code: string
  demo: string
  description: string
  name: string
  photo: string
}

export const Project = ({ code, demo, description, name, photo }: Props) => {
  const { t } = useTranslation()

  return (
    <S.Project>
      <S.ImageWrapper>
        <S.Photo alt={name} src={photo} />
        <S.ButtonWrapper>
          <Button>
            <a href={demo}>{t('buttonDemo', { ns: 'portfolio' })}</a>
          </Button>
          <Button variant={'outlined'}>
            <a href={code}>{t('buttonCode', { ns: 'portfolio' })}</a>
          </Button>
        </S.ButtonWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
      <S.Link href={demo}>{t('LinkView', { ns: 'portfolio' })}</S.Link>
    </S.Project>
  )
}
