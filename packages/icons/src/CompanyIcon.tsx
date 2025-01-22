import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompanyIcon = (
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
      d="M4.283 2.145c.333-.045.739-.045 1.166-.045h7.102c.427 0 .833 0 1.166.045.372.05.785.17 1.126.512.342.341.462.754.512 1.126.045.333.045.739.045 1.166V10.1h3.15c.428 0 .834 0 1.167.045.372.05.785.17 1.126.512.342.341.462.754.512 1.126.045.333.045.739.045 1.166V21.9H2.6V4.95c0-.428 0-.834.044-1.167.05-.372.17-.785.512-1.126.342-.342.755-.462 1.127-.512M4.4 4a.1.1 0 0 1 .1-.1h9a.1.1 0 0 1 .1.1v16.1H9.9V16H8.1v4.1H4.4zm11 16.1h4.2V12a.1.1 0 0 0-.1-.1h-4.1zm-3.9-8.2h-5v-1.8h5zm0-4h-5V6.1h5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompanyIcon)
export default ForwardRef
