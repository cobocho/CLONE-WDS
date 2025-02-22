import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoNaverBlog2Icon = (
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
      fill="#00C73C"
      d="M18.494 4.08H5.506A3.405 3.405 0 0 0 2.1 7.486v8.058a3.405 3.405 0 0 0 3.406 3.406h4.593l1.565 2.703a.372.372 0 0 0 .643 0l1.564-2.703h4.623a3.405 3.405 0 0 0 3.406-3.406V7.486a3.405 3.405 0 0 0-3.405-3.406Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M5.704 13.336c.277.268.623.426 1 .426 1.03 0 1.87-.861 1.87-1.94 0-1.08-.84-1.95-1.87-1.95-.387 0-.723.158-1 .425V8.733H4.585v4.93h1.119zm3.554.327h1.128v-3.247c0-1.257-.98-1.752-1.732-1.802v1c.307.01.604.267.604.812zm1.762-1.851c0 1.079.871 1.95 1.95 1.95 1.08 0 1.95-.871 1.95-1.95 0-1.08-.87-1.95-1.95-1.95-1.079 0-1.95.87-1.95 1.95m6.445 3.435c.792-.03 1.94-.356 1.94-1.861V9.99h-1.079v.337a1.45 1.45 0 0 0-1.03-.446c-1.029 0-1.87.842-1.87 1.871 0 1.03.841 1.871 1.87 1.871.397 0 .753-.168 1.03-.445v.07c.01.623-.148.97-.861 1.01v.99Zm-.03-2.584c.525 0 .95-.416.95-.92 0-.505-.425-.921-.95-.921s-.95.416-.95.92c0 .505.425.921.95.921m-10.86.119a.961.961 0 1 0-.002-1.922.961.961 0 0 0 .002 1.922m6.395-.04a.925.925 0 0 0 .921-.92.925.925 0 0 0-.92-.921.925.925 0 0 0-.921.92c0 .506.415.921.92.921"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoNaverBlog2Icon)
export default ForwardRef
