import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgDotIcon = (
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
      d="M18 12c0 3.312-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDotIcon)
export default ForwardRef
