import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrashIcon = (
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
      d="M9 3.4h6V1.6H9zm12 3.5h-1.35v12.53c0 .254 0 .496-.016.7-.018.222-.06.477-.19.732a1.9 1.9 0 0 1-.83.83c-.256.13-.51.173-.733.19-.204.018-.446.017-.7.017H6.82c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.733-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.19-.733 9 9 0 0 1-.017-.7V6.9H3V5.1h18zm-14.85 0h11.7v13.099a.1.1 0 0 1-.1.1H6.25a.1.1 0 0 1-.1-.1zm6.95 9.6v-6h1.8v6zm-4-6v6h1.8v-6z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrashIcon)
export default ForwardRef
