import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgAndroidIcon = (
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
      d="M1 18q.225-2.675 1.638-4.925A10.4 10.4 0 0 1 6.4 9.5L4.55 6.3a.54.54 0 0 1-.075-.475.6.6 0 0 1 .325-.375.53.53 0 0 1 .45-.05q.25.075.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3a.53.53 0 0 1 .45.05.6.6 0 0 1 .325.375.54.54 0 0 1-.075.475L17.6 9.5a10.4 10.4 0 0 1 3.762 3.575A10.84 10.84 0 0 1 23 18zm6-2.75q.525 0 .887-.362.363-.363.363-.888c0-.525-.12-.646-.363-.887A1.2 1.2 0 0 0 7 12.75q-.525 0-.888.363A1.2 1.2 0 0 0 5.75 14q0 .525.362.888.363.362.888.362m10 0q.525 0 .887-.362.363-.363.363-.888c0-.525-.12-.646-.363-.887A1.2 1.2 0 0 0 17 12.75q-.525 0-.887.363a1.2 1.2 0 0 0-.363.887q0 .525.363.888.362.362.887.362"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAndroidIcon)
export default ForwardRef
