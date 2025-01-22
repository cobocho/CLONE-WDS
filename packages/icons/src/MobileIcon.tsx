import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMobileIcon = (
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
      d="M9.95 1.85h-.035c-.53 0-.981 0-1.352.03-.389.033-.768.102-1.13.287a2.9 2.9 0 0 0-1.267 1.267c-.184.362-.254.74-.286 1.13-.03.37-.03.821-.03 1.351v12.171c0 .53 0 .981.03 1.352.032.389.102.767.286 1.13a2.9 2.9 0 0 0 1.268 1.266c.361.185.74.255 1.13.286.37.03.82.03 1.35.03h4.172c.53 0 .982 0 1.352-.03.39-.031.768-.101 1.13-.286a2.9 2.9 0 0 0 1.267-1.267c.184-.362.254-.74.286-1.13.03-.37.03-.821.03-1.351V5.915c0-.53 0-.98-.03-1.351-.032-.39-.102-.768-.286-1.13a2.9 2.9 0 0 0-1.267-1.267c-.362-.185-.74-.254-1.13-.286-.37-.03-.822-.03-1.351-.03zm-1.7 1.92c.067-.033.182-.072.46-.095.288-.024.665-.024 1.24-.024h4.1c.575 0 .952 0 1.24.024.278.023.394.062.46.095a1.1 1.1 0 0 1 .48.481c.034.066.073.181.096.46.023.288.024.665.024 1.24v12.1c0 .575 0 .952-.024 1.24-.023.278-.062.393-.096.459a1.1 1.1 0 0 1-.48.48c-.066.034-.182.074-.46.096-.288.024-.665.025-1.24.025h-4.1c-.575 0-.952-.001-1.24-.025-.278-.022-.393-.062-.46-.095a1.1 1.1 0 0 1-.48-.481c-.034-.066-.073-.181-.096-.46a17 17 0 0 1-.024-1.24V5.95c0-.574 0-.951.024-1.24.023-.278.062-.393.096-.459a1.1 1.1 0 0 1 .48-.48ZM10 17.825a.675.675 0 1 0 0 1.35h4a.675.675 0 0 0 0-1.35z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMobileIcon)
export default ForwardRef
