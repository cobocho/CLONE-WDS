import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerifiedCheckIcon = (
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
      d="M13.975 2.427a2.77 2.77 0 0 0-3.95 0l-1.112 1.13a.97.97 0 0 1-.7.29l-1.586-.012a2.77 2.77 0 0 0-2.792 2.792l.012 1.586a.97.97 0 0 1-.29.7l-1.13 1.113a2.77 2.77 0 0 0 0 3.95l1.13 1.112a.97.97 0 0 1 .29.7l-.012 1.586a2.77 2.77 0 0 0 2.792 2.792l1.586-.012a.97.97 0 0 1 .7.29l1.113 1.13a2.77 2.77 0 0 0 3.95 0l1.112-1.13a.97.97 0 0 1 .7-.29l1.586.012a2.77 2.77 0 0 0 2.792-2.792l-.012-1.586a.97.97 0 0 1 .29-.7l1.13-1.113a2.77 2.77 0 0 0 0-3.949l-1.13-1.113a.97.97 0 0 1-.29-.7l.012-1.586a2.77 2.77 0 0 0-2.792-2.792l-1.586.012a.97.97 0 0 1-.7-.29zM11.308 3.69a.97.97 0 0 1 1.385 0l1.113 1.13a2.77 2.77 0 0 0 1.995.827l1.586-.012a.97.97 0 0 1 .98.979L18.353 8.2c-.005.75.293 1.47.827 1.995l1.13 1.113a.97.97 0 0 1 0 1.385l-1.13 1.113a2.77 2.77 0 0 0-.827 1.995l.012 1.586a.97.97 0 0 1-.979.98l-1.586-.013a2.77 2.77 0 0 0-1.995.827l-1.113 1.13a.97.97 0 0 1-1.385 0l-1.113-1.13a2.77 2.77 0 0 0-1.995-.827l-1.586.012a.97.97 0 0 1-.98-.979l.013-1.586a2.77 2.77 0 0 0-.827-1.995l-1.13-1.113a.97.97 0 0 1 0-1.385l1.13-1.113A2.77 2.77 0 0 0 5.647 8.2l-.012-1.586a.97.97 0 0 1 .979-.98l1.586.013c.75.005 1.47-.293 1.995-.827zm5.318 6.458-1.25-1.295-4.552 4.396-2.198-2.123-1.25 1.295 3.448 3.33z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVerifiedCheckIcon)
export default ForwardRef
