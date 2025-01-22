import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMoreVerticalIcon = (
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
      d="M13.75 4.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 7.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M12 21a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreVerticalIcon)
export default ForwardRef
