import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoLinkedIn2Icon = (
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
      d="M14.39 2.35H9.61c-1.087 0-1.958 0-2.661.058-.723.059-1.349.183-1.924.476a4.9 4.9 0 0 0-2.142 2.142c-.293.575-.417 1.201-.476 1.924-.058.703-.058 1.574-.058 2.661v4.778c0 1.087 0 1.958.058 2.662.059.722.183 1.348.476 1.924a4.9 4.9 0 0 0 2.142 2.141c.575.293 1.201.418 1.924.477.703.057 1.574.057 2.661.057h4.778c1.087 0 1.958 0 2.662-.057.722-.06 1.348-.184 1.924-.477a4.9 4.9 0 0 0 2.141-2.141c.294-.576.418-1.202.477-1.924.057-.704.057-1.575.057-2.662V9.611c0-1.087 0-1.958-.057-2.661-.06-.723-.183-1.349-.477-1.924a4.9 4.9 0 0 0-2.141-2.142c-.576-.293-1.202-.417-1.924-.476-.704-.058-1.575-.058-2.662-.058Zm-7.84 5.5a1.299 1.299 0 1 0 2.597.001A1.299 1.299 0 0 0 6.55 7.85m.18 9.5h2.24v-7.218H6.73zm10.62 0h-2.237v-3.508c0-.836-.014-1.914-1.164-1.914-1.164 0-1.34.912-1.34 1.855v3.567h-2.234v-7.218h2.145v.987h.03c.297-.567 1.028-1.167 2.115-1.167 2.267 0 2.685 1.495 2.685 3.438z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoLinkedIn2Icon)
export default ForwardRef
