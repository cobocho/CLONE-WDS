'use client'

import Image, { type ImageProps } from 'next/image'
import { Button, semanticVars, Text, useTheme } from '@repo/design-system'
import ToggleDarkmode from './_components'

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

export default function Home() {
  return (
    <div>
      <Text color="red">Hello</Text>
      <ToggleDarkmode />
    </div>
  )
}
