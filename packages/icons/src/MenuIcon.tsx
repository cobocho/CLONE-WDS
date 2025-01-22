import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMenuIcon = (
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
      d="M3.1 5a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8H4a.9.9 0 0 1-.9-.9m0 14a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8H4a.9.9 0 0 1-.9-.9m.9-7.9a.9.9 0 1 0 0 1.8h16a.9.9 0 1 0 0-1.8z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMenuIcon)
export default ForwardRef
