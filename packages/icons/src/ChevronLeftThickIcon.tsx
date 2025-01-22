import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronLeftThickIcon = (
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
      d="M16.42 3.08a1.3 1.3 0 0 1 0 1.839l-7.081 7.08 7.08 7.081a1.3 1.3 0 1 1-1.838 1.839l-8-8a1.3 1.3 0 0 1 0-1.839l8-8a1.3 1.3 0 0 1 1.839 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftThickIcon)
export default ForwardRef
