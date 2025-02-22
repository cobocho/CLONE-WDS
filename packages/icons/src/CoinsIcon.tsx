import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoinsIcon = (
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
      d="M3.125 7c0-.754.41-1.368.923-1.822.514-.456 1.207-.826 1.988-1.119 1.569-.588 3.678-.934 5.964-.934s4.395.346 5.964.934c.781.293 1.474.663 1.988 1.119.512.454.923 1.068.923 1.822v9.796c0 1.052-.58 2.076-1.604 2.53-5.944 2.642-11.645 1.36-14.634-.008-.996-.457-1.512-1.46-1.512-2.45zm1.75 0c0-.074.037-.25.334-.513.296-.263.775-.54 1.441-.789 1.327-.497 3.218-.823 5.35-.823s4.023.326 5.35.823c.666.25 1.145.526 1.44.789.298.264.335.439.335.513s-.037.25-.334.513c-.296.263-.775.54-1.441.789-1.327.497-3.218.823-5.35.823s-4.023-.326-5.35-.823c-.666-.25-1.145-.526-1.44-.789-.298-.264-.335-.439-.335-.513m14.25 2.405v1.63c-5.922 2.565-11.69 1.198-14.25.022V9.405a8 8 0 0 0 1.16.536c1.57.588 3.679.934 5.965.934s4.395-.346 5.964-.934a8 8 0 0 0 1.161-.536m-14.25 7.463v-.613c3.031 1.18 8.522 2.193 14.25-.029v.57c0 .43-.234.785-.564.932-5.36 2.38-10.52 1.223-13.195-.002-.281-.128-.491-.444-.491-.858m0-2.511c2.56 1.176 8.328 2.543 14.25-.022v-1.408c-5.728 2.221-11.219 1.209-14.25.028z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCoinsIcon)
export default ForwardRef
