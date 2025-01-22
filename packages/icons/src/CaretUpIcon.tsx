import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCaretUpIcon = (
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
      d="M13.215 9.417c-.419-.488-.628-.732-.877-.822a1 1 0 0 0-.676 0c-.25.09-.459.334-.877.822L8.264 12.36c-.72.84-1.08 1.26-1.09 1.616a1 1 0 0 0 .368.8c.276.225.83.225 1.937.225h5.042c1.107 0 1.66 0 1.936-.225a1 1 0 0 0 .368-.8c-.009-.355-.369-.776-1.09-1.616z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCaretUpIcon)
export default ForwardRef
