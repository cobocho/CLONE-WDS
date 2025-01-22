import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgListIcon = (
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
      d="M3.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8m0 12a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M2 12a1.4 1.4 0 1 1 2.8 0A1.4 1.4 0 0 1 2 12m6-6.9a.9.9 0 0 0 0 1.8h13a.9.9 0 1 0 0-1.8zM7.1 18a.9.9 0 0 1 .9-.9h13a.9.9 0 1 1 0 1.8H8a.9.9 0 0 1-.9-.9m.9-6.9a.9.9 0 1 0 0 1.8h13a.9.9 0 1 0 0-1.8z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgListIcon)
export default ForwardRef
