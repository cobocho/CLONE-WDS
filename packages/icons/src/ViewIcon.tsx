import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewIcon = (
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
      d="M3.524 12a9.6 9.6 0 0 1 8.482-5.1 9.6 9.6 0 0 1 8.482 5.1 9.6 9.6 0 0 1-8.482 5.1A9.6 9.6 0 0 1 3.524 12m18.782.392a.91.91 0 0 0 0-.784 11.4 11.4 0 0 0-10.3-6.508 11.4 11.4 0 0 0-10.3 6.508.91.91 0 0 0 0 .784 11.4 11.4 0 0 0 10.3 6.508c4.545 0 8.469-2.66 10.3-6.508M9.906 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m2.1-3.9a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgViewIcon)
export default ForwardRef
