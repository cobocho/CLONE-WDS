import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDoubleLeftThickSmallIcon = (
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
      d="M19.92 6.417a1.3 1.3 0 1 0-1.838-1.838l-6.5 6.5a1.3 1.3 0 0 0 0 1.838l6.5 6.5a1.3 1.3 0 1 0 1.838-1.838l-5.58-5.58zm-8 0a1.3 1.3 0 1 0-1.84-1.837l-6.5 6.5a1.3 1.3 0 0 0 0 1.839l6.5 6.5a1.3 1.3 0 1 0 1.839-1.839L6.339 12l5.58-5.581Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDoubleLeftThickSmallIcon)
export default ForwardRef
