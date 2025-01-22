import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCrownIcon = (
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
      d="M12 2.6a.9.9 0 0 1 .806.5l2.396 4.813 5.366-2.941a.9.9 0 0 1 1.313.974l-2.25 10.739a.9.9 0 0 1-.88.715H5.25a.9.9 0 0 1-.881-.715L2.12 5.945a.9.9 0 0 1 1.313-.973l5.366 2.941 2.396-4.814A.9.9 0 0 1 12 2.6m0 2.92L9.994 9.553a.9.9 0 0 1-1.239.388L4.282 7.49l1.7 8.11h12.037l1.7-8.11-4.474 2.451a.9.9 0 0 1-1.238-.388zM4.6 20a.9.9 0 0 1 .9-.9h13a.9.9 0 0 1 0 1.8h-13a.9.9 0 0 1-.9-.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCrownIcon)
export default ForwardRef
