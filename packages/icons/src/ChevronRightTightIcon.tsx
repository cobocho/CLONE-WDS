import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronRightTightIcon = (
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
      d="M1.863 3.363a.9.9 0 0 0 0 1.273l7.364 7.363-7.364 7.364a.9.9 0 0 0 1.273 1.273l8-8a.9.9 0 0 0 0-1.273l-8-8a.9.9 0 0 0-1.273 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronRightTightIcon)
export default ForwardRef
