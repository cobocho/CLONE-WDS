import { createElement } from 'react'

import { textRecipe, TextVariants } from './Text.css'

type TextProps = {
  as?:
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
    | 'small'
    | 'cite'
    | 'q'
    | 'dfn'
    | 'abbr'
    | 'data'
    | 'time'
    | 'code'
    | 'var'
    | 'samp'
    | 'kbd'
    | 'sub'
    | 'sup'
    | 'u'
    | 'mark'
    | 'ruby'
    | 'rt'
    | 'rp'
    | 'bdi'
    | 'bdo'
    | 'br'
    | 'wbr'
    | 'ins'
    | 'del'
    | 's'
    | 'strike'
    | 'tt'
    | 'xmp'
    | 'plaintext'
    | 'math'
    | 'mtext'
    | 'annotation-xml'
    | 'foreign'
} & TextVariants &
  React.HTMLAttributes<HTMLElement>

export const Text = ({
  as = 'span',
  color,
  className = '',
  ...props
}: TextProps) => {
  return createElement(as, {
    ...props,
    className: `${textRecipe({ color })} ${className}`,
  })
}
