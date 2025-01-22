import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoApple2Icon = (
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
      d="M8.956 21.948c1.28 0 1.842-.888 3.438-.888 1.595 0 1.977.854 3.392.854 1.416 0 2.326-1.326 3.213-2.629.989-1.494 1.393-2.955 1.427-3.022-.09-.022-2.763-1.157-2.763-4.314 0-2.741 2.112-3.977 2.224-4.067-1.393-2.067-3.517-2.112-4.09-2.112-1.561 0-2.842.977-3.65.977-.866 0-2.012-.92-3.371-.92-2.584 0-5.202 2.201-5.202 6.347 0 2.572.978 5.302 2.169 7.066 1.022 1.494 1.92 2.719 3.213 2.719zm3.291-16.425c.933 0 2.113-.652 2.81-1.517.628-.786 1.089-1.887 1.089-2.988a1.6 1.6 0 0 0-.045-.416c-1.045.045-2.292.72-3.045 1.63-.595.696-1.134 1.774-1.134 2.886 0 .158.022.326.045.382.067.012.168.023.28.023"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoApple2Icon)
export default ForwardRef
