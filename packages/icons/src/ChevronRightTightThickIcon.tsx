import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronRightTightThickIcon = (
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
      d="M1.58 3.08a1.3 1.3 0 0 0 0 1.838L8.663 12 1.58 19.08a1.3 1.3 0 0 0 1.838 1.839l8-8a1.3 1.3 0 0 0 0-1.839l-8-8a1.3 1.3 0 0 0-1.838 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronRightTightThickIcon)
export default ForwardRef
