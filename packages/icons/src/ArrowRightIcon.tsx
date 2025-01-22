import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgArrowRightIcon = (
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
      d="M21.137 12.636a.9.9 0 0 0 0-1.273l-7-7a.9.9 0 0 0-1.273 1.273l5.463 5.464H3.5a.9.9 0 0 0 0 1.8h14.828l-5.464 5.463a.9.9 0 0 0 1.273 1.273z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowRightIcon)
export default ForwardRef
