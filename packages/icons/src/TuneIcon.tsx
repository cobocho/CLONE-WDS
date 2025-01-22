import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTuneIcon = (
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
      d="M14.5 6.3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4M3 9h8.145a3.502 3.502 0 0 0 6.71 0H21V7.2h-3.092a3.502 3.502 0 0 0-6.816 0H3zm9.855 8H21v-1.8h-8.092a3.502 3.502 0 0 0-6.816 0H3V17h3.145a3.502 3.502 0 0 0 6.71 0M7.8 16a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTuneIcon)
export default ForwardRef
