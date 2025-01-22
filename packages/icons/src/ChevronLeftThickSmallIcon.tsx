import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftThickSmallIcon = (
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
      d="M15.42 4.58a1.3 1.3 0 0 1 0 1.84L9.84 12l5.58 5.58a1.3 1.3 0 1 1-1.839 1.84l-6.5-6.5a1.3 1.3 0 0 1 0-1.84l6.5-6.5a1.3 1.3 0 0 1 1.839 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronLeftThickSmallIcon)
export default ForwardRef
