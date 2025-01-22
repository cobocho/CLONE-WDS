import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewFillIcon = (
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
      d="M22.3 12.392a.91.91 0 0 0 0-.784A11.4 11.4 0 0 0 12 5.1c-4.545 0-8.469 2.66-10.3 6.508a.91.91 0 0 0 0 .784A11.4 11.4 0 0 0 12 18.9a11.4 11.4 0 0 0 10.3-6.508M9.9 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0M12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgViewFillIcon)
export default ForwardRef
