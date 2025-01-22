import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronLeftTightSmallIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#171719"
      d="M9.136 4.864a.9.9 0 0 1 0 1.272L3.273 12l5.863 5.864a.9.9 0 1 1-1.272 1.272l-6.5-6.5a.9.9 0 0 1 0-1.272l6.5-6.5a.9.9 0 0 1 1.272 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftTightSmallIcon)
export default ForwardRef
