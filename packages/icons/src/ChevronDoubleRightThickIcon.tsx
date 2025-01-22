import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronDoubleRightThickIcon = (
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
      d="M2.581 4.917A1.3 1.3 0 0 1 4.42 3.08l8 8a1.3 1.3 0 0 1 0 1.838l-8 8a1.3 1.3 0 1 1-1.84-1.838L9.66 12 2.58 4.918Zm9.5 0A1.3 1.3 0 1 1 13.92 3.08l8 8a1.3 1.3 0 0 1 0 1.838l-8 8a1.3 1.3 0 1 1-1.839-1.838l7.08-7.08z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M2.581 4.917A1.3 1.3 0 0 1 4.42 3.08l8 8a1.3 1.3 0 0 1 0 1.838l-8 8a1.3 1.3 0 1 1-1.84-1.838L9.66 12 2.58 4.918Zm9.5 0A1.3 1.3 0 1 1 13.92 3.08l8 8a1.3 1.3 0 0 1 0 1.838l-8 8a1.3 1.3 0 1 1-1.839-1.838l7.08-7.08z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDoubleRightThickIcon)
export default ForwardRef
