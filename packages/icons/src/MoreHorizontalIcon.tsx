import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMoreHorizontalIcon = (
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
      d="M19.25 13.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m-7.25 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M3 12a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 0 0 3 12"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontalIcon)
export default ForwardRef
