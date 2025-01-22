import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgHistoryIcon = (
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
      d="M2.1 12q0-.49.047-.97l1.792.175a8.1 8.1 0 1 0 7.266-7.266l-.175-1.792q.48-.047.97-.047c5.468 0 9.9 4.432 9.9 9.9s-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9m7.026-9.476q-.942.287-1.794.744l.85 1.587a8 8 0 0 1 1.466-.608zM5.719 4.347q-.752.62-1.372 1.372l1.391 1.143q.507-.617 1.124-1.124zM3.268 7.332a10 10 0 0 0-.744 1.794l1.723.522a8 8 0 0 1 .608-1.466zM10.6 7.5v5.856l.244.26 3 3.2 1.313-1.231-2.757-2.94V7.5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHistoryIcon)
export default ForwardRef
