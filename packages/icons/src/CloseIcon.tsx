import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseIcon = (
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
      d="M4.613 4.614a.9.9 0 0 1 1.273 0L12 10.727l6.113-6.113a.9.9 0 0 1 1.273 1.272L13.273 12l6.113 6.114a.9.9 0 1 1-1.273 1.273L12 13.273l-6.114 6.114a.9.9 0 1 1-1.273-1.273L10.727 12 4.613 5.886a.9.9 0 0 1 0-1.272"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCloseIcon)
export default ForwardRef
