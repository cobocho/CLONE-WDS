import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoGoogleIcon = (
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
      fill="#3D82F0"
      fillRule="evenodd"
      d="M21.504 12.226c0-.702-.063-1.378-.18-2.026H12v3.83h5.328a4.56 4.56 0 0 1-1.975 2.988v2.484h3.199c1.872-1.724 2.952-4.261 2.952-7.276"
      clipRule="evenodd"
    />
    <path
      fill="#31A752"
      fillRule="evenodd"
      d="M12 21.9c2.673 0 4.914-.886 6.552-2.398l-3.199-2.485c-.886.594-2.02.945-3.353.945-2.578 0-4.76-1.741-5.54-4.08H3.154v2.565A9.9 9.9 0 0 0 12 21.9"
      clipRule="evenodd"
    />
    <path
      fill="#F9BA00"
      fillRule="evenodd"
      d="M6.46 13.881a6 6 0 0 1-.31-1.88c0-.653.112-1.288.31-1.882V7.554H3.153a9.9 9.9 0 0 0 0 8.893z"
      clipRule="evenodd"
    />
    <path
      fill="#E64234"
      fillRule="evenodd"
      d="M12 6.038c1.454 0 2.76.5 3.784 1.48l2.84-2.839C16.91 3.081 14.67 2.1 12 2.1a9.9 9.9 0 0 0-8.847 5.455l3.308 2.564C7.24 7.779 9.422 6.038 12 6.038"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoGoogleIcon)
export default ForwardRef
