import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNormalIcon = (
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
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#171719"
        d="M9.345 3.25a.9.9 0 0 1 .9-.9h3.497a.9.9 0 1 1 0 1.8h-3.497a.9.9 0 0 1-.9-.9m-1.698-.014a.9.9 0 0 1-.872.927c-.857.026-1.214.093-1.468.224l-.01.005a2.13 2.13 0 0 0-.924.93c-.13.254-.198.612-.223 1.466a.9.9 0 0 1-1.8-.055c.026-.853.088-1.584.423-2.236l.003-.006a3.93 3.93 0 0 1 1.712-1.707c.651-.333 1.381-.395 2.232-.42a.9.9 0 0 1 .927.872m8.693 0a.9.9 0 0 1 .927-.873c.85.026 1.58.088 2.232.421a3.93 3.93 0 0 1 1.712 1.707l.003.006c.335.652.397 1.383.423 2.236a.9.9 0 1 1-1.8.055c-.025-.854-.093-1.212-.223-1.466a2.13 2.13 0 0 0-.925-.93l-.009-.005c-.254-.13-.61-.198-1.468-.224a.9.9 0 0 1-.872-.927M3.25 9.345a.9.9 0 0 1 .9.9v3.497a.9.9 0 1 1-1.8 0v-3.497a.9.9 0 0 1 .9-.9m17.487 0a.9.9 0 0 1 .9.9v3.497a.9.9 0 1 1-1.8 0v-3.497a.9.9 0 0 1 .9-.9m.04 6.995a.9.9 0 0 1 .873.927c-.026.853-.088 1.584-.423 2.237l-.003.005a3.93 3.93 0 0 1-1.712 1.707c-.652.333-1.381.395-2.232.42a.9.9 0 1 1-.055-1.798c.857-.026 1.214-.094 1.468-.225l.01-.005c.385-.193.706-.515.924-.93.13-.254.198-.611.223-1.466a.9.9 0 0 1 .927-.872m-17.554.013a.9.9 0 0 1 .927.872c.026.857.093 1.214.224 1.468l.005.01c.193.385.515.706.93.924.254.13.612.198 1.466.224a.9.9 0 0 1-.055 1.799c-.853-.026-1.584-.088-2.237-.423l-.005-.003a3.93 3.93 0 0 1-1.707-1.712c-.333-.651-.395-1.381-.42-2.232a.9.9 0 0 1 .872-.927m6.122 4.384a.9.9 0 0 1 .9-.9h3.497a.9.9 0 0 1 0 1.8h-3.497a.9.9 0 0 1-.9-.9"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#171719" d="M0 0h24v24H0z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgNormalIcon)
export default ForwardRef
