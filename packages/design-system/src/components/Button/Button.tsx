import React from 'react'
import { AndroidIcon } from '@repo/icons'

import { button } from './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${button}`}>
      <AndroidIcon width={48} height={48} />
      {children}
    </button>
  )
}
