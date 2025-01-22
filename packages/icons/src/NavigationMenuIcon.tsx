import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNavigationMenuIcon = (
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
      d="M19.333 5H4.667C4.298 5 4 5.366 4 5.817v.816c0 .451.298.817.667.817h14.666c.369 0 .667-.366.667-.817v-.816c0-.451-.299-.817-.667-.817m0 5.775H4.667c-.369 0-.667.366-.667.817v.816c0 .451.298.817.667.817h14.666c.369 0 .667-.366.667-.817v-.816c0-.451-.299-.817-.667-.817M4.667 16.55h14.666c.369 0 .667.366.667.817v.816c0 .451-.299.817-.667.817H4.667C4.298 19 4 18.634 4 18.183v-.816c0-.451.298-.817.667-.817"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigationMenuIcon)
export default ForwardRef
