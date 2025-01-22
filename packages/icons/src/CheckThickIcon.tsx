import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckThickIcon = (
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
      d="M19.67 6.581a1.3 1.3 0 0 1 0 1.838l-9 9a1.3 1.3 0 0 1-1.839 0l-4.5-4.5a1.3 1.3 0 1 1 1.839-1.838l3.58 3.58 8.081-8.08a1.3 1.3 0 0 1 1.839 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckThickIcon)
export default ForwardRef
