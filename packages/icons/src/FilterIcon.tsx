import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterIcon = (
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
      d="M6.64 2.598h10.72c.545 0 1.015 0 1.38.033.35.031.812.104 1.178.41.46.384.71.962.678 1.56-.026.477-.288.863-.503 1.14-.226.29-.547.634-.919 1.032l-4.274 4.58v8.805c0 .12 0 .263-.011.386a1.23 1.23 0 0 1-.226.63 1.2 1.2 0 0 1-.867.481 1.23 1.23 0 0 1-.654-.143c-.11-.055-.232-.132-.333-.195l-3.072-1.92c-.053-.032-.22-.132-.348-.282a1.2 1.2 0 0 1-.234-.422 1.5 1.5 0 0 1-.055-.445v-6.895l-4.274-4.58a17 17 0 0 1-.919-1.032c-.216-.277-.477-.663-.503-1.14a1.9 1.9 0 0 1 .678-1.56c.366-.306.827-.379 1.177-.41.366-.033.836-.033 1.381-.033M5.2 4.518c.001.008.005.025.028.05l5.43 5.817a.9.9 0 0 1 .242.614v7.003l2.2 1.375v-8.378a.9.9 0 0 1 .242-.614l5.43-5.818c.023-.024.027-.04.028-.05a.1.1 0 0 0-.01-.058.1.1 0 0 0-.036-.046c-.007-.006-.022-.014-.055-.014H5.3c-.033 0-.048.008-.056.014a.1.1 0 0 0-.036.046.1.1 0 0 0-.009.058Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFilterIcon)
export default ForwardRef
