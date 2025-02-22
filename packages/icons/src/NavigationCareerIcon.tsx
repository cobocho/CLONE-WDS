import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNavigationCareerIcon = (
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
      d="M6.22 4.25a1.25 1.25 0 0 0-2.5 0v15.502a1.25 1.25 0 1 0 2.5 0v-3.71c2.044-1.704 4.142-.937 6.25-.167 2.159.788 4.328 1.581 6.465-.262.852-.734 1.333-1.925 1.333-3.161V5.408c0-.832-.87-1.183-1.515-.671-2.299 1.821-4.44 1.007-6.532.212-2.014-.766-3.983-1.514-6.001.128z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigationCareerIcon)
export default ForwardRef
