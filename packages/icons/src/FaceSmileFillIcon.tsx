import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgFaceSmileFillIcon = (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9s4.433 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6.452 2.022a.9.9 0 0 1 1.23.326 2.63 2.63 0 0 0 2.272 1.312 2.63 2.63 0 0 0 2.272-1.312.9.9 0 1 1 1.556.904 4.43 4.43 0 0 1-3.828 2.208 4.43 4.43 0 0 1-3.828-2.208.9.9 0 0 1 .326-1.23"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFaceSmileFillIcon)
export default ForwardRef
