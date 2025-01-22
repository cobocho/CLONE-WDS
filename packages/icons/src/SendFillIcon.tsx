import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSendFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      d="M5.518 3.42c-.925-.439-1.894.515-1.472 1.447L6.868 11.1h7.163v1.8H6.835l-2.88 6.222c-.431.933.54 1.895 1.47 1.456l16.089-7.606c.84-.397.84-1.591 0-1.989z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSendFillIcon)
export default ForwardRef
