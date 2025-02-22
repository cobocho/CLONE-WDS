import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarIcon = (
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
    <path fill="#171719" d="M18 14h-3v3h3z" />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M16.2 4.1H6.8V1H5v3.1a9 9 0 0 0-.659.023c-.305.025-.622.081-.93.239A2.4 2.4 0 0 0 2.36 5.41a2.45 2.45 0 0 0-.238.932c-.023.287-.023.633-.023 1.025v10.266c0 .392 0 .738.023 1.026.025.305.081.622.238.93a2.4 2.4 0 0 0 1.05 1.05c.308.157.625.213.93.238.288.023.634.023 1.025.023h13.267c.392 0 .738 0 1.025-.023.306-.025.623-.081.931-.239a2.4 2.4 0 0 0 1.05-1.048c.157-.309.213-.626.238-.931.023-.288.023-.634.023-1.026V7.367c0-.392 0-.738-.023-1.025-.025-.306-.081-.623-.239-.932a2.4 2.4 0 0 0-1.049-1.048 2.4 2.4 0 0 0-.93-.239c-.288-.023-.634-.023-1.026-.023H18V1h-1.8zM4.488 5.917c-.194.016-.248.042-.26.048a.6.6 0 0 0-.263.263c-.006.012-.032.066-.048.26A13 13 0 0 0 3.9 7.4v1.8h16.2V7.4c0-.435 0-.707-.018-.912-.015-.194-.041-.248-.047-.26a.6.6 0 0 0-.263-.263c-.012-.006-.066-.032-.26-.048A13 13 0 0 0 18.6 5.9H5.4c-.435 0-.707 0-.912.017M3.9 17.6V11h16.2v6.6c0 .435 0 .707-.018.912-.015.194-.041.248-.047.26a.6.6 0 0 1-.263.263c-.012.006-.066.032-.26.048a13 13 0 0 1-.912.017H5.4c-.435 0-.707 0-.912-.017-.194-.016-.248-.042-.26-.048a.6.6 0 0 1-.263-.263c-.006-.012-.032-.066-.048-.26A13 13 0 0 1 3.9 17.6"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalendarIcon)
export default ForwardRef
