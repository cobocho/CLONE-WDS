import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoGooglePlay2Icon = (
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
      d="M15.718 7.724 7.23 2.803a2.133 2.133 0 0 0-3 .868l7.773 7.77zM4 4.573v14.874l7.438-7.44zm.235 15.772a2.125 2.125 0 0 0 2.972.86l.023-.015 8.494-4.9-3.72-3.718zm12.214-4.461 3.447-1.988a2.13 2.13 0 0 0 1.116-1.87 2.1 2.1 0 0 0-1.108-1.862v-.008h-.008L16.433 8.14l-3.864 3.866z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoGooglePlay2Icon)
export default ForwardRef
