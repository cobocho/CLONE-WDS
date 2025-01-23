import type { Meta, StoryObj } from '@storybook/react'
import { paletteColors } from '@repo/design-tokens'
import clsx from 'clsx'

import { StorybookHeader } from '@/storybook-units/StorybookHeader'
import { StorybookDivider } from '@/storybook-units/StorybookDivider'
import { StorybookSubheader } from '@/storybook-units/StorybookSubheader'
import { sizeSprinkles, spaceSprinkles } from '@/sprinkles/space.css'
import { displaySprinkles } from '@/sprinkles/display.css'
import { Text } from '@/components/Text'
import { borderSprinkles } from '@/sprinkles/border.css'

import { paletteContainer } from './Colors.css'

const meta = {
  title: 'Theme/Color - Palette',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Definition: Story = {
  render: () => {
    return (
      <div className={paletteContainer}>
        <StorybookHeader title="컬러 정의" />
        <StorybookDivider />
        <StorybookSubheader title="색" />
        <div
          className={displaySprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          })}
        >
          <ColorRow
            title="Common"
            colors={[
              {
                name: 'Common100',
                color: paletteColors.Common100,
              },
              {
                name: 'Common0',
                color: paletteColors.Common0,
              },
            ]}
          />
          <ColorRow
            title="Neutral"
            colors={[
              {
                name: 'Neutral99',
                color: paletteColors.Neutral99,
              },
              {
                name: 'Neutral95',
                color: paletteColors.Neutral95,
              },
              {
                name: 'Neutral90',
                color: paletteColors.Neutral90,
              },
              {
                name: 'Neutral80',
                color: paletteColors.Neutral80,
              },
              {
                name: 'Neutral70',
                color: paletteColors.Neutral70,
              },
              {
                name: 'Neutral60',
                color: paletteColors.Neutral60,
              },
              {
                name: 'Neutral50',
                color: paletteColors.Neutral50,
              },
              {
                name: 'Neutral30',
                color: paletteColors.Neutral30,
              },
              {
                name: 'Neutral40',
                color: paletteColors.Neutral40,
              },
              {
                name: 'Neutral22',
                color: paletteColors.Neutral22,
              },
              {
                name: 'Neutral20',
                color: paletteColors.Neutral20,
              },
              {
                name: 'Neutral15',
                color: paletteColors.Neutral15,
              },
              {
                name: 'Neutral10',
                color: paletteColors.Neutral10,
              },
              {
                name: 'Neutral5',
                color: paletteColors.Neutral5,
              },
            ]}
          />
          <ColorRow
            title="CoolNeutral"
            colors={[
              {
                name: 'CoolNeutral99',
                color: paletteColors.CoolNeutral99,
              },
              {
                name: 'CoolNeutral98',
                color: paletteColors.CoolNeutral98,
              },
              {
                name: 'CoolNeutral97',
                color: paletteColors.CoolNeutral97,
              },
              {
                name: 'CoolNeutral96',
                color: paletteColors.CoolNeutral96,
              },
              {
                name: 'CoolNeutral95',
                color: paletteColors.CoolNeutral95,
              },
              {
                name: 'CoolNeutral90',
                color: paletteColors.CoolNeutral90,
              },
              {
                name: 'CoolNeutral80',
                color: paletteColors.CoolNeutral80,
              },
              {
                name: 'CoolNeutral70',
                color: paletteColors.CoolNeutral70,
              },
              {
                name: 'CoolNeutral60',
                color: paletteColors.CoolNeutral60,
              },
              {
                name: 'CoolNeutral50',
                color: paletteColors.CoolNeutral50,
              },
              {
                name: 'CoolNeutral40',
                color: paletteColors.CoolNeutral40,
              },
              {
                name: 'CoolNeutral30',
                color: paletteColors.CoolNeutral30,
              },
              {
                name: 'CoolNeutral23',
                color: paletteColors.CoolNeutral23,
              },
              {
                name: 'CoolNeutral22',
                color: paletteColors.CoolNeutral22,
              },
              {
                name: 'CoolNeutral20',
                color: paletteColors.CoolNeutral20,
              },
              {
                name: 'CoolNeutral17',
                color: paletteColors.CoolNeutral17,
              },
              {
                name: 'CoolNeutral15',
                color: paletteColors.CoolNeutral15,
              },
              {
                name: 'CoolNeutral10',
                color: paletteColors.CoolNeutral10,
              },
              {
                name: 'CoolNeutral7',
                color: paletteColors.CoolNeutral7,
              },
              {
                name: 'CoolNeutral5',
                color: paletteColors.CoolNeutral5,
              },
            ]}
          />
          <ColorRow
            title="Red"
            colors={[
              {
                name: 'Red99',
                color: paletteColors.Red99,
              },
              {
                name: 'Red95',
                color: paletteColors.Red95,
              },
              {
                name: 'Red90',
                color: paletteColors.Red90,
              },
              {
                name: 'Red80',
                color: paletteColors.Red80,
              },
              {
                name: 'Red70',
                color: paletteColors.Red70,
              },
              {
                name: 'Red60',
                color: paletteColors.Red60,
              },
              {
                name: 'Red50',
                color: paletteColors.Red50,
              },
              {
                name: 'Red40',
                color: paletteColors.Red40,
              },
              {
                name: 'Red30',
                color: paletteColors.Red30,
              },
              {
                name: 'Red20',
                color: paletteColors.Red20,
              },
              {
                name: 'Red10',
                color: paletteColors.Red10,
              },
            ]}
          />
          <ColorRow
            title="Blue"
            colors={[
              {
                name: 'Blue99',
                color: paletteColors.Blue99,
              },
              {
                name: 'Blue95',
                color: paletteColors.Blue95,
              },
              {
                name: 'Blue90',
                color: paletteColors.Blue90,
              },
              {
                name: 'Blue80',
                color: paletteColors.Blue80,
              },
              {
                name: 'Blue70',
                color: paletteColors.Blue70,
              },
              {
                name: 'Blue60',
                color: paletteColors.Blue60,
              },
              {
                name: 'Blue50',
                color: paletteColors.Blue50,
              },
              {
                name: 'Blue40',
                color: paletteColors.Blue40,
              },
              {
                name: 'Blue30',
                color: paletteColors.Blue30,
              },
              {
                name: 'Blue20',
                color: paletteColors.Blue20,
              },
              {
                name: 'Blue10',
                color: paletteColors.Blue10,
              },
            ]}
          />
          <ColorRow
            title="Green"
            colors={[
              {
                name: 'Green99',
                color: paletteColors.Green99,
              },
              {
                name: 'Green95',
                color: paletteColors.Green95,
              },
              {
                name: 'Green90',
                color: paletteColors.Green90,
              },
              {
                name: 'Green80',
                color: paletteColors.Green80,
              },
              {
                name: 'Green70',
                color: paletteColors.Green70,
              },
              {
                name: 'Green60',
                color: paletteColors.Green60,
              },
              {
                name: 'Green50',
                color: paletteColors.Green50,
              },
              {
                name: 'Green40',
                color: paletteColors.Green40,
              },
              {
                name: 'Green30',
                color: paletteColors.Green30,
              },
              {
                name: 'Green20',
                color: paletteColors.Green20,
              },
              {
                name: 'Green10',
                color: paletteColors.Green10,
              },
            ]}
          />
          <ColorRow
            title="Orange"
            colors={[
              {
                name: 'Orange99',
                color: paletteColors.Orange99,
              },
              {
                name: 'Orange95',
                color: paletteColors.Orange95,
              },
              {
                name: 'Orange90',
                color: paletteColors.Orange90,
              },
              {
                name: 'Orange80',
                color: paletteColors.Orange80,
              },
              {
                name: 'Orange70',
                color: paletteColors.Orange70,
              },
              {
                name: 'Orange60',
                color: paletteColors.Orange60,
              },
              {
                name: 'Orange50',
                color: paletteColors.Orange50,
              },
              {
                name: 'Orange40',
                color: paletteColors.Orange40,
              },
              {
                name: 'Orange30',
                color: paletteColors.Orange30,
              },
              {
                name: 'Orange20',
                color: paletteColors.Orange20,
              },
              {
                name: 'Orange10',
                color: paletteColors.Orange10,
              },
            ]}
          />
          <ColorRow
            title="Red Orange"
            colors={[
              {
                name: 'RedOrange99',
                color: paletteColors.RedOrange99,
              },
              {
                name: 'RedOrange95',
                color: paletteColors.RedOrange95,
              },
              {
                name: 'RedOrange90',
                color: paletteColors.RedOrange90,
              },
              {
                name: 'RedOrange80',
                color: paletteColors.RedOrange80,
              },
              {
                name: 'RedOrange70',
                color: paletteColors.RedOrange70,
              },
              {
                name: 'RedOrange60',
                color: paletteColors.RedOrange60,
              },
              {
                name: 'RedOrange50',
                color: paletteColors.RedOrange50,
              },
              {
                name: 'RedOrange40',
                color: paletteColors.RedOrange40,
              },
              {
                name: 'RedOrange30',
                color: paletteColors.RedOrange30,
              },
              {
                name: 'RedOrange20',
                color: paletteColors.RedOrange20,
              },
              {
                name: 'RedOrange10',
                color: paletteColors.RedOrange10,
              },
            ]}
          />
          <ColorRow
            title="Lime"
            colors={[
              {
                name: 'Lime99',
                color: paletteColors.Lime99,
              },
              {
                name: 'Lime95',
                color: paletteColors.Lime95,
              },
              {
                name: 'Lime90',
                color: paletteColors.Lime90,
              },
              {
                name: 'Lime80',
                color: paletteColors.Lime80,
              },
              {
                name: 'Lime70',
                color: paletteColors.Lime70,
              },
              {
                name: 'Lime60',
                color: paletteColors.Lime60,
              },
              {
                name: 'Lime50',
                color: paletteColors.Lime50,
              },
              {
                name: 'Lime40',
                color: paletteColors.Lime40,
              },
              {
                name: 'Lime30',
                color: paletteColors.Lime30,
              },
              {
                name: 'Lime20',
                color: paletteColors.Lime20,
              },
              {
                name: 'Lime10',
                color: paletteColors.Lime10,
              },
            ]}
          />
          <ColorRow
            title="Cyan"
            colors={[
              {
                name: 'Cyan99',
                color: paletteColors.Cyan99,
              },
              {
                name: 'Cyan95',
                color: paletteColors.Cyan95,
              },
              {
                name: 'Cyan90',
                color: paletteColors.Cyan90,
              },
              {
                name: 'Cyan80',
                color: paletteColors.Cyan80,
              },
              {
                name: 'Cyan70',
                color: paletteColors.Cyan70,
              },
              {
                name: 'Cyan60',
                color: paletteColors.Cyan60,
              },
              {
                name: 'Cyan50',
                color: paletteColors.Cyan50,
              },
              {
                name: 'Cyan40',
                color: paletteColors.Cyan40,
              },
              {
                name: 'Cyan30',
                color: paletteColors.Cyan30,
              },
              {
                name: 'Cyan20',
                color: paletteColors.Cyan20,
              },
              {
                name: 'Cyan10',
                color: paletteColors.Cyan10,
              },
            ]}
          />
          <ColorRow
            title="Light Blue"
            colors={[
              {
                name: 'LightBlue99',
                color: paletteColors.LightBlue99,
              },
              {
                name: 'LightBlue95',
                color: paletteColors.LightBlue95,
              },
              {
                name: 'LightBlue90',
                color: paletteColors.LightBlue90,
              },
              {
                name: 'LightBlue80',
                color: paletteColors.LightBlue80,
              },
              {
                name: 'LightBlue70',
                color: paletteColors.LightBlue70,
              },
              {
                name: 'LightBlue60',
                color: paletteColors.LightBlue60,
              },
              {
                name: 'LightBlue50',
                color: paletteColors.LightBlue50,
              },
              {
                name: 'LightBlue40',
                color: paletteColors.LightBlue40,
              },
              {
                name: 'LightBlue30',
                color: paletteColors.LightBlue30,
              },
              {
                name: 'LightBlue20',
                color: paletteColors.LightBlue20,
              },
              {
                name: 'LightBlue10',
                color: paletteColors.LightBlue10,
              },
            ]}
          />
          <ColorRow
            title="Violet"
            colors={[
              {
                name: 'Violet99',
                color: paletteColors.Violet99,
              },
              {
                name: 'Violet95',
                color: paletteColors.Violet95,
              },
              {
                name: 'Violet90',
                color: paletteColors.Violet90,
              },
              {
                name: 'Violet80',
                color: paletteColors.Violet80,
              },
              {
                name: 'Violet70',
                color: paletteColors.Violet70,
              },
              {
                name: 'Violet60',
                color: paletteColors.Violet60,
              },
              {
                name: 'Violet50',
                color: paletteColors.Violet50,
              },
              {
                name: 'Violet40',
                color: paletteColors.Violet40,
              },
              {
                name: 'Violet30',
                color: paletteColors.Violet30,
              },
              {
                name: 'Violet20',
                color: paletteColors.Violet20,
              },
              {
                name: 'Violet10',
                color: paletteColors.Violet10,
              },
            ]}
          />
          <ColorRow
            title="Purple"
            colors={[
              {
                name: 'Purple99',
                color: paletteColors.Purple99,
              },
              {
                name: 'Purple95',
                color: paletteColors.Purple95,
              },
              {
                name: 'Purple90',
                color: paletteColors.Purple90,
              },
              {
                name: 'Purple80',
                color: paletteColors.Purple80,
              },
              {
                name: 'Purple70',
                color: paletteColors.Purple70,
              },
              {
                name: 'Purple60',
                color: paletteColors.Purple60,
              },
              {
                name: 'Purple50',
                color: paletteColors.Purple50,
              },
              {
                name: 'Purple40',
                color: paletteColors.Purple40,
              },
              {
                name: 'Purple30',
                color: paletteColors.Purple30,
              },
              {
                name: 'Purple20',
                color: paletteColors.Purple20,
              },
              {
                name: 'Purple10',
                color: paletteColors.Purple10,
              },
            ]}
          />
          <ColorRow
            title="Pink"
            colors={[
              {
                name: 'Pink99',
                color: paletteColors.Pink99,
              },
              {
                name: 'Pink95',
                color: paletteColors.Pink95,
              },
              {
                name: 'Pink90',
                color: paletteColors.Pink90,
              },
              {
                name: 'Pink80',
                color: paletteColors.Pink80,
              },
              {
                name: 'Pink70',
                color: paletteColors.Pink70,
              },
              {
                name: 'Pink60',
                color: paletteColors.Pink60,
              },
              {
                name: 'Pink50',
                color: paletteColors.Pink50,
              },
              {
                name: 'Pink40',
                color: paletteColors.Pink40,
              },
              {
                name: 'Pink30',
                color: paletteColors.Pink30,
              },
              {
                name: 'Pink20',
                color: paletteColors.Pink20,
              },
              {
                name: 'Pink10',
                color: paletteColors.Pink10,
              },
            ]}
          />
        </div>
      </div>
    )
  },
}

interface ColorRowProps {
  colors: {
    name: string
    color: string
  }[]
  title: string
}

function ColorRow({ colors, title }: ColorRowProps) {
  return (
    <div
      className={displaySprinkles({
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      })}
    >
      <Text type="Heading 2" weight="bold">
        {title}
      </Text>
      <div className={displaySprinkles({ display: 'flex' })}>
        {colors.map((color) => (
          <ColorBox key={color.name} color={color.color} name={color.name} />
        ))}
      </div>
    </div>
  )
}

function ColorBox({ color, name }: { color: string; name: string }) {
  const step = name.match(/\d+/g)

  return (
    <div
      className={clsx(
        sizeSprinkles({ width: '100%' }),
        displaySprinkles({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }),
      )}
    >
      <div
        className={sizeSprinkles({ width: '100%', height: '64px' })}
        style={{ backgroundColor: color }}
      />
      <Text>{step}</Text>
    </div>
  )
}

export const Token: Story = {
  render: () => {
    return (
      <div className={paletteContainer}>
        <StorybookHeader title="토큰" />
        <StorybookDivider />
        <StorybookSubheader title="색상" />
        <TokenRow name="Common.0" value={paletteColors.Common0} />
        <TokenRow name="Common.100" value={paletteColors.Common100} />
        <TokenRow name="Neutral.99" value={paletteColors.Neutral99} />
        <TokenRow name="Neutral.95" value={paletteColors.Neutral95} />
        <TokenRow name="Neutral.90" value={paletteColors.Neutral90} />
        <TokenRow name="Neutral.80" value={paletteColors.Neutral80} />
        <TokenRow name="Neutral.70" value={paletteColors.Neutral70} />
        <TokenRow name="Neutral.60" value={paletteColors.Neutral60} />
        <TokenRow name="Neutral.50" value={paletteColors.Neutral50} />
        <TokenRow name="Neutral.40" value={paletteColors.Neutral40} />
        <TokenRow name="Neutral.30" value={paletteColors.Neutral30} />
        <TokenRow name="Neutral.22" value={paletteColors.Neutral22} />
        <TokenRow name="Neutral.20" value={paletteColors.Neutral20} />
        <TokenRow name="Neutral.15" value={paletteColors.Neutral15} />
        <TokenRow name="Neutral.10" value={paletteColors.Neutral10} />
        <TokenRow name="Neutral.5" value={paletteColors.Neutral5} />
        <TokenRow name="CoolNeutral.99" value={paletteColors.CoolNeutral99} />
        <TokenRow name="CoolNeutral.98" value={paletteColors.CoolNeutral98} />
        <TokenRow name="CoolNeutral.97" value={paletteColors.CoolNeutral97} />
        <TokenRow name="CoolNeutral.96" value={paletteColors.CoolNeutral96} />
        <TokenRow name="CoolNeutral.95" value={paletteColors.CoolNeutral95} />
        <TokenRow name="CoolNeutral.90" value={paletteColors.CoolNeutral90} />
        <TokenRow name="CoolNeutral.80" value={paletteColors.CoolNeutral80} />
        <TokenRow name="CoolNeutral.70" value={paletteColors.CoolNeutral70} />
        <TokenRow name="CoolNeutral.60" value={paletteColors.CoolNeutral60} />
        <TokenRow name="CoolNeutral.50" value={paletteColors.CoolNeutral50} />
        <TokenRow name="CoolNeutral.40" value={paletteColors.CoolNeutral40} />
        <TokenRow name="CoolNeutral.30" value={paletteColors.CoolNeutral30} />
        <TokenRow name="CoolNeutral.23" value={paletteColors.CoolNeutral23} />
        <TokenRow name="CoolNeutral.22" value={paletteColors.CoolNeutral22} />
        <TokenRow name="CoolNeutral.20" value={paletteColors.CoolNeutral20} />
        <TokenRow name="CoolNeutral.17" value={paletteColors.CoolNeutral17} />
        <TokenRow name="CoolNeutral.15" value={paletteColors.CoolNeutral15} />
        <TokenRow name="CoolNeutral.10" value={paletteColors.CoolNeutral10} />
        <TokenRow name="CoolNeutral.7" value={paletteColors.CoolNeutral7} />
        <TokenRow name="CoolNeutral.5" value={paletteColors.CoolNeutral5} />
        <TokenRow name="Red.99" value={paletteColors.Red99} />
        <TokenRow name="Red.95" value={paletteColors.Red95} />
        <TokenRow name="Red.90" value={paletteColors.Red90} />
        <TokenRow name="Red.80" value={paletteColors.Red80} />
        <TokenRow name="Red.70" value={paletteColors.Red70} />
        <TokenRow name="Red.60" value={paletteColors.Red60} />
        <TokenRow name="Red.50" value={paletteColors.Red50} />
        <TokenRow name="Red.40" value={paletteColors.Red40} />
        <TokenRow name="Red.30" value={paletteColors.Red30} />
        <TokenRow name="Red.20" value={paletteColors.Red20} />
        <TokenRow name="Red.10" value={paletteColors.Red10} />
        <TokenRow name="Blue.99" value={paletteColors.Blue99} />
        <TokenRow name="Blue.95" value={paletteColors.Blue95} />
        <TokenRow name="Blue.90" value={paletteColors.Blue90} />
        <TokenRow name="Blue.80" value={paletteColors.Blue80} />
        <TokenRow name="Blue.70" value={paletteColors.Blue70} />
        <TokenRow name="Blue.60" value={paletteColors.Blue60} />
        <TokenRow name="Blue.50" value={paletteColors.Blue50} />
        <TokenRow name="Blue.40" value={paletteColors.Blue40} />
        <TokenRow name="Blue.30" value={paletteColors.Blue30} />
        <TokenRow name="Blue.20" value={paletteColors.Blue20} />
        <TokenRow name="Blue.10" value={paletteColors.Blue10} />
        <TokenRow name="Green.99" value={paletteColors.Green99} />
        <TokenRow name="Green.95" value={paletteColors.Green95} />
        <TokenRow name="Green.90" value={paletteColors.Green90} />
        <TokenRow name="Green.80" value={paletteColors.Green80} />
        <TokenRow name="Green.70" value={paletteColors.Green70} />
        <TokenRow name="Green.60" value={paletteColors.Green60} />
        <TokenRow name="Green.50" value={paletteColors.Green50} />
        <TokenRow name="Green.40" value={paletteColors.Green40} />
        <TokenRow name="Green.30" value={paletteColors.Green30} />
        <TokenRow name="Green.20" value={paletteColors.Green20} />
        <TokenRow name="Green.10" value={paletteColors.Green10} />
        <TokenRow name="Violet.99" value={paletteColors.Violet99} />
        <TokenRow name="Violet.95" value={paletteColors.Violet95} />
        <TokenRow name="Violet.90" value={paletteColors.Violet90} />
        <TokenRow name="Violet.80" value={paletteColors.Violet80} />
        <TokenRow name="Violet.70" value={paletteColors.Violet70} />
        <TokenRow name="Violet.60" value={paletteColors.Violet60} />
        <TokenRow name="Violet.50" value={paletteColors.Violet50} />
        <TokenRow name="Violet.40" value={paletteColors.Violet40} />
        <TokenRow name="Violet.30" value={paletteColors.Violet30} />
        <TokenRow name="Violet.20" value={paletteColors.Violet20} />
        <TokenRow name="Violet.10" value={paletteColors.Violet10} />
        <TokenRow name="Purple.99" value={paletteColors.Purple99} />
        <TokenRow name="Purple.95" value={paletteColors.Purple95} />
        <TokenRow name="Purple.90" value={paletteColors.Purple90} />
        <TokenRow name="Purple.80" value={paletteColors.Purple80} />
        <TokenRow name="Purple.70" value={paletteColors.Purple70} />
        <TokenRow name="Purple.60" value={paletteColors.Purple60} />
        <TokenRow name="Purple.50" value={paletteColors.Purple50} />
        <TokenRow name="Purple.40" value={paletteColors.Purple40} />
        <TokenRow name="Purple.30" value={paletteColors.Purple30} />
        <TokenRow name="Purple.20" value={paletteColors.Purple20} />
        <TokenRow name="Purple.10" value={paletteColors.Purple10} />
        <TokenRow name="Pink.99" value={paletteColors.Pink99} />
        <TokenRow name="Pink.95" value={paletteColors.Pink95} />
        <TokenRow name="Pink.90" value={paletteColors.Pink90} />
        <TokenRow name="Pink.80" value={paletteColors.Pink80} />
        <TokenRow name="Pink.70" value={paletteColors.Pink70} />
        <TokenRow name="Pink.60" value={paletteColors.Pink60} />
        <TokenRow name="Pink.50" value={paletteColors.Pink50} />
        <TokenRow name="Pink.40" value={paletteColors.Pink40} />
        <TokenRow name="Pink.30" value={paletteColors.Pink30} />
        <TokenRow name="Pink.20" value={paletteColors.Pink20} />
        <TokenRow name="Pink.10" value={paletteColors.Pink10} />
      </div>
    )
  },
}

function TokenRow({ name, value }: { name: string; value: string }) {
  return (
    <div
      className={clsx(
        displaySprinkles({
          display: 'flex',
          gap: '8px',
        }),
        spaceSprinkles({
          marginBlock: '16px',
        }),
      )}
    >
      <div
        className={displaySprinkles({
          display: 'flex',
          gap: '12px',
        })}
        style={{
          width: '360px',
        }}
      >
        <div
          style={{
            backgroundColor: value,
          }}
          className={clsx(
            sizeSprinkles({ width: '24px', height: '24px' }),
            borderSprinkles({
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '100%',
              borderColor: 'CoolNeutral90',
            }),
          )}
        />
        <Text weight="medium">{name}</Text>
      </div>
      <div>
        <Text>{value.toUpperCase()}</Text>
      </div>
    </div>
  )
}
