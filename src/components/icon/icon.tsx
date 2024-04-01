import IconSprite from '../../assets/icons-sprite.svg'

type Props = {
  height?: string
  id: string
  viewBox?: string
  width?: string
}

export const Icon = ({ height, id, viewBox, width }: Props) => {
  return (
    <svg
      fill={'none'}
      height={height || '50'}
      viewBox={viewBox || '0 0 50 50'}
      width={width || '50'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${IconSprite}#${id}`} />
    </svg>
  )
}
