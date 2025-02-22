import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarFillIcon = (
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
      d="M10.902 2.379c.19-.237.54-.586 1.098-.586s.91.35 1.099.586c.174.218.348.516.516.806q.014.022.027.046l2.309 3.963.022.038.043.01 4.483.97.051.012c.328.07.665.143.927.242.283.107.724.333.896.864s-.05.972-.217 1.225c-.154.234-.384.491-.607.74l-.036.04-3.056 3.42-.03.034.005.043.462 4.564.006.052c.034.334.069.677.056.956-.015.303-.094.792-.545 1.12s-.94.252-1.233.172c-.27-.074-.585-.213-.892-.349l-.048-.021-4.197-1.85-.04-.017q-.02.007-.041.017l-4.198 1.85-.048.021c-.307.136-.622.275-.892.349-.292.08-.781.156-1.233-.172-.45-.328-.53-.817-.544-1.12-.013-.279.022-.622.056-.956l.005-.052.462-4.564.004-.043-.029-.033-3.056-3.42-.035-.04c-.224-.25-.454-.507-.607-.74-.167-.254-.39-.696-.218-1.226.173-.531.613-.757.896-.864.262-.099.6-.172.927-.242l.052-.012 4.483-.97.043-.01.022-.038 2.308-3.963.027-.046c.169-.29.342-.588.517-.806"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStarFillIcon)
export default ForwardRef
