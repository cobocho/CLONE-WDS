import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgShareIosIcon = (
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
      d="M16.273 7.127A.9.9 0 0 1 15 7.149l-2.1-2.027V14.5a.9.9 0 0 1-1.8 0V5.12L9 7.15a.9.9 0 1 1-1.25-1.295l3.625-3.5a.9.9 0 0 1 1.25 0l3.625 3.5a.9.9 0 0 1 .023 1.273ZM20.9 9.999v9.43c0 .255 0 .497-.016.701a2 2 0 0 1-.19.733 1.9 1.9 0 0 1-.831.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H5.57c-.254 0-.496 0-.7-.017a1.9 1.9 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7V10h1.8v10a.1.1 0 0 0 .1.1h14a.1.1 0 0 0 .1-.1V10z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgShareIosIcon)
export default ForwardRef
