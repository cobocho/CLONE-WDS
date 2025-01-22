import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLockOpenFillIcon = (
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
      d="M8.9 6.889C8.9 5.262 10.264 3.9 12 3.9s3.1 1.362 3.1 2.989V7.5h1.8v-.611C16.9 4.22 14.682 2.1 12 2.1S7.1 4.22 7.1 6.889V10.1h-.53c-.254 0-.496 0-.7.017a1.9 1.9 0 0 0-.733.19 1.9 1.9 0 0 0-.83.83c-.13.255-.172.51-.19.733a9 9 0 0 0-.017.7v6.86c0 .254 0 .496.017.7.018.223.06.478.19.733a1.9 1.9 0 0 0 .83.83c.255.13.51.172.733.19.204.017.446.017.7.017h10.86c.254 0 .496 0 .7-.016.223-.019.478-.061.733-.191a1.9 1.9 0 0 0 .83-.83c.13-.255.172-.51.19-.733.017-.204.017-.446.017-.7v-6.86c0-.254 0-.496-.017-.7a1.9 1.9 0 0 0-.19-.732 1.9 1.9 0 0 0-.83-.83 1.9 1.9 0 0 0-.733-.191 9 9 0 0 0-.7-.017H8.9z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockOpenFillIcon)
export default ForwardRef
