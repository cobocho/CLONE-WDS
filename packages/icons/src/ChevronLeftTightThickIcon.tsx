import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronLeftTightThickIcon = (
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
      d="M10.42 3.08a1.3 1.3 0 0 1 0 1.838L3.338 12l7.08 7.081A1.3 1.3 0 1 1 8.58 20.92l-8-8a1.3 1.3 0 0 1 0-1.839l8-8a1.3 1.3 0 0 1 1.838 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftTightThickIcon)
export default ForwardRef
