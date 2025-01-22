import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreVerticalIcon = (
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
      d="M13.75 4.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 7.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M12 21a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreVerticalIcon)
export default ForwardRef
