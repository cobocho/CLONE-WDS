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
      <Text color="LabelNormal">
        타이포그래피: ‘Typography’, 1972. @ㅇ0ㅇ ₩0 〈응♥〉 『힣♪』
      </Text>
      <ToggleDarkmode />
    </div>
  )
}
