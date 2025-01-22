import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleInfoFillIcon = (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9s4.433 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.9 10v-6.5h1.8V17z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleInfoFillIcon)
export default ForwardRef
