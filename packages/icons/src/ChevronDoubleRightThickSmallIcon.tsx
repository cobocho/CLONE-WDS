import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronDoubleRightThickSmallIcon = (
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
      fill="#000"
      fillRule="evenodd"
      d="M4.081 6.423A1.3 1.3 0 0 1 5.92 4.585l6.5 6.5a1.3 1.3 0 0 1 0 1.838l-6.5 6.5a1.3 1.3 0 0 1-1.839-1.838l5.581-5.581-5.58-5.58Zm8 0a1.3 1.3 0 1 1 1.839-1.838l6.5 6.5a1.3 1.3 0 0 1 0 1.838l-6.5 6.5a1.3 1.3 0 0 1-1.839-1.838l5.581-5.581-5.58-5.58Z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M4.081 6.423A1.3 1.3 0 0 1 5.92 4.585l6.5 6.5a1.3 1.3 0 0 1 0 1.838l-6.5 6.5a1.3 1.3 0 1 1-1.839-1.838l5.581-5.58zm8 0a1.3 1.3 0 1 1 1.839-1.838l6.5 6.5a1.3 1.3 0 0 1 0 1.838l-6.5 6.5a1.3 1.3 0 0 1-1.839-1.838l5.581-5.58-5.58-5.582Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDoubleRightThickSmallIcon)
export default ForwardRef
