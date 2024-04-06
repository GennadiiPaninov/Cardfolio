import { font, theme } from '@/styles'
import styled from 'styled-components'

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  padding: 50px 0;
  border-bottom: 1px solid #ff8906;
  margin-bottom: 50px;
  ${font({
    color: theme.colors.accent,
    max: 40,
    min: 30,
    spacingMax: 20,
    spacingMin: 16,
    weight: 700,
  })};
`
