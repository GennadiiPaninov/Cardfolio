import { font, theme } from '@/styles'
import styled, { css } from 'styled-components'

type Props = {
  active?: boolean
  variant?: 'outlined' | 'primary' | 'text'
}

export const Button = styled.button<Props>`
  position: relative;
  background-color: ${theme.colors.accent};
  padding: 12px 26px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${font({ color: theme.colors.primaryBg, max: 18, min: 14, weight: 700 })};

  a {
    color: ${theme.colors.primaryBg};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadow.main};
    transition: ${theme.animations.transitions};
  }

  ${props =>
    props.variant === 'outlined' &&
    css<Props>`
      background-color: transparent;
      outline: 2px solid ${theme.colors.accent};

      a {
        color: ${theme.colors.accent};
      }
    `}
  @media ${theme.media.tablet} {
    &:hover {
      transform: scale(1);
    }
  }
  ${props =>
    props.variant === 'text' &&
    css<Props>`
      background-color: transparent;
      font-size: 18px;
      padding: 8px;
      color: ${theme.colors.font};
      &:active {
        color: ${theme.colors.accent};
      }
      @media ${theme.media.tablet} {
        font-size: 16px;
      }
    `}
  ${props =>
    props.active === true &&
    css<Props>`
      color: ${theme.colors.accent};
    `}
`
