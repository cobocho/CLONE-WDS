import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftIcon = (
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
      d="M16.137 3.363a.9.9 0 0 1 0 1.273l-7.364 7.363 7.364 7.364a.9.9 0 0 1-1.273 1.273l-8-8a.9.9 0 0 1 0-1.273l8-8a.9.9 0 0 1 1.273 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftIcon)
export default ForwardRef
