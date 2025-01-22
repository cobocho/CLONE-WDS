import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronRightThickIcon = (
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
      d="M7.581 3.08a1.3 1.3 0 0 0 0 1.839l7.081 7.08-7.08 7.081a1.3 1.3 0 0 0 1.838 1.84l8-8a1.3 1.3 0 0 0 0-1.839l-8-8a1.3 1.3 0 0 0-1.839 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronRightThickIcon)
export default ForwardRef
