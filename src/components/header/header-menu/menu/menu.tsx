import { MenuItem } from '@/components/header/header'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
  onItemClick?: () => void
}

export const Menu = ({ menuItems, onItemClick }: Props) => {
  return (
    <S.NavList>
      {menuItems.map(item => (
        <li key={item.title}>
          <S.NavLink
            activeClass={'active'}
            offset={-100}
            onClick={onItemClick}
            smooth
            spy
            to={`${item.href}`}
          >
            {item.title}
          </S.NavLink>
        </li>
      ))}
    </S.NavList>
  )
}
