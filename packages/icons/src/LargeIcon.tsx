import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLargeIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#171719"
        d="M12.46 4.333a1.2 1.2 0 0 1 1.2-1.2h4.663a1.2 1.2 0 0 1 0 2.4H13.66a1.2 1.2 0 0 1-1.2-1.2m-2.264-.019A1.2 1.2 0 0 1 9.033 5.55c-1.143.035-1.618.125-1.957.3l-.013.006a2.84 2.84 0 0 0-1.232 1.24c-.174.34-.264.816-.298 1.954a1.2 1.2 0 1 1-2.4-.072c.035-1.138.118-2.113.565-2.983l.004-.007a5.24 5.24 0 0 1 2.282-2.276c.869-.444 1.842-.526 2.976-.56a1.2 1.2 0 0 1 1.236 1.162m11.591 0a1.2 1.2 0 0 1 1.236-1.163c1.134.035 2.107.117 2.976.561a5.24 5.24 0 0 1 2.282 2.276l.004.007c.447.87.53 1.845.564 2.983a1.2 1.2 0 0 1-2.4.072c-.034-1.138-.124-1.615-.297-1.954a2.84 2.84 0 0 0-1.233-1.24l-.012-.006c-.339-.175-.815-.265-1.957-.3a1.2 1.2 0 0 1-1.163-1.236M4.333 12.46a1.2 1.2 0 0 1 1.2 1.2v4.663a1.2 1.2 0 1 1-2.4 0V13.66a1.2 1.2 0 0 1 1.2-1.2m23.317 0a1.2 1.2 0 0 1 1.2 1.2v4.663a1.2 1.2 0 1 1-2.4 0V13.66a1.2 1.2 0 0 1 1.2-1.2m.053 9.327a1.2 1.2 0 0 1 1.163 1.236c-.034 1.137-.117 2.112-.564 2.982l-.004.007a5.24 5.24 0 0 1-2.282 2.276c-.869.445-1.842.527-2.976.561a1.2 1.2 0 1 1-.073-2.399c1.143-.034 1.618-.125 1.957-.3l.012-.006a2.84 2.84 0 0 0 1.233-1.24c.174-.339.264-.815.298-1.954a1.2 1.2 0 0 1 1.236-1.163m-23.406.017a1.2 1.2 0 0 1 1.236 1.163c.034 1.143.125 1.619.3 1.958l.005.012c.258.514.687.942 1.24 1.233.34.173.816.263 1.955.297a1.2 1.2 0 1 1-.073 2.4c-1.137-.035-2.112-.117-2.982-.565l-.007-.003a5.24 5.24 0 0 1-2.276-2.283c-.445-.868-.527-1.841-.561-2.976a1.2 1.2 0 0 1 1.163-1.236m8.163 5.846a1.2 1.2 0 0 1 1.2-1.2h4.663a1.2 1.2 0 0 1 0 2.4H13.66a1.2 1.2 0 0 1-1.2-1.2"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#171719" d="M0 0h32v32H0z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgLargeIcon)
export default ForwardRef
