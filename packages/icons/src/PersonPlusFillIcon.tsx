import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPersonPlusFillIcon = (
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
      d="M7.322 7.278a4.678 4.678 0 1 1 9.356 0 4.678 4.678 0 0 1-9.356 0M12 13.1c2.932 0 5.806.822 8.31 2.341.193.117.427.26.623.485.166.19.302.432.379.673.09.286.09.576.089.819v1.511c0 .255 0 .497-.017.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.256.13-.511.173-.733.191-.204.017-.447.017-.7.017H5.07c-.255 0-.497 0-.7-.017a1.9 1.9 0 0 1-.733-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.19-.733 9 9 0 0 1-.018-.7v-1.512c0-.243-.001-.534.09-.82.076-.24.212-.482.378-.673.196-.225.43-.367.623-.484a16.03 16.03 0 0 1 8.31-2.34Zm7.1-3V8.5h1.8v1.6h1.6v1.8h-1.6v1.6h-1.8v-1.6h-1.6v-1.8z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPersonPlusFillIcon)
export default ForwardRef
