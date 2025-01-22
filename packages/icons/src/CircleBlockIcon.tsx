import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleBlockIcon = (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9s4.433 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9M3.9 12a8.1 8.1 0 0 1 13.156-6.329L5.672 17.056A8.07 8.07 0 0 1 3.9 12m3.044 6.329A8.1 8.1 0 0 0 18.33 6.944z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleBlockIcon)
export default ForwardRef
