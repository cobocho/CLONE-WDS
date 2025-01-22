import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgDesktopFillIcon = (
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
      d="M4.318 3.1c-.254 0-.496 0-.7.017a1.9 1.9 0 0 0-.733.19 1.9 1.9 0 0 0-.83.83 1.9 1.9 0 0 0-.19.733c-.017.204-.017.446-.017.7v9.36c0 .254 0 .496.017.7.018.223.06.478.19.733a1.9 1.9 0 0 0 .83.83c.255.13.51.172.733.19.204.017.446.017.7.017h6.783v2.2H6v1.8h12v-1.8h-5.1v-2.2h6.777c.254 0 .496 0 .7-.016.223-.019.478-.061.733-.191a1.9 1.9 0 0 0 .83-.83c.13-.255.172-.51.19-.733.017-.204.017-.446.017-.7V5.57c0-.254 0-.496-.017-.7a1.9 1.9 0 0 0-.19-.732 1.9 1.9 0 0 0-.83-.83 1.9 1.9 0 0 0-.733-.191 9 9 0 0 0-.7-.017z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDesktopFillIcon)
export default ForwardRef
