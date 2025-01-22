import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgDocumentPersonFillIcon = (
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
      d="M5.37 2.117c.204-.017.446-.017.7-.017h7.63v6.8h6.7v10.53c0 .254 0 .496-.016.7a2 2 0 0 1-.19.733 1.9 1.9 0 0 1-.831.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H6.07c-.254 0-.496 0-.7-.016a1.9 1.9 0 0 1-.732-.191 1.9 1.9 0 0 1-.83-.83 1.9 1.9 0 0 1-.191-.733 9 9 0 0 1-.017-.7V4.57c0-.254 0-.496.017-.7.018-.222.06-.478.19-.732a1.9 1.9 0 0 1 .83-.83c.256-.13.51-.173.733-.191M10 15.8q.516 0 .883-.367c.367-.367.367-.54.367-.883q0-.516-.367-.883A1.2 1.2 0 0 0 10 13.3q-.515 0-.882.367a1.2 1.2 0 0 0-.368.883q0 .516.368.883A1.2 1.2 0 0 0 10 15.8m2.5 2.5v-.36a1.25 1.25 0 0 0-.766-1.156 4.7 4.7 0 0 0-.835-.265 4.2 4.2 0 0 0-.899-.094q-.468 0-.898.094a4.7 4.7 0 0 0-.836.266A1.25 1.25 0 0 0 7.5 17.94v.36z"
      clipRule="evenodd"
    />
    <path fill="#171719" d="m19.565 6.826-3.79-3.98v3.98z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentPersonFillIcon)
export default ForwardRef
