import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoLinkedInIcon = (
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
      fill="#0A66C2"
      fillRule="evenodd"
      d="M14.389 2.35H9.611c-1.087 0-1.958 0-2.661.057-.723.06-1.349.184-1.924.477a4.9 4.9 0 0 0-2.142 2.141c-.293.576-.417 1.202-.476 1.924-.058.704-.058 1.575-.058 2.662v4.778c0 1.087 0 1.958.058 2.662.059.722.183 1.348.476 1.924a4.9 4.9 0 0 0 2.142 2.14c.575.294 1.2.418 1.924.478.703.057 1.574.057 2.661.057h4.778c1.087 0 1.958 0 2.662-.057.722-.06 1.348-.184 1.924-.477a4.9 4.9 0 0 0 2.141-2.142c.293-.575.418-1.2.477-1.924.057-.703.057-1.574.057-2.661V9.61c0-1.087 0-1.958-.057-2.662-.06-.722-.184-1.348-.477-1.924a4.9 4.9 0 0 0-2.141-2.141c-.576-.293-1.202-.417-1.925-.477-.703-.057-1.574-.057-2.661-.057Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.55 7.85a1.299 1.299 0 1 0 2.597 0 1.299 1.299 0 0 0-2.597 0m.18 9.5h2.24v-7.218H6.73zm10.62 0h-2.237v-3.51c0-.835-.014-1.913-1.164-1.913-1.164 0-1.34.912-1.34 1.854v3.568h-2.234v-7.218h2.145v.987h.03c.297-.567 1.028-1.167 2.115-1.167 2.266 0 2.685 1.494 2.685 3.438z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoLinkedInIcon)
export default ForwardRef
