import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleQuestionFillIcon = (
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
      d="M2.1 12c0-5.468 4.433-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9c-5.467 0-9.9-4.432-9.9-9.9M13 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m.525-9.561a3.59 3.59 0 0 0-3.289.124 3.3 3.3 0 0 0-1.203 1.17 3.04 3.04 0 0 0-.432 1.608l1.8-.03a1.24 1.24 0 0 1 .179-.657 1.5 1.5 0 0 1 .547-.527 1.79 1.79 0 0 1 1.632-.06c.251.119.455.29.599.49a1.23 1.23 0 0 1 .098 1.31c-.11.21-.281.4-.506.545a4.1 4.1 0 0 0-1.341 1.329 3.76 3.76 0 0 0-.56 1.79v.344h1.8V14.1c.018-.316.117-.63.292-.914.18-.292.436-.548.755-.742l.008-.005.007-.004c.48-.307.876-.728 1.14-1.23a3.03 3.03 0 0 0-.23-3.195 3.34 3.34 0 0 0-1.296-1.07Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleQuestionFillIcon)
export default ForwardRef
