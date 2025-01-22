import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationIcon = (
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
      d="M5.678 5.05a8.22 8.22 0 0 1 6.319-2.95c2.333 0 4.66.978 6.319 2.95 2.865 3.407 2.42 8.433-.662 11.525v.002a261 261 0 0 0-4.606 4.765l-.156.165a1.227 1.227 0 0 1-1.79 0l-.157-.165a261 261 0 0 0-4.605-4.765v-.002C3.258 13.484 2.811 8.448 5.677 5.05Zm6.319-1.15c-1.826 0-3.65.771-4.941 2.309l-.001.002c-2.213 2.622-1.92 6.605.559 9.093a251 251 0 0 1 4.383 4.53c.95-1.003 2.774-2.921 4.383-4.53 2.478-2.487 2.773-6.461.558-9.095A6.4 6.4 0 0 0 11.997 3.9m0 5.46a.98.98 0 0 0-.98.98c0 .543.437.98.98.98s.98-.437.98-.98a.98.98 0 0 0-.98-.98m-2.78.98a2.78 2.78 0 0 1 2.78-2.78 2.78 2.78 0 0 1 2.78 2.78 2.78 2.78 0 0 1-2.78 2.78 2.78 2.78 0 0 1-2.78-2.78"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLocationIcon)
export default ForwardRef
