import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretDownIcon = (
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
      d="M13.215 14.583c-.418.488-.628.732-.877.822a1 1 0 0 1-.676 0c-.249-.09-.458-.334-.877-.822l-2.52-2.942c-.721-.84-1.081-1.26-1.09-1.616a1 1 0 0 1 .368-.8C7.819 9 8.373 9 9.479 9h5.043c1.107 0 1.66 0 1.936.225a1 1 0 0 1 .368.8c-.009.356-.37.776-1.09 1.616z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCaretDownIcon)
export default ForwardRef
