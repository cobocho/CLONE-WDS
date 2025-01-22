import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCirclePlusFillIcon = (
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
      d="M11.1 12.9V17h1.8v-4.1H17v-1.8h-4.1V7h-1.8v4.1H7v1.8zm-9-.9c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCirclePlusFillIcon)
export default ForwardRef
