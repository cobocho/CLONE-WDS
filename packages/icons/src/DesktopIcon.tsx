import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDesktopIcon = (
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
      d="M3.618 3.117c.204-.017.446-.017.7-.017h15.36c.254 0 .496 0 .7.017.222.018.478.06.732.19a1.9 1.9 0 0 1 .83.83c.13.256.173.51.191.733.017.204.017.446.017.7v9.36c0 .254 0 .496-.017.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H12.9v2.2H18v1.8H6v-1.8h5.1v-2.2H4.319c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.733-.191 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.19-.733c-.017-.204-.017-.446-.017-.7V5.57c0-.254 0-.496.017-.7.018-.222.06-.478.19-.732a1.9 1.9 0 0 1 .83-.83c.255-.13.51-.173.733-.191Zm.13 1.783a.1.1 0 0 0-.1.1v10.5a.1.1 0 0 0 .1.1h16.5a.1.1 0 0 0 .1-.1V5a.1.1 0 0 0-.1-.1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDesktopIcon)
export default ForwardRef
