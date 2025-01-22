import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCameraIcon = (
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
      d="M12 7.35a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8m-3.1 4.9a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0"
      clipRule="evenodd"
    />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M10.11 2.1c-.525 0-.967-.001-1.382.125a2.9 2.9 0 0 0-1 .535c-.334.275-.58.644-.87 1.08l-.84 1.26h-.853c-.53 0-.981 0-1.352.03-.39.032-.768.102-1.13.286a2.9 2.9 0 0 0-1.267 1.267c-.184.362-.254.74-.286 1.13-.03.37-.03.822-.03 1.352v7.67c0 .53 0 .981.03 1.352.032.389.102.768.286 1.13a2.9 2.9 0 0 0 1.267 1.267c.362.184.74.254 1.13.286.37.03.822.03 1.352.03h13.67c.53 0 .981 0 1.352-.03.389-.032.768-.102 1.13-.286a2.9 2.9 0 0 0 1.267-1.267c.184-.362.254-.741.286-1.13.03-.37.03-.822.03-1.352v-7.67c0-.53 0-.981-.03-1.352-.032-.39-.102-.768-.286-1.13a2.9 2.9 0 0 0-1.267-1.267c-.362-.184-.741-.254-1.13-.286-.37-.03-.822-.03-1.352-.03h-.853l-.84-1.26c-.29-.437-.536-.805-.871-1.08a2.9 2.9 0 0 0-.999-.535c-.415-.126-.857-.126-1.382-.125zm-.86 1.847c.127-.038.28-.047.963-.047h3.575c.682 0 .835.01.961.047a1.1 1.1 0 0 1 .38.203c.101.084.194.206.572.774l.813 1.22.018.026c.062.094.18.274.347.412a1.4 1.4 0 0 0 .482.258c.208.063.423.061.536.06h.903c.575 0 .952 0 1.24.024.278.023.393.062.46.096a1.1 1.1 0 0 1 .48.48c.034.066.073.182.096.46.023.288.024.665.024 1.24v7.6c0 .575 0 .952-.024 1.24-.023.278-.062.393-.096.46a1.1 1.1 0 0 1-.48.48c-.067.034-.182.073-.46.096-.288.023-.665.024-1.24.024H5.2c-.575 0-.952 0-1.24-.024-.278-.023-.394-.062-.46-.096a1.1 1.1 0 0 1-.48-.48c-.034-.067-.073-.182-.096-.46A17 17 0 0 1 2.9 16.8V9.2c0-.575 0-.952.024-1.24.023-.278.062-.394.096-.46a1.1 1.1 0 0 1 .48-.48c.066-.034.182-.073.46-.096.288-.023.665-.024 1.24-.024h.904c.113.001.328.003.536-.06a1.4 1.4 0 0 0 .482-.259c.168-.137.285-.317.347-.412l.018-.026.812-1.219c.378-.567.471-.69.573-.774a1.1 1.1 0 0 1 .379-.203Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCameraIcon)
export default ForwardRef
