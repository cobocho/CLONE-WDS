import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadIcon = (
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
      d="M20.9 15v3.43c0 .255 0 .497-.016.7a2 2 0 0 1-.19.733 1.9 1.9 0 0 1-.831.83c-.255.13-.51.173-.733.191-.204.017-.446.017-.7.017H5.57c-.254 0-.496 0-.7-.017a1.9 1.9 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7V15h1.8v4a.1.1 0 0 0 .1.1h14a.1.1 0 0 0 .1-.1v-4z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      d="M11.1 4v9.419l-2.733-2.573a.9.9 0 0 0-1.234 1.31l4.25 4a.9.9 0 0 0 1.234 0l4.25-4a.9.9 0 0 0-1.234-1.31L12.9 13.42V4a.9.9 0 1 0-1.8 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDownloadIcon)
export default ForwardRef
