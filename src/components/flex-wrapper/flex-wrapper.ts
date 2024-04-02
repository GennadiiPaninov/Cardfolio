import styled from 'styled-components'

type Props = {
  align?: 'center' | 'end' | 'start' | 'stretch'
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  gap?: string
  justify?: 'center' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}
export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
  height: 100%;
`
