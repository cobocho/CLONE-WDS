import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerifiedStarFillIcon = (
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
      d="M10.026 2.427a2.77 2.77 0 0 1 3.949 0l1.113 1.13a.97.97 0 0 0 .7.29l1.585-.012a2.77 2.77 0 0 1 2.793 2.792l-.012 1.586a.97.97 0 0 0 .29.7l1.13 1.113a2.77 2.77 0 0 1 0 3.95l-1.13 1.112a.97.97 0 0 0-.29.7l.012 1.586a2.77 2.77 0 0 1-2.793 2.792l-1.586-.012a.97.97 0 0 0-.7.29l-1.112 1.13a2.77 2.77 0 0 1-3.95 0l-1.112-1.13a.97.97 0 0 0-.7-.29l-1.586.012a2.77 2.77 0 0 1-2.792-2.792l.011-1.586a.97.97 0 0 0-.29-.7l-1.13-1.113a2.77 2.77 0 0 1 0-3.949l1.13-1.113a.97.97 0 0 0 .29-.7l-.011-1.586a2.77 2.77 0 0 1 2.792-2.792l1.586.012a.97.97 0 0 0 .7-.29zm2.333 5.3a.4.4 0 0 0-.717 0L10.623 9.79a.4.4 0 0 1-.301.22l-2.276.33a.4.4 0 0 0-.222.682l1.647 1.605a.4.4 0 0 1 .115.354l-.389 2.267a.4.4 0 0 0 .58.421l2.036-1.07a.4.4 0 0 1 .372 0l2.036 1.07a.4.4 0 0 0 .58-.421l-.389-2.267a.4.4 0 0 1 .115-.354l1.647-1.605a.4.4 0 0 0-.222-.682l-2.275-.33a.4.4 0 0 1-.301-.22l-1.018-2.062Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVerifiedStarFillIcon)
export default ForwardRef
