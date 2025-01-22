import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCloseThickIcon = (
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
      d="M4.33 4.33a1.3 1.3 0 0 1 1.84 0L12 10.163l5.83-5.831a1.3 1.3 0 0 1 1.84 1.838L13.837 12l5.831 5.83a1.3 1.3 0 1 1-1.838 1.84L12 13.837 6.168 19.67a1.3 1.3 0 1 1-1.838-1.838L10.16 12 4.33 6.17a1.3 1.3 0 0 1 0-1.84"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCloseThickIcon)
export default ForwardRef
