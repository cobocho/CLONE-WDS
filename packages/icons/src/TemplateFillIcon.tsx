import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemplateFillIcon = (
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
      d="M5.07 2.6h13.86c.254 0 .496 0 .7.016.223.018.478.06.733.19a1.9 1.9 0 0 1 .83.831c.13.255.172.51.19.733.017.203.017.446.017.7V8.6H2.6V5.07c0-.254 0-.497.017-.7.018-.223.06-.478.19-.733a1.9 1.9 0 0 1 .83-.83c.256-.13.51-.173.733-.19.204-.017.446-.017.7-.017M2.6 10.4v8.53c0 .254 0 .496.017.7.018.222.06.477.19.732a1.9 1.9 0 0 0 .83.83c.256.13.51.173.733.191.204.017.446.017.7.017H8.6v-11zm7.8 11h8.53c.254 0 .496 0 .7-.017.223-.018.478-.06.733-.19a1.9 1.9 0 0 0 .83-.83c.13-.256.172-.51.19-.733.017-.204.017-.446.017-.7V10.4h-11z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTemplateFillIcon)
export default ForwardRef
