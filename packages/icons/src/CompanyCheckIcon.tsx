import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCompanyCheckIcon = (
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
    <path
      fill="#171719"
      fillRule="evenodd"
      d="m23.837 4.007-1.273-1.273-2.963 2.963-1.564-1.563-1.273 1.273 2.837 2.836z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M4.283 2.145c.333-.045.74-.045 1.167-.045h7.101c.428 0 .834 0 1.167.045.372.05.784.17 1.126.512s.462.754.512 1.126c.045.333.044.739.044 1.166V10.1h3.151c.428 0 .834 0 1.167.045.372.05.784.17 1.126.512s.462.754.512 1.126c.045.333.044.739.044 1.166V21.9H2.6V4.95c0-.428 0-.834.045-1.167.05-.372.17-.785.512-1.126.342-.342.754-.462 1.126-.512M4.4 4a.1.1 0 0 1 .1-.1h9a.1.1 0 0 1 .1.1v16.1H9.9V16H8.1v4.1H4.4zm11 16.1h4.2V12a.1.1 0 0 0-.1-.1h-4.1zm-3.9-8.2h-5v-1.8h5zm0-4h-5V6.1h5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompanyCheckIcon)
export default ForwardRef
