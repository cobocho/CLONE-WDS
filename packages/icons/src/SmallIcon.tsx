import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSmallIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#171719"
        d="M7.787 2.708a.75.75 0 0 1 .75-.75h2.915a.75.75 0 1 1 0 1.5H8.537a.75.75 0 0 1-.75-.75m-1.415-.011a.75.75 0 0 1-.726.772c-.714.022-1.012.078-1.224.187l-.007.004c-.322.16-.59.43-.77.775-.11.212-.165.51-.187 1.221a.75.75 0 1 1-1.5-.045c.022-.71.074-1.32.353-1.864l.002-.004A3.28 3.28 0 0 1 3.74 2.32c.543-.278 1.15-.329 1.86-.35a.75.75 0 0 1 .772.727m7.245 0a.75.75 0 0 1 .772-.727c.71.021 1.317.072 1.86.35a3.28 3.28 0 0 1 1.427 1.423l.002.004c.28.544.331 1.153.352 1.864a.75.75 0 1 1-1.499.045c-.021-.711-.078-1.009-.186-1.22a1.77 1.77 0 0 0-.77-.776l-.008-.004c-.212-.109-.51-.165-1.223-.187a.75.75 0 0 1-.727-.772M2.708 7.787a.75.75 0 0 1 .75.75v2.915a.75.75 0 0 1-1.5 0V8.537a.75.75 0 0 1 .75-.75m14.572 0a.75.75 0 0 1 .75.75v2.915a.75.75 0 1 1-1.5 0V8.537a.75.75 0 0 1 .75-.75m.034 5.83a.75.75 0 0 1 .727.772c-.021.711-.073 1.32-.352 1.864l-.003.005a3.27 3.27 0 0 1-1.426 1.422c-.543.278-1.151.33-1.86.35a.75.75 0 1 1-.046-1.499c.714-.021 1.012-.078 1.224-.187l.007-.004c.322-.16.59-.429.77-.775.11-.212.165-.51.187-1.221a.75.75 0 0 1 .772-.727m-14.628.011a.75.75 0 0 1 .772.726c.022.715.078 1.012.187 1.224l.004.007c.16.322.43.59.775.771.212.108.51.164 1.222.186a.75.75 0 0 1-.046 1.5c-.71-.022-1.32-.074-1.864-.353l-.004-.002a3.27 3.27 0 0 1-1.423-1.427c-.278-.543-.329-1.15-.35-1.86a.75.75 0 0 1 .727-.772m5.101 3.653a.75.75 0 0 1 .75-.75h2.915a.75.75 0 1 1 0 1.5H8.537a.75.75 0 0 1-.75-.75"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#171719" d="M0 0h20v20H0z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgSmallIcon)
export default ForwardRef
