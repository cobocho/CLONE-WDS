import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlusThickIcon = (
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
      d="M12 1.95a1.3 1.3 0 0 1 1.3 1.3v7.45h7.45a1.3 1.3 0 0 1 0 2.6H13.3v7.45a1.3 1.3 0 0 1-2.6 0V13.3H3.25a1.3 1.3 0 0 1 0-2.6h7.45V3.25a1.3 1.3 0 0 1 1.3-1.3"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPlusThickIcon)
export default ForwardRef
