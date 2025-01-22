import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgBubbleFillIcon = (
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
      d="M2.35 12a9.65 9.65 0 1 1 18.298 4.287l.495 1.813c.111.41.211.776.264 1.076.054.305.09.691-.057 1.077a1.9 1.9 0 0 1-1.097 1.097c-.386.147-.772.11-1.076.057-.3-.053-.667-.153-1.077-.265l-1.812-.494A9.65 9.65 0 0 1 2.35 12"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBubbleFillIcon)
export default ForwardRef
