import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgLogoFacebook2Icon = (
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
      d="M12 2.1c-5.465 0-9.9 4.435-9.9 9.9 0 4.94 3.623 9.039 8.356 9.781v-6.92H7.94v-2.86h2.515v-2.18c0-2.485 1.475-3.851 3.742-3.851 1.079 0 2.217.198 2.217.198v2.435h-1.247c-1.228 0-1.614.763-1.614 1.545v1.861h2.743l-.436 2.861h-2.307v6.92c4.732-.742 8.346-4.85 8.346-9.79a9.887 9.887 0 0 0-9.89-9.891z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoFacebook2Icon)
export default ForwardRef
