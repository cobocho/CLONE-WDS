import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCompassIcon = (
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
      d="M16.816 8.38a.9.9 0 0 0-1.196-1.195L10.166 9.73a.9.9 0 0 0-.435.435L7.185 15.62a.9.9 0 0 0 1.196 1.196l5.455-2.546a.9.9 0 0 0 .435-.435zM13.001 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9s4.433 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.431-9.9-9.9-9.9M3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompassIcon)
export default ForwardRef
