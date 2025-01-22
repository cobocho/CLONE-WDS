import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoYoutubeIcon = (
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
      d="M20.318 4.992c.915.245 1.64.97 1.885 1.885C22.65 8.54 22.65 12 22.65 12s0 3.461-.447 5.123a2.68 2.68 0 0 1-1.885 1.885c-1.662.447-8.318.447-8.318.447s-6.656 0-8.318-.447a2.67 2.67 0 0 1-1.885-1.885C1.35 15.46 1.35 12 1.35 12s0-3.461.447-5.123c.245-.916.97-1.64 1.885-1.885C5.344 4.545 12 4.545 12 4.545s6.656 0 8.318.447M9.87 8.805v6.39L15.408 12z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoYoutubeIcon)
export default ForwardRef
