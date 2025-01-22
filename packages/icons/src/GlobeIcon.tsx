import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgGlobeIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M11.957 3.9h.086a14 14 0 0 1 2.01 4.2H9.947a14 14 0 0 1 2.011-4.2Zm2.435.359A15.8 15.8 0 0 1 15.918 8.1h3.183a8.12 8.12 0 0 0-4.71-3.841ZM19.825 9.9h-3.562a16 16 0 0 1 0 4.2h3.562A8 8 0 0 0 20.1 12a8 8 0 0 0-.275-2.1m-.724 6h-3.183a15.8 15.8 0 0 1-1.526 3.841 8.12 8.12 0 0 0 4.71-3.84Zm-7.058 4.2h-.086a14 14 0 0 1-2.01-4.2h4.107a14 14 0 0 1-2.011 4.2m-2.434-.359a8.12 8.12 0 0 1-4.71-3.84h3.183c.342 1.357.86 2.646 1.527 3.84m-5.434-5.64h3.563a16 16 0 0 1 0-4.2H4.175A8 8 0 0 0 3.9 12c0 .725.096 1.43.275 2.1Zm.724-6h3.183c.342-1.36.86-2.648 1.527-3.842A8.12 8.12 0 0 0 4.899 8.1ZM12 2.1A9.9 9.9 0 0 0 2.1 12c0 5.467 4.432 9.9 9.9 9.9s9.9-4.433 9.9-9.9c0-5.469-4.432-9.9-9.9-9.9m-2.445 12h4.89a14.2 14.2 0 0 0 0-4.2h-4.89a14.2 14.2 0 0 0 0 4.2"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGlobeIcon)
export default ForwardRef
