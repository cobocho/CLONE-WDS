import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgPersonsFillIcon = (
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
      d="M15 4.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8m0 9.5c-2.086 0-4.015.562-5.449 1.518-1.427.952-2.45 2.365-2.45 4.049v.017c0 .057 0 .136.006.21a1.65 1.65 0 0 0 1.71 1.506h12.366c.057 0 .136 0 .21-.006a1.65 1.65 0 0 0 1.5-1.5c.006-.074.006-.153.006-.21v-.017c0-1.684-1.023-3.097-2.45-4.049-1.435-.956-3.364-1.518-5.45-1.518Zm-9.7 5.567c0-1.612.639-2.983 1.568-4.066-1.484.023-2.862.432-3.903 1.127-1.066.71-1.865 1.79-1.865 3.105 0 .866.701 1.567 1.566 1.567H5.72a3.44 3.44 0 0 1-.42-1.726zM3.6 10a2.9 2.9 0 1 1 5.8 0 2.9 2.9 0 0 1-5.8 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPersonsFillIcon)
export default ForwardRef
