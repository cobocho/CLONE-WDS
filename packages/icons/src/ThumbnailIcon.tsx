import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbnailIcon = (
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
      d="M4.3 3.15A1.15 1.15 0 0 0 3.15 4.3v5.4c0 .635.515 1.15 1.15 1.15h5.4a1.15 1.15 0 0 0 1.15-1.15V4.3A1.15 1.15 0 0 0 9.7 3.15zm.55 6v-4.3h4.3v4.3zm9.45-6a1.15 1.15 0 0 0-1.15 1.15v5.4c0 .635.515 1.15 1.15 1.15h5.4a1.15 1.15 0 0 0 1.15-1.15V4.3a1.15 1.15 0 0 0-1.15-1.15zm.55 6v-4.3h4.3v4.3zM3.15 14.3c0-.635.515-1.15 1.15-1.15h5.4c.635 0 1.15.515 1.15 1.15v5.4a1.15 1.15 0 0 1-1.15 1.15H4.3a1.15 1.15 0 0 1-1.15-1.15zm1.7.55v4.3h4.3v-4.3zm9.45-1.7a1.15 1.15 0 0 0-1.15 1.15v5.4c0 .635.515 1.15 1.15 1.15h5.4a1.15 1.15 0 0 0 1.15-1.15v-5.4a1.15 1.15 0 0 0-1.15-1.15zm.55 6v-4.3h4.3v4.3z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgThumbnailIcon)
export default ForwardRef
