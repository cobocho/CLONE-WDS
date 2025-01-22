import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleCheckIcon = (
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
      d="m17.146 9.627-6.47 6.665-3.822-3.938L8.146 11.1l2.53 2.608 5.178-5.335z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2M2.1 12c0-5.468 4.433-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9c-5.467 0-9.9-4.432-9.9-9.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleCheckIcon)
export default ForwardRef
