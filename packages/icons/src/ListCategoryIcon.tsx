import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgListCategoryIcon = (
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
      d="M3.125 6c0-.483.392-.875.875-.875h16a.875.875 0 0 1 0 1.75H4A.875.875 0 0 1 3.125 6m0 12c0-.483.392-.875.875-.875h10a.875.875 0 0 1 0 1.75H4A.875.875 0 0 1 3.125 18M4 11.125a.875.875 0 0 0 0 1.75h16a.875.875 0 0 0 0-1.75z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgListCategoryIcon)
export default ForwardRef
