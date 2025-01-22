import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraFillIcon = (
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
      d="M8.4 12.25a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M10.11 2.1h3.78c.525 0 .967-.001 1.382.125a2.9 2.9 0 0 1 .999.534c.335.276.58.644.87 1.08l.84 1.261h.854c.53 0 .981 0 1.352.03.389.032.767.102 1.13.286a2.9 2.9 0 0 1 1.267 1.267c.184.362.254.74.285 1.13.03.37.03.822.03 1.352v7.67c0 .53 0 .981-.03 1.352-.031.389-.1.768-.285 1.13a2.9 2.9 0 0 1-1.268 1.267c-.362.184-.74.254-1.13.286-.37.03-.821.03-1.35.03H5.163c-.53 0-.98 0-1.351-.03-.39-.032-.768-.102-1.13-.286a2.9 2.9 0 0 1-1.267-1.267c-.185-.362-.254-.741-.286-1.13-.03-.37-.03-.822-.03-1.352v-7.67c0-.53 0-.981.03-1.352.032-.39.101-.768.286-1.13a2.9 2.9 0 0 1 1.267-1.267c.362-.184.74-.254 1.13-.286.37-.03.821-.03 1.351-.03h.854l.84-1.26c.29-.436.535-.805.87-1.08a2.9 2.9 0 0 1 1-.535c.415-.126.857-.126 1.382-.125ZM12 6.85a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCameraFillIcon)
export default ForwardRef
