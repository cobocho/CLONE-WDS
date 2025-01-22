import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoYoutube2Icon = (
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
      fill="red"
      d="M22.203 6.877a2.67 2.67 0 0 0-1.885-1.885C18.656 4.545 12 4.545 12 4.545s-6.656 0-8.317.447c-.916.245-1.64.97-1.885 1.885C1.35 8.54 1.35 12 1.35 12s0 3.461.448 5.123c.244.916.969 1.64 1.885 1.885 1.661.447 8.317.447 8.317.447s6.657 0 8.318-.447a2.67 2.67 0 0 0 1.885-1.885C22.65 15.46 22.65 12 22.65 12s0-3.461-.447-5.123"
    />
    <path fill="#fff" d="M9.87 15.195v-6.39L15.408 12z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoYoutube2Icon)
export default ForwardRef
