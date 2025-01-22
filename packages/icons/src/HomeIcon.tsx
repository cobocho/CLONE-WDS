import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHomeIcon = (
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
      d="M12.547 2.285a.9.9 0 0 0-1.094 0l-8.5 6.5A.9.9 0 0 0 2.6 9.5v9.43c0 .254 0 .496.017.7.018.222.06.477.19.732a1.9 1.9 0 0 0 .83.83c.256.13.51.173.733.191.204.017.446.017.7.017h13.86c.254 0 .496 0 .7-.017.223-.018.478-.06.733-.19a1.9 1.9 0 0 0 .83-.83c.13-.256.172-.51.19-.733.017-.204.017-.446.017-.7V9.5a.9.9 0 0 0-.353-.715zm-.608 1.894a.1.1 0 0 1 .122 0l7.5 5.735a.1.1 0 0 1 .04.08V19.5a.1.1 0 0 1-.1.1h-6.6V14h-1.8v5.6H4.5a.1.1 0 0 1-.1-.1V9.994a.1.1 0 0 1 .038-.08z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHomeIcon)
export default ForwardRef
