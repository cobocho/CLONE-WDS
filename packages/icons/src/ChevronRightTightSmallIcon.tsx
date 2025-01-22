import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronRightTightSmallIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={24}
    fill="none"
    viewBox="0 0 12 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      d="M2.864 4.863a.9.9 0 0 0 0 1.273L8.728 12l-5.864 5.863a.9.9 0 1 0 1.273 1.273l6.5-6.5a.9.9 0 0 0 0-1.272l-6.5-6.5a.9.9 0 0 0-1.273 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChevronRightTightSmallIcon)
export default ForwardRef
