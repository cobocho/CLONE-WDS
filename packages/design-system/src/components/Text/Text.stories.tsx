import type { Meta, StoryObj } from '@storybook/react'
import { lightColors, paletteColors } from '@repo/design-tokens'

import { Text } from './Text'

const meta = {
  title: 'Text',
  component: Text,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    color: 'LabelNormal',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '텍스트 내용',
      name: 'content',
    },
    color: {
      options: [...Object.keys(lightColors), ...Object.keys(paletteColors)],
      control: { type: 'select' },
      description: '텍스트 색상',
    },
    as: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
