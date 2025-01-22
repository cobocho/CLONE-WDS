import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThunderIcon = (
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
      d="M14.713 2.033a.9.9 0 0 1 .568.885l-.347 6.552h3.816a.9.9 0 0 1 .662 1.51L9.485 21.745a.9.9 0 0 1-1.55-.753l1.024-6.369H5.25a.9.9 0 0 1-.689-1.48l9.133-10.852a.9.9 0 0 1 1.02-.258Zm-7.53 10.79h2.832a.9.9 0 0 1 .888 1.043l-.717 4.464 6.51-7.06h-2.71a.9.9 0 0 1-.9-.948l.256-4.817z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgThunderIcon)
export default ForwardRef
