import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExternalLinkIcon = (
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
      d="M14.5 3.1a.9.9 0 1 0 0 1.8h3.327l-9.463 9.464a.9.9 0 0 0 1.272 1.272L19.1 6.174V9.5a.9.9 0 1 0 1.8 0V4a.9.9 0 0 0-.9-.9z"
    />
    <path
      fill="#171719"
      d="M20.883 19.13c.017-.204.017-.446.017-.7V14h-1.8v5a.1.1 0 0 1-.1.1H5a.1.1 0 0 1-.1-.1V5a.1.1 0 0 1 .1-.1h5V3.1H5.57c-.254 0-.496 0-.7.017-.223.018-.478.06-.733.19a1.9 1.9 0 0 0-.83.83 1.9 1.9 0 0 0-.19.733 9 9 0 0 0-.017.7v12.86c0 .254 0 .496.017.7.018.223.06.478.19.733a1.9 1.9 0 0 0 .83.83c.255.13.51.172.733.19.204.017.446.017.7.017h12.86c.254 0 .496 0 .7-.016.223-.019.478-.061.733-.191a1.9 1.9 0 0 0 .83-.83c.13-.255.172-.51.19-.733"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExternalLinkIcon)
export default ForwardRef
