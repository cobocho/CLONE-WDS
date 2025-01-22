import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoKakao2Icon = (
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
      d="M12 3.154c-5.204 0-9.428 3.281-9.428 7.317 0 2.517 1.63 4.714 4.12 6.053l-1.047 3.837a.387.387 0 0 0 .594.415l4.583-3.045c.386 0 .782.066 1.178.066 5.205 0 9.429-3.281 9.429-7.326S17.205 3.154 12 3.154"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoKakao2Icon)
export default ForwardRef
