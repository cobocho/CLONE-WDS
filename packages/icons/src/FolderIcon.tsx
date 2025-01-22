import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderIcon = (
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
      d="M8.665 5.9a6 6 0 0 1 .27.004l.018.007a6 6 0 0 1 .198.185l1.142 1.102.035.034c.134.13.293.285.486.4q.252.15.539.218c.218.05.44.05.627.05h8.12v10.2H3.9V5.9zm.676-1.75c-.219-.051-.44-.05-.628-.05H3.778c-.12 0-.258 0-.38.01a1.4 1.4 0 0 0-.533.142 1.4 1.4 0 0 0-.612.612 1.4 1.4 0 0 0-.143.534c-.01.121-.01.26-.01.38v12.444c0 .12 0 .258.01.38.011.139.04.332.143.533a1.4 1.4 0 0 0 .612.612c.201.103.395.132.534.143.12.01.259.01.38.01h16.443c.12 0 .259 0 .38-.01a1.4 1.4 0 0 0 .534-.143 1.4 1.4 0 0 0 .612-.612 1.4 1.4 0 0 0 .142-.534c.011-.133.01-.267.01-.401V7.778c0-.12 0-.259-.01-.38a1.4 1.4 0 0 0-.142-.534 1.4 1.4 0 0 0-.612-.612 1.4 1.4 0 0 0-.534-.142c-.121-.01-.26-.01-.38-.01H12.03a6 6 0 0 1-.271-.004l-.017-.007a6 6 0 0 1-.198-.185l-1.177-1.137a2.7 2.7 0 0 0-.486-.4 1.9 1.9 0 0 0-.54-.217"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderIcon)
export default ForwardRef
