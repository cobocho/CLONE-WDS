import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgBookmarkIcon = (
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
      d="M7.366 2.6h9.267c.392 0 .738 0 1.025.024.306.025.623.08.931.238a2.4 2.4 0 0 1 1.05 1.049c.156.308.212.625.237.93.024.288.024.634.024 1.026V21.5a.9.9 0 0 1-1.367.77L12 18.302l-6.533 3.966A.9.9 0 0 1 4.1 21.5V5.867c0-.392 0-.738.023-1.025.025-.306.081-.623.238-.931a2.4 2.4 0 0 1 1.05-1.05 2.5 2.5 0 0 1 .93-.237c.287-.024.634-.024 1.025-.024m-.878 1.818c-.195.015-.248.041-.26.047a.6.6 0 0 0-.263.263c-.006.012-.032.066-.048.26A13 13 0 0 0 5.9 5.9v14l5.633-3.42a.9.9 0 0 1 .934 0L18.1 19.9v-14c0-.435-.001-.707-.018-.912-.016-.194-.041-.248-.048-.26a.6.6 0 0 0-.262-.263c-.012-.006-.066-.032-.26-.047A13 13 0 0 0 16.6 4.4H7.4c-.435 0-.707 0-.912.018"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarkIcon)
export default ForwardRef
