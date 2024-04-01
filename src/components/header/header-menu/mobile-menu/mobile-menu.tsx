import { useState } from 'react'

import { BurgerButton } from '@/components'
import { MenuItem } from '@/components/header/header'
import { Menu } from '@/components/header/header-menu/menu/menu'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
}
export const MobileMenu = ({ menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.MobileNav>
      <BurgerButton isOpen={isOpen} onClick={openMenuHandler}>
        <span></span>
      </BurgerButton>
      <S.MenuPopup isOpen={isOpen} onClick={openMenuHandler}>
        <Menu menuItems={menuItems} onItemClick={openMenuHandler} />
      </S.MenuPopup>
    </S.MobileNav>
  )
}
