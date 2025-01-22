import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChangeIcon = (
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
      d="M15.129 4.306a.9.9 0 0 0-1.147 1.388L17.498 8.6H4a.9.9 0 0 0 0 1.8h16a.9.9 0 0 0 .573-1.594zM8.87 19.694a.9.9 0 1 0 1.147-1.388L6.502 15.4H20a.9.9 0 0 0 0-1.8H4a.9.9 0 0 0-.573 1.594l5.444 4.5Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChangeIcon)
export default ForwardRef
