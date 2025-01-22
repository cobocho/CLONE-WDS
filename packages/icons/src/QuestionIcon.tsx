import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgQuestionIcon = (
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
      d="M14.21 4.52a5.2 5.2 0 0 0-2.406-.487 5.16 5.16 0 0 0-2.36.667 4.7 4.7 0 0 0-1.727 1.678 4.4 4.4 0 0 0-.616 2.274h1.8c0-.499.119-.944.362-1.353a2.9 2.9 0 0 1 1.072-1.035 3.41 3.41 0 0 1 3.109-.115c.481.227.881.56 1.167.958a2.51 2.51 0 0 1 .197 2.662 2.9 2.9 0 0 1-1.002 1.077 6 6 0 0 0-1.973 1.952 5.5 5.5 0 0 0-.815 2.607l-.001.023v.502h1.8v-.457a3.7 3.7 0 0 1 .549-1.73 4.2 4.2 0 0 1 1.386-1.366l.008-.004.007-.005a4.7 4.7 0 0 0 1.635-1.762 4.31 4.31 0 0 0-.328-4.548A4.8 4.8 0 0 0 14.21 4.52m-2.212 15.456a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgQuestionIcon)
export default ForwardRef
