import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHomeFillIcon = (
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
      d="M11.453 2.285a.9.9 0 0 1 1.094 0l8.5 6.5a.9.9 0 0 1 .353.715v9.43c0 .254 0 .496-.016.7a1.9 1.9 0 0 1-.191.732 1.9 1.9 0 0 1-.83.83c-.255.13-.51.173-.733.191-.204.017-.446.017-.7.017H12.9V14h-1.8v7.4H5.07c-.254 0-.496 0-.7-.017a1.9 1.9 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7V9.5a.9.9 0 0 1 .353-.715z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHomeFillIcon)
export default ForwardRef
