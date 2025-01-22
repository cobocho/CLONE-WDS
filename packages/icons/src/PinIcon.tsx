import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPinIcon = (
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
      d="M8.996 2.6H18v1.8h-2.1v5.728l3.32 4.432A.9.9 0 0 1 18.5 16h-5.6v6l-.9 1-.9-1v-6H5.5a.9.9 0 0 1-.72-1.44l3.32-4.432V4.4H6V2.6zM9.9 4.4v6.027a.9.9 0 0 1-.18.54L7.3 14.2h9.403l-2.422-3.233a.9.9 0 0 1-.18-.54V4.4z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPinIcon)
export default ForwardRef
