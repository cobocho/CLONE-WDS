import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgTemplateIcon = (
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
      d="M5.07 2.6c-.254 0-.496 0-.7.016-.222.018-.478.06-.732.19a1.9 1.9 0 0 0-.83.831c-.13.255-.173.51-.191.733a9 9 0 0 0-.017.7v13.86c0 .254 0 .496.017.7.018.222.06.477.19.732a1.9 1.9 0 0 0 .83.83c.256.13.51.173.733.191.204.017.446.017.7.017h13.86c.254 0 .496 0 .7-.017.223-.018.478-.06.733-.19a1.9 1.9 0 0 0 .83-.83c.13-.256.172-.51.19-.733.017-.204.017-.446.017-.7V5.07c0-.254 0-.497-.016-.7a1.9 1.9 0 0 0-.191-.733 1.9 1.9 0 0 0-.83-.83 1.9 1.9 0 0 0-.733-.19c-.204-.017-.446-.017-.7-.017zM4.4 4.5a.1.1 0 0 1 .1-.1h15a.1.1 0 0 1 .1.1v4.1H4.4zm0 5.9v9.1a.1.1 0 0 0 .1.1h4.1v-9.2zm6 9.2h9.1a.1.1 0 0 0 .1-.1v-9.1h-9.2z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTemplateIcon)
export default ForwardRef
