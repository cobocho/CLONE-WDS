import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThunderFillIcon = (
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
      d="M14.363 2.063a.9.9 0 0 1 .568.885L14.585 9.5H18.4a.9.9 0 0 1 .662 1.51L9.135 21.775a.9.9 0 0 1-1.55-.753l1.024-6.369H4.9a.9.9 0 0 1-.688-1.48l9.132-10.852a.9.9 0 0 1 1.02-.258Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgThunderFillIcon)
export default ForwardRef
