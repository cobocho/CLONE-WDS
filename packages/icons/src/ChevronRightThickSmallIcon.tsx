import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronRightThickSmallIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#171719"
      d="M8.582 4.581a1.3 1.3 0 0 0 0 1.838L14.162 12l-5.58 5.581a1.3 1.3 0 1 0 1.838 1.838l6.5-6.5a1.3 1.3 0 0 0 0-1.838l-6.5-6.5a1.3 1.3 0 0 0-1.838 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronRightThickSmallIcon)
export default ForwardRef
