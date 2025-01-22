import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderFillIcon = (
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
      d="M8.713 4.1c.188 0 .41-.001.628.05a1.9 1.9 0 0 1 .539.218c.192.115.351.269.486.4l.035.033 1.142 1.103a6 6 0 0 0 .198.185l.017.007.029.002c.048.002.115.002.242.002h8.193c.12 0 .259 0 .38.01a1.4 1.4 0 0 1 .534.143 1.4 1.4 0 0 1 .612.611c.102.202.131.395.142.534.01.121.01.26.01.38v10.444c0 .12 0 .259-.01.38a1.4 1.4 0 0 1-.142.534 1.4 1.4 0 0 1-.612.611 1.4 1.4 0 0 1-.534.143c-.121.01-.26.01-.38.01H3.778c-.12 0-.258 0-.38-.01a1.4 1.4 0 0 1-.533-.143 1.4 1.4 0 0 1-.612-.611 1.4 1.4 0 0 1-.143-.534c-.01-.121-.01-.26-.01-.38V5.778c0-.12 0-.259.01-.38a1.4 1.4 0 0 1 .143-.534 1.4 1.4 0 0 1 .612-.611c.201-.103.395-.132.534-.143.12-.01.259-.01.38-.01z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderFillIcon)
export default ForwardRef
