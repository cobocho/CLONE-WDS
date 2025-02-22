import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileFillIcon = (
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
      d="M9.915 1.85h4.17c.53 0 .981 0 1.352.03.389.033.768.102 1.13.287a2.9 2.9 0 0 1 1.267 1.267c.184.362.254.74.286 1.13.03.37.03.821.03 1.351v12.171c0 .53 0 .981-.03 1.352-.032.389-.102.767-.286 1.13a2.9 2.9 0 0 1-1.267 1.266c-.362.185-.741.255-1.13.286-.37.03-.822.03-1.352.03h-4.17c-.53 0-.981 0-1.352-.03-.39-.031-.768-.101-1.13-.286a2.9 2.9 0 0 1-1.267-1.267c-.184-.362-.254-.74-.286-1.13-.03-.37-.03-.821-.03-1.351V5.915c0-.53 0-.98.03-1.351.032-.39.102-.768.286-1.13a2.9 2.9 0 0 1 1.267-1.267c.362-.185.74-.254 1.13-.286.37-.03.822-.03 1.352-.03ZM10 18.326a.675.675 0 0 0 0 1.35h4a.675.675 0 1 0 0-1.35z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMobileFillIcon)
export default ForwardRef
