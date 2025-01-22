import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompanyCheckFillIcon = (
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
      d="m23.837 4.007-1.273-1.273-2.963 2.963-1.564-1.563-1.273 1.273 2.837 2.836z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M5.45 2.1c-.428 0-.834 0-1.167.045-.372.05-.784.17-1.126.512s-.462.754-.512 1.126c-.045.333-.044.739-.044 1.166V21.9h12V17h1.8v4.9h5v-8.95c0-.428 0-.834-.045-1.167-.05-.372-.17-.785-.512-1.127s-.754-.461-1.126-.511c-.333-.045-.74-.045-1.167-.045h-3.15V4.95c0-.428 0-.834-.045-1.167-.05-.372-.17-.785-.512-1.126-.341-.342-.754-.462-1.126-.512-.333-.045-.74-.045-1.167-.045zm6.05 9.8h-5v-1.8h5zm0-4h-5V6.1h5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompanyCheckFillIcon)
export default ForwardRef
