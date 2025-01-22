import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCompanyPlusFillIcon = (
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
      d="M21.15 2.1h-1.8v2.25H17.1v1.8h2.25V8.4h1.8V6.15h2.25v-1.8h-2.25z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M5.45 2.1c-.428 0-.834 0-1.167.045-.372.05-.785.17-1.126.512-.342.341-.462.754-.512 1.126-.045.333-.045.739-.045 1.166V21.9h12V17h1.8v4.9h5v-8.95c0-.428 0-.834-.044-1.167-.05-.372-.17-.785-.512-1.127s-.754-.461-1.126-.511c-.333-.045-.74-.045-1.167-.045h-3.15V4.95c0-.428 0-.834-.045-1.167-.05-.372-.17-.785-.512-1.126-.342-.342-.754-.462-1.126-.512-.334-.045-.74-.045-1.167-.045zm6.05 9.8h-5v-1.8h5zm0-4h-5V6.1h5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompanyPlusFillIcon)
export default ForwardRef
