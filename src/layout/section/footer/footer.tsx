import { useTranslation } from 'react-i18next'

import { S } from './footer.styles'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <S.Footer>
      <S.Text>{t('description', { ns: 'footer' })}</S.Text>
    </S.Footer>
  )
}
