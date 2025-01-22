import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDownSmallIcon = (
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
      d="M4.363 8.364a.9.9 0 0 1 1.273 0L12 14.727l6.363-6.363a.9.9 0 1 1 1.273 1.272l-7 7a.9.9 0 0 1-1.272 0l-7-7a.9.9 0 0 1 0-1.272Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDownSmallIcon)
export default ForwardRef
