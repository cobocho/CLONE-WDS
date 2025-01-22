import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrophyIcon = (
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
      d="M6.5 2.6h-.9v3.5H1.1V7c0 5.61 4.442 10.182 10 10.392V19.6H6.5a.9.9 0 1 0 0 1.8h11a.9.9 0 1 0 0-1.8h-4.6v-2.208c5.558-.21 10-4.782 10-10.392v-.9h-4.5V2.6zm11.9 5.3V11a6.4 6.4 0 0 1-.649 2.811 8.6 8.6 0 0 0 3.302-5.91zM6.249 13.811a6.4 6.4 0 0 1-.65-2.81V7.9H2.948a8.6 8.6 0 0 0 3.302 5.91Zm1.15-2.81V4.4h9.2V11a4.6 4.6 0 0 1-9.2 0Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrophyIcon)
export default ForwardRef
