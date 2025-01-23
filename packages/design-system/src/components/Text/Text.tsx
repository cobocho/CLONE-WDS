import { createElement } from 'react'

import { textRecipe, TextVariants } from './Text.css'

type TextTags =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'b'
  | 'em'
  | 'i'

type TextProps = {
  as?: TextTags
} & TextVariants &
  React.HTMLAttributes<HTMLElement>

export const Text = ({
  as = 'span',
  color,
  type,
  weight,
  whiteSpace,
  className = '',
  ...props
}: TextProps) => {
  return createElement(as, {
    ...props,
    className: `${textRecipe({ color, type, weight, whiteSpace })} ${className}`,
  })
}
