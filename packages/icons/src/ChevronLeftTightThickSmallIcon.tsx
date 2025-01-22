import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftTightThickSmallIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={24}
    fill="none"
    viewBox="0 0 12 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      d="M9.42 4.58a1.3 1.3 0 0 1 0 1.84L3.838 12l5.58 5.58a1.3 1.3 0 0 1-1.838 1.84l-6.5-6.5a1.3 1.3 0 0 1 0-1.84l6.5-6.5a1.3 1.3 0 0 1 1.838 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftTightThickSmallIcon)
export default ForwardRef
