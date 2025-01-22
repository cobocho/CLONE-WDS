import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCoinsFillIcon = (
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
      d="M3.125 7c0-.754.411-1.368.923-1.822.514-.456 1.207-.826 1.988-1.119 1.57-.588 3.678-.934 5.964-.934s4.395.346 5.964.934c.782.293 1.475.663 1.988 1.119.512.454.923 1.068.923 1.822v9.796c0 1.052-.58 2.076-1.604 2.53-5.944 2.642-11.645 1.36-14.633-.008-.997-.457-1.513-1.46-1.513-2.45zm16 2.405v1.63c-5.922 2.565-11.689 1.198-14.25.022V9.405c.353.201.744.38 1.161.536 1.57.588 3.678.934 5.964.934s4.395-.346 5.964-.934a8 8 0 0 0 1.161-.536m-14.25 7.463v-.613c3.032 1.18 8.522 2.193 14.25-.029v.57c0 .43-.234.785-.564.932-5.36 2.38-10.52 1.223-13.195-.002-.281-.128-.49-.444-.49-.858Zm0-2.511c2.561 1.176 8.328 2.543 14.25-.022v-1.408c-5.728 2.221-11.218 1.209-14.25.028z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCoinsFillIcon)
export default ForwardRef
