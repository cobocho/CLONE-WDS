import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgSquarePlusFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M9.611 2.35h4.778c1.087 0 1.958 0 2.662.058.722.059 1.348.183 1.924.476a4.9 4.9 0 0 1 2.141 2.142c.294.575.418 1.201.477 1.924.057.703.057 1.574.057 2.661v4.778c0 1.087 0 1.958-.057 2.662-.06.722-.183 1.348-.477 1.924a4.9 4.9 0 0 1-2.141 2.141c-.576.293-1.202.418-1.924.477-.704.057-1.575.057-2.662.057H9.611c-1.087 0-1.957 0-2.661-.057-.723-.06-1.348-.184-1.924-.477a4.9 4.9 0 0 1-2.142-2.141c-.293-.576-.417-1.202-.476-1.924-.058-.704-.058-1.575-.058-2.662V9.611c0-1.087 0-1.958.058-2.661.059-.723.183-1.349.476-1.924a4.9 4.9 0 0 1 2.142-2.142c.576-.293 1.201-.417 1.924-.476.704-.058 1.574-.058 2.661-.058m3.29 4.75v4h4v1.8h-4v4h-1.8v-4h-4v-1.8h4v-4z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSquarePlusFillIcon)
export default ForwardRef
