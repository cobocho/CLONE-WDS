import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleQuestionIcon = (
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
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2M2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9"
      clipRule="evenodd"
    />
    <path fill="#171719" d="M13 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M11.865 6.603a3.6 3.6 0 0 1 1.66.336 3.33 3.33 0 0 1 1.295 1.07 3.03 3.03 0 0 1 .23 3.195 3.26 3.26 0 0 1-1.14 1.23l-.007.004-.007.005c-.319.194-.576.45-.755.742a1.96 1.96 0 0 0-.293.914v.276h-1.8v-.322l.001-.022a3.76 3.76 0 0 1 .56-1.79 4.1 4.1 0 0 1 1.34-1.33c.225-.144.397-.333.507-.543a1.23 1.23 0 0 0-.098-1.31 1.54 1.54 0 0 0-.6-.49 1.79 1.79 0 0 0-1.631.059c-.238.135-.424.32-.548.527a1.24 1.24 0 0 0-.179.658l-1.8.029a3.04 3.04 0 0 1 .433-1.609 3.3 3.3 0 0 1 1.203-1.17 3.56 3.56 0 0 1 1.629-.46Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleQuestionIcon)
export default ForwardRef
