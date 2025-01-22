import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCirclePointIcon = (
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
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2M2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      d="M9.4 16.4V8h3.442c1.895 0 3.064 1.178 3.058 2.889.006 1.735-1.186 2.877-3.116 2.877h-1.407V16.4zm1.977-4.2h1.046c.936.006 1.43-.516 1.43-1.311 0-.783-.494-1.288-1.43-1.288h-1.046z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCirclePointIcon)
export default ForwardRef
