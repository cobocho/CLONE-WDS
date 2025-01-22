import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgRefreshIcon = (
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
      d="M8.632 5.187A7.6 7.6 0 0 1 17.809 7.1H16a.9.9 0 1 0 0 1.8h4a.9.9 0 0 0 .9-.9V4a.9.9 0 0 0-1.8 0v1.84a9.4 9.4 0 1 0 2.3 6.168.9.9 0 1 0-1.8-.002A7.6 7.6 0 1 1 8.632 5.187"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRefreshIcon)
export default ForwardRef
