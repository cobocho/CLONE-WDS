import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPersonFillIcon = (
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
      d="M7.322 7.278a4.678 4.678 0 1 1 9.356 0 4.678 4.678 0 0 1-9.356 0M12 13.1c2.932 0 5.805.822 8.31 2.341.193.117.427.26.623.485.166.19.302.432.378.673.091.286.09.576.09.819v1.511c0 .255 0 .497-.017.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.831.83c-.255.13-.51.173-.733.191-.204.017-.446.017-.7.017H5.07c-.254 0-.496 0-.7-.017a1.9 1.9 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7v-1.512c0-.243-.001-.534.09-.82.076-.24.212-.482.377-.673.197-.225.43-.367.624-.484a16.03 16.03 0 0 1 8.31-2.34Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPersonFillIcon)
export default ForwardRef
