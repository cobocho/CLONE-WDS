import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgSearchThickIcon = (
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
      fillRule="evenodd"
      d="M10 1.7a8.3 8.3 0 1 0 4.878 15.016l4.703 4.703a1.3 1.3 0 0 0 1.839-1.838l-4.704-4.703A8.3 8.3 0 0 0 10 1.7M4.3 10a5.7 5.7 0 1 1 11.4 0 5.7 5.7 0 0 1-11.4 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchThickIcon)
export default ForwardRef
