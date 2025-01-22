import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSquareFillIcon = (
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
      d="M9.612 2.35h4.777c1.088 0 1.958 0 2.662.058.723.059 1.348.183 1.924.476a4.9 4.9 0 0 1 2.141 2.142c.294.575.418 1.201.477 1.924.058.703.058 1.574.058 2.661v4.778c0 1.087 0 1.958-.058 2.662-.06.722-.183 1.348-.477 1.924a4.9 4.9 0 0 1-2.141 2.141c-.576.293-1.201.418-1.924.477-.704.057-1.574.057-2.662.057H9.612c-1.088 0-1.958 0-2.662-.057-.723-.06-1.348-.184-1.924-.477a4.9 4.9 0 0 1-2.141-2.141c-.294-.576-.418-1.202-.477-1.924-.058-.704-.058-1.575-.058-2.662V9.611c0-1.087 0-1.958.058-2.661.059-.723.183-1.349.477-1.924a4.9 4.9 0 0 1 2.14-2.142c.577-.293 1.202-.417 1.925-.476.704-.058 1.574-.058 2.662-.058"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSquareFillIcon)
export default ForwardRef
