import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageIcon = (
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
      d="M5.07 2.6c-.254 0-.496 0-.7.016-.222.018-.478.06-.732.19a1.9 1.9 0 0 0-.83.831c-.13.255-.173.51-.191.733a9 9 0 0 0-.017.7v13.86c0 .254 0 .496.017.7.018.222.06.477.19.732a1.9 1.9 0 0 0 .83.83c.256.13.51.173.733.191.204.017.446.017.7.017h13.86c.254 0 .496 0 .7-.017.223-.018.478-.06.733-.19a1.9 1.9 0 0 0 .83-.83c.13-.256.172-.51.19-.733.017-.204.017-.446.017-.7V5.07c0-.254 0-.497-.016-.7a1.9 1.9 0 0 0-.191-.733 1.9 1.9 0 0 0-.83-.83 1.9 1.9 0 0 0-.733-.19c-.204-.017-.446-.017-.7-.017zM4.4 4.5a.1.1 0 0 1 .1-.1h15a.1.1 0 0 1 .1.1v9.327l-2.6-2.6-3.5 3.5-5-5-4.1 4.1zm0 11.873V19.5a.1.1 0 0 0 .1.1h15a.1.1 0 0 0 .1-.1v-3.127l-2.6-2.6-3.5 3.5-5-5zM17.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgImageIcon)
export default ForwardRef
