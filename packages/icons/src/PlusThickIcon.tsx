import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPlusThickIcon = (
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
      d="M12 1.95a1.3 1.3 0 0 1 1.3 1.3v7.45h7.45a1.3 1.3 0 0 1 0 2.6H13.3v7.45a1.3 1.3 0 0 1-2.6 0V13.3H3.25a1.3 1.3 0 0 1 0-2.6h7.45V3.25a1.3 1.3 0 0 1 1.3-1.3"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPlusThickIcon)
export default ForwardRef
