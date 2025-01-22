import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLineHorizontalIcon = (
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
      d="M5.1 12a.9.9 0 0 1 .9-.9h12a.9.9 0 0 1 0 1.8H6a.9.9 0 0 1-.9-.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLineHorizontalIcon)
export default ForwardRef
