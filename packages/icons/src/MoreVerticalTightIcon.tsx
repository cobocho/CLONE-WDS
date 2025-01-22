import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreVerticalTightIcon = (
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
      d="M7.75 4.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 7.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M6 21a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 6 21"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreVerticalTightIcon)
export default ForwardRef
