import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreHorizontalIcon = (
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
      d="M19.25 13.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m-7.25 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M3 12a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 0 0 3 12"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontalIcon)
export default ForwardRef
