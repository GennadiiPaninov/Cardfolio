import {theme} from "@/styles/theme";


type Props = {
  color?: string
  lineHeight?: number
  max?: number
  min?: number
  spacingMax?: number
  spacingMin?: number
  weight?: number
}

export const font = ({ color, lineHeight, max, min, spacingMax, spacingMin, weight }: Props) => `
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};  
  font-size: calc((100vw - 360px) / (1440 - 360) * (${max} - ${min}) + ${min}px);
  letter-spacing: calc((100vw - 360px) / (1440 - 360) * (${spacingMax} - ${spacingMin}) + ${spacingMin}px);

`
