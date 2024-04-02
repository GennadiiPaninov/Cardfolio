import { Icon } from '@/components/icon'

import { S } from './social-icons_styles'

type Icons = {
  id: string
  url: string
}

type Props = {
  icons: Icons[]
}

export const SocialIcons = ({ icons }: Props) => {
  return (
    <S.IconsList>
      {icons.map(icon => (
        <S.Icon key={icon.id}>
          <S.Link href={icon.url}>
            <Icon height={'30'} id={icon.id} viewBox={'0 0 30 30'} width={'30'} />
          </S.Link>
        </S.Icon>
      ))}
    </S.IconsList>
  )
}
