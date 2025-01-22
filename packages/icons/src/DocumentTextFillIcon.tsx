import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgDocumentTextFillIcon = (
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
      d="M6.07 2.1c-.254 0-.496 0-.7.016-.222.018-.478.06-.732.19a1.9 1.9 0 0 0-.83.831c-.13.255-.173.51-.191.733a9 9 0 0 0-.017.7v14.86c0 .254 0 .496.017.7.018.222.06.477.19.732a1.9 1.9 0 0 0 .83.83c.256.13.51.173.733.191.204.017.446.017.7.017h11.86c.254 0 .496 0 .7-.017.223-.018.478-.06.733-.19a1.9 1.9 0 0 0 .83-.83c.13-.256.172-.51.19-.733.017-.204.017-.446.017-.7V8.9h-6.7V2.1zm6.43 13.2h-5v-1.8h5zm-5 3h5v-1.8h-5z"
      clipRule="evenodd"
    />
    <path fill="#171719" d="m15.775 2.845 3.79 3.98h-3.79z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentTextFillIcon)
export default ForwardRef
