import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuThickIcon = (
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
      d="M2.75 5c0-.69.56-1.25 1.25-1.25h16a1.25 1.25 0 0 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25m0 14c0-.69.56-1.25 1.25-1.25h16a1.25 1.25 0 0 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25M4 10.75a1.25 1.25 0 1 0 0 2.5h16a1.25 1.25 0 0 0 0-2.5z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMenuThickIcon)
export default ForwardRef
