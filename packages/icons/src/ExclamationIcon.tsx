import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExclamationIcon = (
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
      d="M13.2 18.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M11.1 15.4V4h1.8v11.4z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationIcon)
export default ForwardRef
