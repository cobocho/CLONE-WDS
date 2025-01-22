import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLikeFillIcon = (
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
      d="M14.43 4.578a2.388 2.388 0 0 0-4.61-.882l-2.79 7.018v11.091h11.105c.216 0 .425 0 .604-.013.197-.015.42-.05.648-.152a1.9 1.9 0 0 0 .803-.675c.14-.208.212-.422.26-.613.044-.174.08-.38.117-.593l1.051-6.049c.106-.612.196-1.127.232-1.551.038-.441.029-.88-.128-1.31a2.9 2.9 0 0 0-1.276-1.515c-.396-.228-.826-.312-1.267-.35-.424-.037-.947-.037-1.568-.037H14.43v-4.37Zm-9.2 17.227V10.802H3.808c-.12 0-.259 0-.38.01-.139.01-.332.04-.534.142a1.4 1.4 0 0 0-.611.612 1.4 1.4 0 0 0-.143.534c-.01.121-.01.26-.01.38v7.647c0 .12 0 .259.01.38a1.4 1.4 0 0 0 .143.534 1.4 1.4 0 0 0 .611.612c.202.102.395.131.534.142.121.01.26.01.38.01z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLikeFillIcon)
export default ForwardRef
