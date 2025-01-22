import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgArrowLeftIcon = (
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
      d="M2.864 11.364a.9.9 0 0 0 0 1.272l7 7a.9.9 0 1 0 1.272-1.273L5.673 12.9H20.5a.9.9 0 0 0 0-1.8H5.673l5.463-5.464a.9.9 0 0 0-1.272-1.272z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowLeftIcon)
export default ForwardRef
