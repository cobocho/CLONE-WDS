import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellIcon = (
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
      d="M12 2.1c-2.225 0-4.055.788-5.312 2.274C5.448 5.84 4.85 7.884 4.85 10.25V11c0 2.465-.683 3.925-1.657 4.868-.381.37-.42.882-.284 1.258a1.16 1.16 0 0 0 1.09.774H20c.572 0 .952-.39 1.09-.774a1.19 1.19 0 0 0-.284-1.258c-.973-.943-1.656-2.403-1.656-4.868v-.75c0-2.367-.598-4.41-1.838-5.876C16.054 2.888 14.225 2.1 12 2.1m-5.35 8.15c0-2.085.527-3.667 1.412-4.713C8.929 4.51 10.225 3.9 12 3.9c1.774 0 3.07.611 3.938 1.637.885 1.046 1.412 2.628 1.412 4.713V11c0 2.163.468 3.827 1.319 5.1H5.33c.85-1.273 1.319-2.937 1.319-5.1v-.75Z"
      clipRule="evenodd"
    />
    <path fill="#171719" d="M9.1 20.1v1.8h5.8v-1.8z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBellIcon)
export default ForwardRef
