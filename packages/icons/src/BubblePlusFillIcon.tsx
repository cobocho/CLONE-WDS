import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgBubblePlusFillIcon = (
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
      d="M12 2.35a9.65 9.65 0 1 0 4.287 18.298l1.775.483.038.01c.41.113.776.213 1.076.266.305.053.691.09 1.077-.057a1.9 1.9 0 0 0 1.097-1.098c.147-.385.11-.771.057-1.076-.053-.3-.153-.666-.265-1.076l-.01-.038-.484-1.775A9.65 9.65 0 0 0 12 2.35m.9 8.75v-4h-1.8v4h-4v1.8h4v4h1.8v-4h4v-1.8z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBubblePlusFillIcon)
export default ForwardRef
