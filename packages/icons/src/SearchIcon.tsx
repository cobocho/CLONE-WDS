import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearchIcon = (
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
      fillRule="evenodd"
      d="M10 2.1a7.9 7.9 0 1 0 4.914 14.086l4.95 4.95a.9.9 0 0 0 1.272-1.272l-4.95-4.95A7.9 7.9 0 0 0 10 2.1M3.9 10a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchIcon)
export default ForwardRef
