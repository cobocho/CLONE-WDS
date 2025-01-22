import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellPlusIcon = (
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
      d="M9.1 20.1h5.8v1.8H9.1zm9.8-10.6V7.8h1.6v1.7h1.7v1.6h-1.7v1.7h-1.6v-1.7h-1.7V9.5z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M6.65 10.25c0-2.085.527-3.667 1.411-4.713C8.93 4.511 10.225 3.9 12 3.9s3.07.611 3.938 1.637c.345.407.635.895.86 1.463h1.906c-.304-1-.766-1.886-1.392-2.626C16.054 2.888 14.225 2.1 12 2.1s-4.054.788-5.312 2.274C5.447 5.84 4.85 7.884 4.85 10.25V11c0 2.465-.683 3.925-1.656 4.868-.382.37-.421.882-.285 1.258a1.16 1.16 0 0 0 1.09.774H20c.572 0 .952-.39 1.09-.773a1.19 1.19 0 0 0-.284-1.259A4.9 4.9 0 0 1 19.61 14h-1.89a7.3 7.3 0 0 0 .947 2.1H5.331c.85-1.273 1.318-2.937 1.318-5.1v-.75Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBellPlusIcon)
export default ForwardRef
