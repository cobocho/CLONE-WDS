import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTriangleIcon = (
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
      d="M13.178 2.85a2.9 2.9 0 0 0-2.356 0c-.523.233-.9.659-1.229 1.122-.325.46-.683 1.078-1.119 1.83l-5.494 9.49c-.438.756-.797 1.377-1.034 1.889-.239.517-.42 1.058-.361 1.628a2.9 2.9 0 0 0 1.179 2.045c.463.337 1.023.45 1.59.503.562.051 1.28.051 2.152.051h10.988c.873 0 1.59 0 2.152-.051.568-.052 1.127-.166 1.59-.503a2.9 2.9 0 0 0 1.18-2.045c.059-.57-.123-1.111-.362-1.628-.237-.512-.596-1.133-1.034-1.888l-5.494-9.49c-.436-.753-.794-1.372-1.12-1.831-.327-.463-.705-.89-1.228-1.122m-.731 1.645a1.1 1.1 0 0 0-.894 0c-.07.031-.216.13-.491.517-.272.384-.589.93-1.052 1.73l-5.45 9.414c-.465.803-.782 1.352-.98 1.78-.2.434-.213.61-.205.686a1.1 1.1 0 0 0 .447.776c.062.045.221.123.696.166.47.044 1.104.044 2.032.044h10.9c.928 0 1.562 0 2.032-.044.475-.043.634-.12.696-.166a1.1 1.1 0 0 0 .447-.776c.008-.076-.004-.252-.205-.685-.198-.429-.515-.978-.98-1.781l-5.45-9.413c-.463-.8-.78-1.347-1.052-1.73-.274-.388-.42-.487-.491-.518"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangleIcon)
export default ForwardRef
