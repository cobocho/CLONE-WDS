import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgBookmarkFillIcon = (
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
      d="M7.367 2.6c-.392 0-.738 0-1.026.024-.305.025-.622.08-.93.238A2.4 2.4 0 0 0 4.36 3.91a2.4 2.4 0 0 0-.238.93c-.023.288-.023.634-.023 1.026V21.5a.9.9 0 0 0 1.367.77L12 18.302l6.533 3.966A.9.9 0 0 0 19.9 21.5V5.867c0-.392 0-.738-.023-1.025-.025-.306-.081-.623-.239-.931a2.4 2.4 0 0 0-1.048-1.05 2.4 2.4 0 0 0-.931-.237 14 14 0 0 0-1.026-.024z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarkFillIcon)
export default ForwardRef
