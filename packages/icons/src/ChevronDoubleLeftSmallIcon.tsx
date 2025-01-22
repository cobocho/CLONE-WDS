import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDoubleLeftSmallIcon = (
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
      d="M11.637 6.14a.9.9 0 1 0-1.273-1.273l-6.5 6.5a.9.9 0 0 0 0 1.273l6.5 6.5a.9.9 0 1 0 1.273-1.273l-5.864-5.864zm8 0a.9.9 0 1 0-1.273-1.273l-6.5 6.5a.9.9 0 0 0 0 1.273l6.5 6.5a.9.9 0 1 0 1.273-1.273l-5.864-5.864z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronDoubleLeftSmallIcon)
export default ForwardRef
