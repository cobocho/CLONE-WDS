import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgVerifiedCheckFillIcon = (
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
      d="M10.026 2.427a2.77 2.77 0 0 1 3.95 0l1.112 1.13a.97.97 0 0 0 .7.29l1.586-.012a2.77 2.77 0 0 1 2.792 2.792l-.012 1.586a.97.97 0 0 0 .29.7l1.13 1.113a2.77 2.77 0 0 1 0 3.95l-1.13 1.112a.97.97 0 0 0-.29.7l.012 1.586a2.77 2.77 0 0 1-2.792 2.792l-1.586-.012a.97.97 0 0 0-.7.29l-1.113 1.13a2.77 2.77 0 0 1-3.95 0l-1.112-1.13a.97.97 0 0 0-.7-.29l-1.586.012a2.77 2.77 0 0 1-2.792-2.792l.012-1.586a.97.97 0 0 0-.29-.7l-1.13-1.113a2.77 2.77 0 0 1 0-3.949l1.13-1.113a.97.97 0 0 0 .29-.7l-.012-1.586a2.77 2.77 0 0 1 2.792-2.792l1.586.012a.97.97 0 0 0 .7-.29zm5.35 6.426 1.25 1.295-5.802 5.604-3.449-3.331 1.25-1.295 2.199 2.123 4.551-4.396Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVerifiedCheckFillIcon)
export default ForwardRef
