import { FlexWrapper } from '@/components'
import { Icon } from '@/components/icon'

import { S } from './skill_styles'

type Props = {
  idIcon: string
  title: string
}

export const Skill = ({ idIcon, title }: Props) => {
  return (
    <FlexWrapper align={'center'} direction={'column'}>
      <S.IconWrapper>
        <Icon id={idIcon} />
      </S.IconWrapper>
      <S.SkillTitle>{title}</S.SkillTitle>
    </FlexWrapper>
  )
}
