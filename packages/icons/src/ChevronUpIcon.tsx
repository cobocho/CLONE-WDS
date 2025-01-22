import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgChevronUpIcon = (
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
      d="M3.364 16.136a.9.9 0 0 0 1.272 0L12 8.773l7.363 7.363a.9.9 0 0 0 1.273-1.272l-8-8a.9.9 0 0 0-1.272 0l-8 8a.9.9 0 0 0 0 1.272"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronUpIcon)
export default ForwardRef
