import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessageIcon = (
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
      d="M12 2.72c-5.34 0-9.9 3.796-9.9 8.731 0 2.201.93 4.196 2.423 5.714l-.547 3.055a.9.9 0 0 0 1.34.936l2.85-1.663a11 11 0 0 0 3.834.689c5.34 0 9.9-3.796 9.9-8.731S17.34 2.72 12 2.72m0 1.8c-4.59 0-8.1 3.218-8.1 6.931 0 1.805.82 3.476 2.2 4.735a.9.9 0 0 1 .279.823l-.288 1.61 1.545-.9a.9.9 0 0 1 .8-.054 9.25 9.25 0 0 0 3.564.717c4.59 0 8.1-3.218 8.1-6.931S16.59 4.52 12 4.52m-3 7.1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMessageIcon)
export default ForwardRef
