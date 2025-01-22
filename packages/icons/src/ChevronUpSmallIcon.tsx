import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronUpSmallIcon = (
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
      d="M4.364 15.636a.9.9 0 0 0 1.272 0L12 9.273l6.364 6.363a.9.9 0 0 0 1.272-1.272l-7-7a.9.9 0 0 0-1.272 0l-7 7a.9.9 0 0 0 0 1.272"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronUpSmallIcon)
export default ForwardRef
