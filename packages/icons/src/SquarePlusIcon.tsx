import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgSquarePlusIcon = (
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
    <path fill="#171719" d="M12.9 7.1h-1.8v4h-4v1.8h4v4h1.8v-4h4v-1.8h-4z" />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M9.61 2.35c-1.086 0-1.957 0-2.66.058-.723.059-1.349.183-1.925.476a4.9 4.9 0 0 0-2.141 2.142c-.294.575-.418 1.201-.477 1.924-.057.703-.057 1.574-.057 2.661v4.778c0 1.087 0 1.958.057 2.662.06.722.183 1.348.477 1.924a4.9 4.9 0 0 0 2.141 2.141c.576.293 1.202.418 1.924.477.704.057 1.575.057 2.662.057h4.778c1.087 0 1.957 0 2.661-.057.723-.06 1.348-.184 1.924-.477a4.9 4.9 0 0 0 2.142-2.141c.293-.576.417-1.202.476-1.924.058-.704.058-1.575.058-2.662V9.611c0-1.087 0-1.958-.058-2.661-.059-.723-.183-1.349-.476-1.924a4.9 4.9 0 0 0-2.142-2.142c-.576-.293-1.201-.417-1.924-.476-.704-.058-1.574-.058-2.661-.058zM5.843 4.488c.28-.143.643-.236 1.254-.286.622-.051 1.419-.052 2.554-.052h4.7c1.135 0 1.932 0 2.554.052.611.05.973.143 1.253.286a3.1 3.1 0 0 1 1.355 1.355c.142.28.236.642.286 1.253.051.622.052 1.42.052 2.554v4.7c0 1.135 0 1.932-.052 2.554-.05.611-.143.974-.286 1.253a3.1 3.1 0 0 1-1.355 1.355c-.28.143-.642.237-1.253.287-.622.05-1.42.051-2.554.051h-4.7c-1.135 0-1.932 0-2.554-.051-.611-.05-.974-.144-1.254-.287a3.1 3.1 0 0 1-1.354-1.355c-.143-.28-.237-.642-.287-1.253-.05-.622-.051-1.419-.051-2.554v-4.7c0-1.135 0-1.932.051-2.554.05-.611.144-.973.287-1.253a3.1 3.1 0 0 1 1.354-1.355"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSquarePlusIcon)
export default ForwardRef
