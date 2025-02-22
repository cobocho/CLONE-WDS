import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBubblePlusIcon = (
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
      d="M12.9 8v-.9h-1.8v4h-4v1.8h4v4h1.8v-4h4v-1.8h-4z"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M12 4.15a7.85 7.85 0 1 0 3.753 14.746.9.9 0 0 1 .668-.078l2.114.577c.46.125.745.202.954.239q.11.019.148.019l.016-.016a1 1 0 0 0-.019-.148 13 13 0 0 0-.239-.954l-.577-2.114a.9.9 0 0 1 .079-.668A7.85 7.85 0 0 0 12 4.15M2.35 12a9.65 9.65 0 1 1 18.298 4.287l.494 1.813c.112.41.212.776.265 1.076.053.305.09.69-.057 1.077a1.9 1.9 0 0 1-1.097 1.097c-.386.147-.772.11-1.077.057-.3-.053-.666-.153-1.076-.265l-1.813-.494A9.65 9.65 0 0 1 2.35 12"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBubblePlusIcon)
export default ForwardRef
