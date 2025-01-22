import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNavigationMypageIcon = (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 0a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 12 12m0 1.667A8.3 8.3 0 0 0 5.346 17 8.31 8.31 0 0 0 12 20.333 8.31 8.31 0 0 0 18.654 17 8.31 8.31 0 0 0 12 13.667"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigationMypageIcon)
export default ForwardRef
