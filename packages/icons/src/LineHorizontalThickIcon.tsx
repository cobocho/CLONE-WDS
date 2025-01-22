import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineHorizontalThickIcon = (
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
      d="M4.7 12A1.3 1.3 0 0 1 6 10.7h12a1.3 1.3 0 1 1 0 2.6H6A1.3 1.3 0 0 1 4.7 12"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLineHorizontalThickIcon)
export default ForwardRef
