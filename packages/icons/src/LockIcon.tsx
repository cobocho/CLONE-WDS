import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLockIcon = (
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
      d="M8.9 6.889C8.9 5.262 10.264 3.9 12 3.9s3.1 1.362 3.1 2.989V10.1H8.9zM7.1 10.1V6.89C7.1 4.22 9.318 2.1 12 2.1s4.9 2.12 4.9 4.789V10.1h.53c.254 0 .496 0 .7.017.223.018.478.06.733.19a1.9 1.9 0 0 1 .83.83c.13.256.172.51.19.733.017.204.017.446.017.7v6.86c0 .254 0 .496-.016.7a1.9 1.9 0 0 1-.191.733 1.9 1.9 0 0 1-.83.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H6.57c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.831 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7v-6.86c0-.254 0-.496.017-.7.018-.222.06-.477.19-.732a1.9 1.9 0 0 1 .83-.83c.256-.13.51-.173.733-.191.204-.017.446-.017.7-.017zM6 11.9a.1.1 0 0 0-.1.1v8a.1.1 0 0 0 .1.1h12a.1.1 0 0 0 .1-.1v-8a.1.1 0 0 0-.1-.1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockIcon)
export default ForwardRef
