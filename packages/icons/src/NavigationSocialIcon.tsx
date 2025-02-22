import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNavigationSocialIcon = (
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
      d="M19.113 7.14a3.49 3.49 0 1 1-6.981-.001 3.49 3.49 0 0 1 6.98 0ZM10.64 8.513a3.127 3.127 0 1 1-6.254-.001 3.127 3.127 0 0 1 6.255 0Zm-2.094 4.755.08-.066c-.36-.037-.731-.065-1.118-.065C2.77 13.137 0 16.083 0 18.875c0 .884.591 1.47 1.47 1.47h4.814a3.13 3.13 0 0 1-.442-1.642c0-2.006.982-3.988 2.7-5.44zm1.964.321c1.34-.791 3.059-1.29 5.111-1.29v.005c5.288 0 8.379 3.28 8.379 6.403 0 .987-.656 1.643-1.643 1.643H8.886c-.987 0-1.643-.656-1.643-1.643 0-1.908 1.159-3.876 3.267-5.118"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigationSocialIcon)
export default ForwardRef
