import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDownThickIcon = (
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
      d="M3.081 7.58a1.3 1.3 0 0 1 1.838 0L12 14.663l7.08-7.081a1.3 1.3 0 0 1 1.84 1.838l-8 8a1.3 1.3 0 0 1-1.84 0l-7.999-8a1.3 1.3 0 0 1 0-1.838Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDownThickIcon)
export default ForwardRef
