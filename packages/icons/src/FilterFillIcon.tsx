import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterFillIcon = (
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
      d="M6.651 2.6c-.547 0-1.017 0-1.384.034-.35.03-.812.103-1.179.41a1.9 1.9 0 0 0-.677 1.563c.027.477.29.864.507 1.14.227.29.549.634.923 1.033l4.76 5.077-.001 6.4c0 .06-.004.248.052.431a1.2 1.2 0 0 0 .221.413c.122.148.28.25.33.283l2.072 1.38c.103.07.225.15.335.21s.351.182.662.163a1.2 1.2 0 0 0 .885-.474c.188-.248.22-.515.232-.64.011-.125.011-.272.011-.395v-7.771l4.76-5.077c.373-.399.695-.742.922-1.032.217-.277.48-.664.507-1.14a1.9 1.9 0 0 0-.677-1.564c-.367-.307-.828-.38-1.179-.41-.367-.033-.837-.033-1.384-.033z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFilterFillIcon)
export default ForwardRef
