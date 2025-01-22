import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgViewSlashFillIcon = (
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
      d="m16.13 18.13 2.634 2.634 1.272-1.273L3.773 3.228 2.5 4.5l2.786 2.786A11.45 11.45 0 0 0 1.7 11.608a.91.91 0 0 0 0 .784A11.4 11.4 0 0 0 12 18.9c1.456 0 2.849-.273 4.13-.77m-2.56-2.559-1.472-1.473a2.1 2.1 0 0 1-2.196-2.196L8.43 10.43a3.9 3.9 0 0 0 5.142 5.141Zm2.253-2.794 3.478 3.479a11.4 11.4 0 0 0 3-3.864.91.91 0 0 0 0-.784A11.4 11.4 0 0 0 12 5.1c-1.168 0-2.294.176-3.354.501l2.576 2.577a3.9 3.9 0 0 1 4.6 4.6Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgViewSlashFillIcon)
export default ForwardRef
