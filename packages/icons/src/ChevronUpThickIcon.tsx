import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronUpThickIcon = (
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
      d="M3.081 16.42a1.3 1.3 0 0 0 1.839 0L12 9.337l7.081 7.081a1.3 1.3 0 1 0 1.838-1.838l-8-8a1.3 1.3 0 0 0-1.838 0l-8 8a1.3 1.3 0 0 0 0 1.838Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronUpThickIcon)
export default ForwardRef
