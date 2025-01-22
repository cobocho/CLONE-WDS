import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgTrophyFillIcon = (
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
      d="M5.6 2.6h12.8v3.5h4.5V7c0 5.61-4.441 10.183-10 10.393v2.208h4.6a.9.9 0 1 1 0 1.8h-11a.9.9 0 0 1 0-1.8h4.6v-2.208c-5.558-.21-10-4.783-10-10.392v-.9h4.5zM18.4 11V7.9h2.654a8.6 8.6 0 0 1-3.302 5.912A6.4 6.4 0 0 0 18.4 11M5.6 11c0 1.009.234 1.963.65 2.812A8.6 8.6 0 0 1 2.946 7.9H5.6z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrophyFillIcon)
export default ForwardRef
