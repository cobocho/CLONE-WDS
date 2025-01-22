import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTriangleFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#171719"
      fillRule="evenodd"
      d="M13.178 2.85a2.9 2.9 0 0 0-2.356 0c-.523.233-.9.659-1.229 1.122-.325.46-.683 1.078-1.119 1.83l-5.494 9.49c-.437.756-.797 1.377-1.034 1.889-.239.517-.42 1.058-.361 1.628a2.9 2.9 0 0 0 1.179 2.045c.463.337 1.023.45 1.59.503.562.051 1.28.051 2.152.051h10.988c.873 0 1.59 0 2.152-.051.568-.052 1.127-.166 1.59-.503a2.9 2.9 0 0 0 1.18-2.045c.06-.57-.123-1.111-.362-1.628-.237-.512-.596-1.133-1.034-1.888l-5.494-9.49c-.435-.753-.794-1.372-1.119-1.831-.328-.463-.706-.89-1.229-1.122"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangleFillIcon)
export default ForwardRef
