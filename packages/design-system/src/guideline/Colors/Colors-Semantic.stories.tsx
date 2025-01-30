import type { Meta, StoryObj } from '@storybook/react'
import { useGlobals } from 'storybook/internal/preview-api'
import clsx from 'clsx'

import { StorybookHeader } from '@/storybook-units/StorybookHeader'
import { StorybookDivider } from '@/storybook-units/StorybookDivider'
import { StorybookSubheader } from '@/storybook-units/StorybookSubheader'
import { Text } from '@/components/Text'
import { semanticVars } from '@/index.css'
import { sprinkles } from '@/sprinkles'

import { paletteColumn, paletteContainer } from './Colors.css'

const meta = {
  title: 'Theme/Color - Semantic',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Definition: Story = {
  render: () => {
    const globals = useGlobals()
    const theme = globals[0].theme as 'light' | 'dark'

    return (
      <div className={paletteContainer}>
        <StorybookHeader title="테마" description="색상 규칙을 안내합니다." />
        <StorybookDivider />
        <StorybookSubheader
          title="색상"
          description={
            '원티드 색상 규칙은 다음과 같이 구성되어 있습니다.\n보다 자세한 설명과 예시는 다음 예시 섹션에서 확인할 수 있습니다.'
          }
        />
        <div className={sprinkles({ display: 'flex' })}>
          <div className={paletteColumn}>
            <Text type="Heading 2" weight="bold" transform="capitalize">
              {theme}
            </Text>
          </div>
          <div className={paletteColumn}>
            <div>
              <Text type="Heading 2" weight="bold" transform="capitalize">
                Color
              </Text>
            </div>
            <div
              className={clsx(
                sprinkles({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }),
              )}
            >
              <SemanticColorRow
                title="Primary"
                colors={[
                  {
                    name: 'Normal',
                    color: semanticVars.PrimaryNormal,
                  },
                  {
                    name: 'Strong',
                    color: semanticVars.PrimaryStrong,
                  },
                  {
                    name: 'Heavy',
                    color: semanticVars.PrimaryHeavy,
                  },
                ]}
              />
              <SemanticColorRow
                title="Label"
                colors={[
                  {
                    name: 'Normal',
                    color: semanticVars.LabelNormal,
                  },
                  {
                    name: 'Strong',
                    color: semanticVars.LabelStrong,
                  },
                  {
                    name: 'Neutral',
                    color: semanticVars.LabelNeutral,
                  },
                  {
                    name: 'Alternative',
                    color: semanticVars.LabelAlternative,
                  },
                  {
                    name: 'Assistive',
                    color: semanticVars.LabelAssistive,
                    border: true,
                  },
                  {
                    name: 'Disable',
                    color: semanticVars.LabelDisable,
                    border: true,
                  },
                ]}
              />
              <SemanticColorRow
                title="Background"
                colors={[
                  {
                    name: 'Normal',
                    color: semanticVars.BackgroundNormalNormal,
                    border: true,
                  },
                  {
                    name: 'Alternative',
                    color: semanticVars.BackgroundNormalAlternative,
                    border: true,
                  },
                  {
                    name: 'Elevated Normal',
                    color: semanticVars.BackgroundElevatedNormal,
                    border: true,
                  },
                  {
                    name: 'Elevated Alternative',
                    color: semanticVars.BackgroundElevatedAlternative,
                    border: true,
                  },
                ]}
              />
              <SemanticColorRow
                title="Interaction"
                colors={[
                  {
                    name: 'Inactive',
                    color: semanticVars.InteractionInactive,
                  },
                  {
                    name: 'Disable',
                    color: semanticVars.InteractionDisable,
                    border: true,
                  },
                ]}
              />
              <SemanticColorRow
                title="Line"
                colors={[
                  {
                    name: 'Normal',
                    color: semanticVars.LineNormalNormal,
                    border: true,
                  },
                  {
                    name: 'Neutral',
                    color: semanticVars.LineNormalNeutral,
                    border: true,
                  },
                  {
                    name: 'Alternative',
                    color: semanticVars.LineNormalAlternative,
                    border: true,
                  },
                ]}
              />
              <SemanticColorRow
                title="Status"
                colors={[
                  {
                    name: 'Positive',
                    color: semanticVars.StatusPositive,
                  },
                  {
                    name: 'Cautionary',
                    color: semanticVars.StatusCautionary,
                  },
                ]}
              />
              <SemanticColorRow
                title="Accent"
                colors={[
                  {
                    name: 'Red Orange',
                    color: semanticVars.AccentRedOrange,
                  },
                  {
                    name: 'Lime',
                    color: semanticVars.AccentLime,
                  },
                  {
                    name: 'Cyan',
                    color: semanticVars.AccentCyan,
                  },
                  {
                    name: 'Light Blue',
                    color: semanticVars.AccentLightBlue,
                  },
                  {
                    name: 'Violet',
                    color: semanticVars.AccentViolet,
                  },
                  {
                    name: 'Purple',
                    color: semanticVars.AccentPurple,
                  },
                  {
                    name: 'Pink',
                    color: semanticVars.AccentPink,
                  },
                ]}
              />
              <SemanticColorRow
                title="Inverse"
                colors={[
                  {
                    name: 'Primary',
                    color: semanticVars.InversePrimary,
                  },
                  {
                    name: 'Background',
                    color: semanticVars.InverseBackground,
                  },
                  {
                    name: 'Label',
                    color: semanticVars.InverseLabel,
                    border: true,
                  },
                ]}
              />
              <SemanticColorRow
                title="Static"
                colors={[
                  {
                    name: 'White',
                    color: semanticVars.StaticWhite,
                    border: true,
                  },
                  {
                    name: 'Black',
                    color: semanticVars.StaticBlack,
                    border: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

function SemanticColorRow({
  colors,
  title,
}: {
  colors: { name: string; color: string; border?: boolean }[]
  title: string
}) {
  return (
    <div
      className={clsx(
        sprinkles({
          display: 'flex',
          gap: '24px',
          flexDirection: 'column',
          width: '50%',
          marginBlock: '24px',
        }),
      )}
    >
      <Text type="Heading 2" weight="bold" transform="capitalize">
        {title}
      </Text>
      <div className={sprinkles({ display: 'flex', gap: '32px' })}>
        {colors.map((color) => (
          <div
            key={color.name}
            className={clsx(
              sprinkles({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
              }),
            )}
          >
            <div
              className={clsx(
                sprinkles({
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  ...(color.border && {
                    borderColor: 'LineNormalNeutral',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }),
                }),
              )}
              style={{ backgroundColor: color.color }}
            />
            <Text type="Caption 2" weight="bold" transform="capitalize">
              {color.name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
