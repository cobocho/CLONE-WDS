import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLocationFillIcon = (
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
      d="M5.679 5.05a8.22 8.22 0 0 1 6.318-2.95 8.21 8.21 0 0 1 6.32 2.95c2.864 3.407 2.42 8.433-.662 11.525l-.001.002a261 261 0 0 0-4.605 4.765l-.156.165a1.227 1.227 0 0 1-1.791 0l-.156-.165a261 261 0 0 0-4.605-4.765l-.001-.002C3.26 13.484 2.813 8.448 5.679 5.05m3.538 5.29a2.78 2.78 0 0 1 2.78-2.78 2.78 2.78 0 0 1 2.78 2.78 2.78 2.78 0 0 1-2.78 2.78 2.78 2.78 0 0 1-2.78-2.78"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLocationFillIcon)
export default ForwardRef
