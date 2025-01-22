import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMailIcon = (
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
      d="M4.32 3.855c-.253 0-.495 0-.7.017-.222.018-.477.06-.732.19a1.9 1.9 0 0 0-.83.83c-.13.255-.172.51-.19.733a9 9 0 0 0-.017.7v11.36c0 .254 0 .496.016.7.018.223.06.478.19.733a1.9 1.9 0 0 0 .831.83c.255.13.51.172.733.19.204.017.446.017.7.017h15.36c.254 0 .496 0 .7-.017.222-.018.477-.06.732-.19a1.9 1.9 0 0 0 .83-.83c.13-.255.173-.51.191-.733.017-.204.017-.446.017-.7V6.325c0-.254 0-.496-.017-.7a1.9 1.9 0 0 0-.19-.733 1.9 1.9 0 0 0-.83-.83 1.9 1.9 0 0 0-.733-.19c-.204-.017-.446-.017-.7-.017zm-.67 1.892a.1.1 0 0 1 .1-.1h16.5a.1.1 0 0 1 .1.1v12.5a.1.1 0 0 1-.1.1H3.75a.1.1 0 0 1-.1-.1zm3.155 1.795a.9.9 0 1 0-1.11 1.417l6.31 4.934 6.3-4.934a.9.9 0 1 0-1.11-1.417l-5.19 4.066z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMailIcon)
export default ForwardRef
