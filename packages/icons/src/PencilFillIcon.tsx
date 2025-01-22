import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPencilFillIcon = (
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
      d="M18.67 2.607a1.9 1.9 0 0 0-1.173 0 1.9 1.9 0 0 0-.653.384 9 9 0 0 0-.507.483l-.021.021L3.1 16.711v4.19h4.19L20.506 7.684l.02-.021c.18-.18.352-.351.484-.507.144-.17.295-.38.383-.653a1.9 1.9 0 0 0 0-1.174 1.9 1.9 0 0 0-.383-.653 9 9 0 0 0-.484-.507l-.695-.696a9 9 0 0 0-.507-.483 1.9 1.9 0 0 0-.653-.384Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPencilFillIcon)
export default ForwardRef
