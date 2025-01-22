import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgNavigationRecruitIcon = (
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
      d="M10.855 2.55a3.5 3.5 0 0 0-3.5 3.5v.105H6.15A3.15 3.15 0 0 0 3 9.304V18.3a3.15 3.15 0 0 0 3.15 3.15h11.7A3.15 3.15 0 0 0 21 18.3V9.304a3.15 3.15 0 0 0-3.15-3.15h-1.295V6.05a3.5 3.5 0 0 0-3.5-3.5zm3.7 3.605V6.05a1.5 1.5 0 0 0-1.5-1.5h-2.2a1.5 1.5 0 0 0-1.5 1.5v.105z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigationRecruitIcon)
export default ForwardRef
