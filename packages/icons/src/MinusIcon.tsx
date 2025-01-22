import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMinusIcon = (
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
      d="M2.35 12a.9.9 0 0 1 .9-.9h17.5a.9.9 0 0 1 0 1.8H3.25a.9.9 0 0 1-.9-.9"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMinusIcon)
export default ForwardRef
