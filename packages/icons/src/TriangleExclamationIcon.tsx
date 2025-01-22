import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTriangleExclamationIcon = (
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
      d="M13.178 2.85a2.9 2.9 0 0 0-2.356 0c-.523.233-.9.659-1.229 1.122-.325.46-.683 1.078-1.119 1.83l-5.494 9.49c-.437.756-.797 1.377-1.034 1.889-.239.517-.42 1.058-.361 1.628a2.9 2.9 0 0 0 1.179 2.045c.463.337 1.023.45 1.59.503.562.051 1.28.051 2.152.051h10.989c.872 0 1.59 0 2.152-.051.567-.052 1.126-.166 1.59-.503a2.9 2.9 0 0 0 1.179-2.045c.06-.57-.123-1.111-.362-1.628-.237-.512-.596-1.133-1.034-1.888l-5.494-9.49c-.435-.753-.793-1.372-1.119-1.831-.328-.463-.706-.89-1.229-1.122m-.73 1.645a1.1 1.1 0 0 0-.895 0c-.07.031-.216.13-.49.517-.273.384-.59.93-1.053 1.73l-5.45 9.414c-.465.803-.782 1.352-.98 1.78-.2.434-.213.61-.205.686a1.1 1.1 0 0 0 .447.776c.062.045.221.123.696.166.47.044 1.104.044 2.032.044h10.9c.928 0 1.562 0 2.032-.044.475-.043.634-.12.696-.166a1.1 1.1 0 0 0 .447-.776c.008-.076-.004-.252-.204-.685-.199-.429-.515-.978-.98-1.781l-5.45-9.413c-.464-.8-.78-1.347-1.053-1.73-.274-.388-.42-.487-.49-.518M11.1 9.014h1.8v5.997h-1.8zm2.1 8.196a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangleExclamationIcon)
export default ForwardRef
