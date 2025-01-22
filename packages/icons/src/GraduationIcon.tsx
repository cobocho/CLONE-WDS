import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGraduationIcon = (
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
      d="M12 4.946 3.623 9.5 12 14.055 20.377 9.5zm-.705-1.666a1.48 1.48 0 0 1 1.41 0l8.885 4.83c.256.14.461.349.6.593a1.6 1.6 0 0 1 .21.796v6h-1.8v-4.072l-1.711.93a1 1 0 0 1 .01.143V18a.9.9 0 0 1-.497.804l-6 3a.9.9 0 0 1-.805 0l-6-3A.9.9 0 0 1 5.1 18v-5.5a1 1 0 0 1 .011-.142l-2.701-1.47a1.54 1.54 0 0 1-.6-.592 1.61 1.61 0 0 1 0-1.593c.138-.244.343-.453.6-.593zm1.41 12.44 4.395-2.39v4.114l-5.1 2.55-5.1-2.55V13.33l4.395 2.39a1.48 1.48 0 0 0 1.41 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGraduationIcon)
export default ForwardRef
