import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgFullIcon = (
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
      d="M13.339 9.89a.9.9 0 1 0 1.322 1.22l4.44-4.808V10a.9.9 0 1 0 1.8 0V4a.9.9 0 0 0-.9-.9h-5.5a.9.9 0 1 0 0 1.8h3.444zM4.9 14a.9.9 0 1 0-1.8 0v6a.9.9 0 0 0 .9.9h5.5a.9.9 0 1 0 0-1.8H6.173l4.463-4.464a.9.9 0 1 0-1.272-1.272L4.9 17.827z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFullIcon)
export default ForwardRef
