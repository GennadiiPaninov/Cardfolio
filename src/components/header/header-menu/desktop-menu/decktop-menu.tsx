import { MenuItem } from '@/components/header/header'
import { Menu } from '@/components/header/header-menu/menu/menu'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <S.Nav>
      <Menu menuItems={menuItems} />
    </S.Nav>
  )
}
