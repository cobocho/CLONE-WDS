import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppsIcon = (
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
      d="M6.6 4.95a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0m14.1 0a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M12 6.6a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3M6.6 19.05a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0m12.45 1.65a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m-5.4-1.65a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0m-8.7-5.4a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3M20.7 12a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M12 13.65a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAppsIcon)
export default ForwardRef
