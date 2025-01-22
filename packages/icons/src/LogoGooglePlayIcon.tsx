import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoGooglePlayIcon = (
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
      fill="#EA4335"
      d="m11.944 11.575-7.87 8.351a2.126 2.126 0 0 0 3.133 1.279l.022-.015 8.854-5.107-4.146-4.515z"
    />
    <path
      fill="#FBBC04"
      d="M19.904 10.156h-.008l-3.82-2.224-4.309 3.835 4.323 4.323 3.806-2.194a2.13 2.13 0 0 0 1.116-1.87 2.1 2.1 0 0 0-1.108-1.862z"
    />
    <path
      fill="#4285F4"
      d="M4.074 4.082A2.2 2.2 0 0 0 4 4.628v14.759c0 .192.022.369.074.546l8.136-8.136z"
    />
    <path
      fill="#34A853"
      d="m12.003 12.004 4.072-4.072L7.23 2.803a2.135 2.135 0 0 0-3.156 1.271l7.93 7.922z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoGooglePlayIcon)
export default ForwardRef
