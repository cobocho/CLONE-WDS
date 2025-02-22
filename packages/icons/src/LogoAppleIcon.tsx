import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoAppleIcon = (
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
      fill="#000"
      d="M8.956 21.948c1.28 0 1.842-.888 3.437-.888 1.596 0 1.978.854 3.393.854 1.416 0 2.326-1.326 3.213-2.629.989-1.494 1.393-2.955 1.427-3.022-.09-.022-2.764-1.157-2.764-4.314 0-2.741 2.113-3.977 2.225-4.067-1.393-2.067-3.517-2.112-4.09-2.112-1.561 0-2.842.977-3.65.977-.866 0-2.012-.92-3.371-.92-2.584 0-5.202 2.201-5.202 6.347 0 2.572.978 5.302 2.168 7.066 1.023 1.494 1.922 2.719 3.214 2.719zm3.291-16.425c.933 0 2.112-.652 2.809-1.517.63-.786 1.09-1.887 1.09-2.988 0-.146-.012-.304-.045-.416-1.045.045-2.292.72-3.045 1.63-.595.696-1.134 1.774-1.134 2.886 0 .158.022.326.044.382.068.012.169.023.281.023"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoAppleIcon)
export default ForwardRef
