import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWriteIcon = (
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
      d="M18.657 2.212a1.9 1.9 0 0 1 1.687 0c.286.141.526.384.734.593l.117.117c.21.208.452.449.593.734a1.9 1.9 0 0 1 0 1.688c-.141.285-.384.526-.593.734L11.373 15.9H8.1v-3.273l9.822-9.822c.208-.21.449-.452.735-.593m.914 1.631a.1.1 0 0 0-.142 0L9.9 13.373v.727h.727l9.53-9.53a.1.1 0 0 0 0-.141z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M7.463 2.6c-.668 0-1.224 0-1.678.037-.473.039-.913.122-1.328.334A3.4 3.4 0 0 0 2.97 4.457c-.212.415-.295.855-.334 1.328-.037.454-.037 1.01-.037 1.678v9.074c0 .669 0 1.225.037 1.678.039.473.122.913.334 1.329a3.4 3.4 0 0 0 1.486 1.485c.415.212.855.295 1.328.334.454.037 1.01.037 1.678.037h9.074c.669 0 1.225 0 1.679-.037.472-.039.912-.122 1.328-.334a3.4 3.4 0 0 0 1.486-1.485c.211-.416.295-.856.333-1.329.037-.453.037-1.01.037-1.678V11h-1.8v5.5c0 .715 0 1.197-.03 1.569-.03.361-.083.538-.144.658a1.6 1.6 0 0 1-.7.699c-.119.06-.296.114-.657.143-.372.03-.854.031-1.569.031h-9c-.715 0-1.197 0-1.568-.031-.362-.03-.539-.082-.658-.143a1.6 1.6 0 0 1-.7-.7c-.06-.119-.113-.296-.143-.657-.03-.372-.03-.854-.03-1.569v-9c0-.715 0-1.197.03-1.569.03-.36.083-.538.144-.657a1.6 1.6 0 0 1 .699-.7c.12-.06.296-.113.658-.143.371-.03.853-.03 1.568-.03H13V2.6z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWriteIcon)
export default ForwardRef
