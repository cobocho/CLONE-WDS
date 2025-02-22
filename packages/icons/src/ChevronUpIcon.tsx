import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronUpIcon = (
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
      d="M3.364 16.136a.9.9 0 0 0 1.272 0L12 8.773l7.363 7.363a.9.9 0 0 0 1.273-1.272l-8-8a.9.9 0 0 0-1.272 0l-8 8a.9.9 0 0 0 0 1.272"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronUpIcon)
export default ForwardRef
