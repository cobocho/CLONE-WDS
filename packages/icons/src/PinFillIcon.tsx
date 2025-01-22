import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinFillIcon = (
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
      d="M8.1 4.4H6V2.6h12v1.8h-2.1v5.728l3.32 4.432A.9.9 0 0 1 18.5 16h-5.6v6l-.9 1-.9-1v-6H5.5a.9.9 0 0 1-.72-1.44l3.32-4.432z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPinFillIcon)
export default ForwardRef
