import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCheckIcon = (
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
      d="M19.387 6.863a.9.9 0 0 1 0 1.273l-9 9a.9.9 0 0 1-1.273 0l-4.5-4.5a.9.9 0 1 1 1.273-1.272l3.863 3.863 8.364-8.364a.9.9 0 0 1 1.273 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckIcon)
export default ForwardRef
