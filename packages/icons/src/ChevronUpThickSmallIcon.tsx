import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronUpThickSmallIcon = (
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
      d="M4.08 15.92a1.3 1.3 0 0 0 1.84 0L12 9.837l6.08 6.081a1.3 1.3 0 1 0 1.84-1.838l-7-7a1.3 1.3 0 0 0-1.84 0l-7 7a1.3 1.3 0 0 0 0 1.838Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronUpThickSmallIcon)
export default ForwardRef
