import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBusinessBagFillIcon = (
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
      d="M8.778 2.1h6.444c.12 0 .259 0 .38.01.14.011.332.04.534.143a1.4 1.4 0 0 1 .612.612c.102.201.131.394.142.533.01.121.01.26.01.38V5.6h1.734c.391 0 .738 0 1.025.024.306.025.623.08.93.238a2.4 2.4 0 0 1 1.05 1.049c.157.308.213.625.238.93.023.288.023.634.023 1.026v8.766c0 .392 0 .738-.023 1.026a2.4 2.4 0 0 1-.238.93 2.4 2.4 0 0 1-1.05 1.05c-.307.157-.624.213-.93.238-.287.023-.634.023-1.025.023H5.367c-.391 0-.738 0-1.025-.023-.306-.025-.623-.081-.931-.238a2.4 2.4 0 0 1-1.05-1.05 2.4 2.4 0 0 1-.237-.93c-.024-.287-.024-.634-.024-1.025V8.867c0-.392 0-.738.024-1.025.025-.306.08-.623.238-.931A2.4 2.4 0 0 1 3.41 5.86c.308-.156.625-.212.93-.237A14 14 0 0 1 5.368 5.6H7.1V3.778c0-.12 0-.259.01-.38.012-.139.04-.332.143-.533a1.4 1.4 0 0 1 .612-.612c.201-.103.395-.132.534-.143.12-.01.259-.01.38-.01ZM15.1 3.9v1.7H8.9V3.9zm-5.85 8h5.5v-1.8h-5.5z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBusinessBagFillIcon)
export default ForwardRef
