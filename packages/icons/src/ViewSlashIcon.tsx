import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgViewSlashIcon = (
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
      d="M14.712 16.712 13.57 15.57a3.9 3.9 0 0 1-5.141-5.142L6.576 8.577A9.65 9.65 0 0 0 3.518 12 9.6 9.6 0 0 0 12 17.1c.942 0 1.852-.136 2.712-.389Zm1.806-.74L8.22 7.673A9.6 9.6 0 0 1 12 6.9a9.6 9.6 0 0 1 8.482 5.1 9.64 9.64 0 0 1-3.964 3.972m1.32 1.321a11.45 11.45 0 0 0 4.462-4.901.91.91 0 0 0 0-.784A11.4 11.4 0 0 0 12 5.1c-1.847 0-3.592.44-5.135 1.22L3.773 3.226 2.5 4.5l2.786 2.786A11.45 11.45 0 0 0 1.7 11.608a.91.91 0 0 0 0 .784A11.4 11.4 0 0 0 12 18.9c1.456 0 2.849-.273 4.13-.771l2.634 2.634 1.272-1.273zm-7.936-5.39 2.196 2.195a2.1 2.1 0 0 1-2.195-2.195Zm5.92.874a3.9 3.9 0 0 0-4.6-4.6z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgViewSlashIcon)
export default ForwardRef
