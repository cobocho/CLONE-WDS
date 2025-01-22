import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgDocumentFillIcon = (
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
      d="M5.37 2.117c.204-.017.446-.017.7-.017h7.63v6.8h6.7v10.53c0 .254 0 .496-.016.7a1.9 1.9 0 0 1-.191.733 1.9 1.9 0 0 1-.83.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H6.07c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.732-.191 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7V4.57c0-.254 0-.496.017-.7.018-.222.06-.478.19-.732a1.9 1.9 0 0 1 .83-.83c.255-.13.51-.173.733-.191"
      clipRule="evenodd"
    />
    <path fill="#171719" d="m19.565 6.826-3.79-3.98v3.98z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentFillIcon)
export default ForwardRef
