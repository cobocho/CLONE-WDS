import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleExclamationFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M2.1 12c0-5.468 4.433-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9c-5.467 0-9.9-4.432-9.9-9.9M13 16.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.9-9.5v7h1.8v-7z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleExclamationFillIcon)
export default ForwardRef
