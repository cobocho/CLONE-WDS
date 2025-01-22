import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboardIcon = (
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
      d="M3.867 4.604c-.391 0-.738 0-1.025.023-.306.025-.623.08-.931.238A2.4 2.4 0 0 0 .862 5.914c-.157.308-.213.625-.238.931A14 14 0 0 0 .6 7.87v8.267c0 .391 0 .738.024 1.025.025.306.08.623.238.931a2.4 2.4 0 0 0 1.049 1.049c.308.157.625.213.931.238.287.024.634.024 1.025.024h16.267c.391 0 .738 0 1.025-.024.306-.025.623-.08.931-.238a2.4 2.4 0 0 0 1.049-1.049c.157-.308.213-.625.238-.931.024-.287.024-.634.024-1.025V7.87c0-.391 0-.738-.024-1.025a2.4 2.4 0 0 0-.238-.931 2.4 2.4 0 0 0-1.049-1.049c-.308-.157-.625-.213-.931-.238a14 14 0 0 0-1.025-.023zM2.4 6.998a.6.6 0 0 1 .6-.6h18a.6.6 0 0 1 .6.6v10a.6.6 0 0 1-.6.6H3a.6.6 0 0 1-.6-.6zM7 9H5v2h2zm4 0H9v2h2zm2 0h2v2h-2zm6 0h-2v2h2zM5 13h2v2H5zm10 0H9v2h6zm2 0h2v2h-2z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyboardIcon)
export default ForwardRef
