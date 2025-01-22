import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgExclamationIcon = (
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
      d="M13.2 18.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M11.1 15.4V4h1.8v11.4z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationIcon)
export default ForwardRef
