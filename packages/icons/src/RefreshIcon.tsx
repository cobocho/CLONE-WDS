import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefreshIcon = (
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
      d="M8.632 5.187A7.6 7.6 0 0 1 17.809 7.1H16a.9.9 0 1 0 0 1.8h4a.9.9 0 0 0 .9-.9V4a.9.9 0 0 0-1.8 0v1.84a9.4 9.4 0 1 0 2.3 6.168.9.9 0 1 0-1.8-.002A7.6 7.6 0 1 1 8.632 5.187"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRefreshIcon)
export default ForwardRef
