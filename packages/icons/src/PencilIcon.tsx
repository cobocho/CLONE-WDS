import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPencilIcon = (
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
      d="M18.67 2.607a1.9 1.9 0 0 0-1.174 0 1.9 1.9 0 0 0-.652.384 9 9 0 0 0-.507.483l-.021.021L3.1 16.711v4.19h4.19L20.505 7.684l.021-.021c.18-.18.351-.351.484-.507.144-.17.295-.38.383-.653a1.9 1.9 0 0 0 0-1.174 1.9 1.9 0 0 0-.383-.653 9 9 0 0 0-.484-.507l-.696-.696a9 9 0 0 0-.507-.483 1.9 1.9 0 0 0-.652-.384Zm-.657 1.737a.1.1 0 0 1 .141 0l1.503 1.502a.1.1 0 0 1 0 .142L6.544 19.1H4.9v-1.644z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPencilIcon)
export default ForwardRef
