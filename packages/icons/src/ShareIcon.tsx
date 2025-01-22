import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgShareIcon = (
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
      d="M18 2a3 3 0 0 0-2.956 3.518L7.93 9.703a3 3 0 1 0 .195 4.415l6.977 4.104A3.004 3.004 0 0 0 18 22a3 3 0 1 0-1.93-5.297l-7.115-4.185a3 3 0 0 0-.057-1.296l6.977-4.104A3 3 0 1 0 18 2m-1.2 3a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0M6 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4M16.8 19a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgShareIcon)
export default ForwardRef
