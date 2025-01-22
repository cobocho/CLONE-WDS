import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgArrowDownIcon = (
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
      d="M11.364 21.137a.9.9 0 0 0 1.273 0l7-7a.9.9 0 0 0-1.273-1.273L12.9 18.327V3.5a.9.9 0 0 0-1.8 0v14.827l-5.463-5.463a.9.9 0 1 0-1.273 1.272l7 7Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownIcon)
export default ForwardRef
