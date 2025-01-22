import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFaceSmileIcon = (
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
      d="M10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M8.548 13.022a.9.9 0 0 1 1.23.326 2.63 2.63 0 0 0 2.272 1.312 2.63 2.63 0 0 0 2.272-1.312.9.9 0 0 1 1.556.904 4.43 4.43 0 0 1-3.828 2.208 4.43 4.43 0 0 1-3.828-2.208.9.9 0 0 1 .326-1.23"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2M2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFaceSmileIcon)
export default ForwardRef
