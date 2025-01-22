import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocumentTextIcon = (
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
      d="M5.37 2.117c.204-.017.446-.017.7-.017h8.994L20.4 7.703V19.43c0 .254 0 .496-.017.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H6.07c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.733-.191 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.19-.733 9 9 0 0 1-.017-.7V4.57c0-.254 0-.496.017-.7.018-.222.06-.478.19-.732a1.9 1.9 0 0 1 .83-.83c.255-.13.51-.173.733-.191M5.4 4a.1.1 0 0 1 .1-.1h7.6v5h5.5V20a.1.1 0 0 1-.1.1h-13a.1.1 0 0 1-.1-.1zm9.5 3.1V4.537L17.34 7.1z"
      clipRule="evenodd"
    />
    <path fill="#171719" d="M12.5 15.3h-5v-1.8h5zm-5 3h5v-1.8h-5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentTextIcon)
export default ForwardRef
