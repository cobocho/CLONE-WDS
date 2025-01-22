import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronDoubleLeftThickIcon = (
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
      d="M21.42 4.917a1.3 1.3 0 1 0-1.84-1.837l-8 8a1.3 1.3 0 0 0 0 1.838l8 8a1.3 1.3 0 1 0 1.838-1.838L14.338 12l7.08-7.082Zm-9.5 0a1.3 1.3 0 1 0-1.84-1.837l-8 8a1.3 1.3 0 0 0 0 1.839l8 8a1.3 1.3 0 1 0 1.838-1.839L4.84 12l7.08-7.081Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDoubleLeftThickIcon)
export default ForwardRef
