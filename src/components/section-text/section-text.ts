import { font } from '@/styles'
import styled from 'styled-components'

export const SectionText = styled.p`
  margin: 0 auto;
  ${font({ lineHeight: 1.5, max: 18, min: 14, weight: 300 })};
`
