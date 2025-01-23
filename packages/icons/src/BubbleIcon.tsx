import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}
const SvgBubbleIcon = (
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
      d="M12 4.15a7.85 7.85 0 1 0 3.754 14.747.9.9 0 0 1 .667-.079l2.115.577c.46.125.744.202.954.24q.11.017.147.018l.016-.016a1 1 0 0 0-.019-.148 12 12 0 0 0-.239-.953l-.576-2.115a.9.9 0 0 1 .078-.668A7.85 7.85 0 0 0 12 4.15M2.35 12a9.65 9.65 0 1 1 18.298 4.287l.494 1.813c.112.41.212.776.265 1.076.054.305.09.691-.057 1.077a1.9 1.9 0 0 1-1.097 1.097c-.386.147-.772.11-1.076.057-.3-.053-.667-.153-1.077-.265l-1.813-.494A9.65 9.65 0 0 1 2.35 12"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBubbleIcon)
export default ForwardRef
