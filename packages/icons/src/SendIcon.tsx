import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgSendIcon = (
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
      d="M4.046 4.867c-.422-.932.547-1.886 1.472-1.448l15.996 7.564a1.1 1.1 0 0 1 0 1.99l-16.09 7.605c-.93.44-1.9-.523-1.468-1.456l3.307-7.148zm15.36 7.11L6.4 18.127 8.818 12.9h5.213v-1.8H8.844L6.472 5.861z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSendIcon)
export default ForwardRef
