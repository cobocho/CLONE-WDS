import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLogoFacebookIcon = (
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
    <circle cx={12} cy={12} r={9.9} fill="#0866FF" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.555 21.779V14.87h2.306l.436-2.861h-2.742v-1.861c0-.782.386-1.545 1.613-1.545h1.248V6.17s-1.139-.198-2.218-.198c-2.267 0-3.742 1.366-3.742 3.85V12H7.94v2.861h2.515v6.92a10 10 0 0 0 3.099-.002Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoFacebookIcon)
export default ForwardRef
