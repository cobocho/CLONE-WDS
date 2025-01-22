import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCompassFillIcon = (
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
      d="M12 22.185c5.625 0 10.185-4.56 10.185-10.185S17.625 1.815 12 1.815 1.815 6.375 1.815 12 6.375 22.185 12 22.185M17.103 7.45c.08-.184.055-.374-.062-.49-.116-.118-.306-.142-.49-.063L10.046 9.7a.68.68 0 0 0-.347.347L6.897 16.55a.54.54 0 0 0-.046.238.38.38 0 0 0 .108.253c.117.117.307.14.49.062l6.506-2.802a.68.68 0 0 0 .347-.347zm-6.543 3.11a2.037 2.037 0 1 0 2.88 2.88 2.037 2.037 0 0 0-2.88-2.88"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompassFillIcon)
export default ForwardRef
