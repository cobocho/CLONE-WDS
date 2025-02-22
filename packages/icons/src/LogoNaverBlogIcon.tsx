import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoNaverBlogIcon = (
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
      d="M5.506 4.08h12.989A3.405 3.405 0 0 1 21.9 7.486v8.058a3.405 3.405 0 0 1-3.405 3.406H13.87l-1.564 2.703a.372.372 0 0 1-.643 0l-1.565-2.703H5.506A3.405 3.405 0 0 1 2.1 15.544V7.486A3.405 3.405 0 0 1 5.506 4.08m1.198 9.682c-.377 0-.723-.158-1-.425v.326H4.585v-4.93h1.119v1.564c.277-.267.614-.425 1-.425 1.03 0 1.87.87 1.87 1.95 0 1.079-.84 1.94-1.87 1.94m3.683-.099h-1.13v-3.237c0-.545-.296-.802-.603-.812v-1c.752.05 1.732.545 1.732 1.802zm2.583.1a1.95 1.95 0 0 1-1.95-1.951c0-1.08.871-1.95 1.95-1.95 1.08 0 1.95.87 1.95 1.95s-.87 1.95-1.95 1.95Zm6.435-.377c0 1.505-1.148 1.832-1.94 1.861v-.99c.713-.04.871-.386.861-1.01v-.069a1.45 1.45 0 0 1-1.03.446 1.876 1.876 0 0 1-1.87-1.871c0-1.03.841-1.872 1.87-1.872.397 0 .753.169 1.03.446V9.99h1.08zm-1.02-1.643c0 .505-.425.92-.95.92s-.95-.415-.95-.92.426-.921.95-.921c.525 0 .95.416.95.92Zm-10.85.079a.961.961 0 1 1-1.922-.002.961.961 0 0 1 1.922.002m6.356 0c0 .505-.416.92-.92.92a.925.925 0 0 1-.921-.92c0-.505.415-.92.92-.92s.921.415.921.92"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoNaverBlogIcon)
export default ForwardRef
