import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPauseIcon = (
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
      d="M10 5H6.5v14H10zm7.5 0H14v14h3.5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPauseIcon)
export default ForwardRef
