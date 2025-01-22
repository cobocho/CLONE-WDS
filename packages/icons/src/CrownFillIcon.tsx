import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCrownFillIcon = (
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
      d="M12 2.6a.9.9 0 0 1 .806.499l2.396 4.813 5.366-2.94a.9.9 0 0 1 1.313.973l-2.25 10.74a.9.9 0 0 1-.88.715H5.25a.9.9 0 0 1-.881-.716L2.12 5.945a.9.9 0 0 1 1.313-.974L8.8 7.912 11.195 3.1a.9.9 0 0 1 .806-.5ZM4.6 20a.9.9 0 0 1 .9-.9h13a.9.9 0 0 1 0 1.8h-13a.9.9 0 0 1-.9-.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCrownFillIcon)
export default ForwardRef
