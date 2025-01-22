import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftTightSmallIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={24}
    fill="none"
    viewBox="0 0 12 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      d="M9.136 4.864a.9.9 0 0 1 0 1.272L3.273 12l5.863 5.864a.9.9 0 1 1-1.272 1.272l-6.5-6.5a.9.9 0 0 1 0-1.272l6.5-6.5a.9.9 0 0 1 1.272 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftTightSmallIcon)
export default ForwardRef
