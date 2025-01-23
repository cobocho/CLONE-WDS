import type { Meta, StoryObj } from '@storybook/react'
import { lightColors, paletteColors } from '@repo/design-tokens'

import { StorybookHeader } from '@/storybook-units/StorybookHeader'
import { StorybookSubheader } from '@/storybook-units/StorybookSubheader'
import { StorybookDivider } from '@/storybook-units/StorybookDivider'

import { Text } from './Text'
import { TextType, textTypes } from './Text.css'
import {
  textPlaygroundContainer,
  textSampleBox,
  textStoryContainer,
  textTable,
} from './Text.stories.css'

const meta = {
  title: 'Theme/Typography',
  component: Text,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    color: 'LabelNormal',
    type: 'Title 1',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '텍스트 내용',
      name: 'content',
    },
    type: {
      options: textTypes,
      control: { type: 'select' },
      description: '텍스트 타입',
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

const allTableDisabled: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
  },
}

const textTableData: {
  type: TextType
  description: string
  lineHeight: string
  letterSpacing: string
  boldSample: string
  mediumSample: string
  regularSample: string
}[] = [
  {
    type: 'Display 1',
    description: '56px',
    lineHeight: '72px (1.286)',
    letterSpacing: '-0.0319em',
    boldSample: '역시 마찬가지로,',
    mediumSample: 'Lorem ipsum',
    regularSample: '역시 lorem 마찬가지로',
  },
  {
    type: 'Display 2',
    description: '40px',
    lineHeight: '52px (1.3)',
    letterSpacing: '-0.0282em',
    boldSample: '단순히 고통이라는 이유',
    mediumSample: 'Lorem ipsum',
    regularSample: '고통이라는 sit 이유',
  },
  {
    type: 'Title 1',
    description: '36px',
    lineHeight: '48px (1.334)',
    letterSpacing: '-0.027em',
    boldSample: '때문에 고통 그 자체를 사랑하거나',
    mediumSample: 'consectetur adipiscing elit,',
    regularSample: 'consectetur 고통 adipiscing 그 자체를',
  },
  {
    type: 'Title 2',
    description: '28px',
    lineHeight: '38px (1.358)',
    letterSpacing: '-0.0236em',
    boldSample: '추구하거나 소유하려',
    mediumSample: 'sed do eiusmod tempor incididunt',
    regularSample: 'elit 사랑하거나, sed 추구하거나',
  },
  {
    type: 'Title 3',
    description: '24px',
    lineHeight: '32px (1.334)',
    letterSpacing: '-0.023em',
    boldSample: '노역과 고통이 아주 큰 즐거움을',
    mediumSample: 'ut labore et dolore magna aliqua. Ut enim',
    regularSample: '노역과 labora 고통이 아주 dolore 큰 magna 즐거움을',
  },
  {
    type: 'Heading 1',
    description: '22px',
    lineHeight: '30px (1.364)',
    letterSpacing: '-0.0194em',
    boldSample: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    mediumSample: 'ad minim veniam, quis nostrud exercitation',
    regularSample: 'ad minim veniam, quis nostrud exercitation',
  },
  {
    type: 'Heading 2',
    description: '20px',
    lineHeight: '28px (1.4)',
    letterSpacing: '-0.012em',
    boldSample: '간단한 예를 들자면,',
    mediumSample: 'ullamco laboris nisi ut aliquip ex ea commodo',
    regularSample: 'ullamco laboris nisi ut aliquip ex ea commodo',
  },
  {
    type: 'Headline 1',
    description: '18px',
    lineHeight: '26px (1.445)',
    letterSpacing: '-0.002em',
    boldSample: '욕설적 노출을 기꺼이 할 사람이',
    mediumSample: 'consequat. Duis aute irure dolor in reprehenderit in',
    regularSample: 'consequat. Duis aute irure dolor in reprehenderit in',
  },
  {
    type: 'Headline 2',
    description: '17px',
    lineHeight: '24px (1.412)',
    letterSpacing: '0em',
    boldSample: '귀찮은 일이 되겠지만',
    mediumSample:
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    regularSample:
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    type: 'Body 1/Normal',
    description: '16px',
    lineHeight: '24px (1.5)',
    letterSpacing: '0.0057em',
    boldSample: '아무런 결과물을 생기지 않는 고통을',
    mediumSample: 'Excepteur sint occaecat cupidatat non proident, sunt in',
    regularSample: 'Excepteur sint occaecat cupidatat non proident, sunt in',
  },
  {
    type: 'Body 1/Reading',
    description: '16px',
    lineHeight: '26px (1.625)',
    letterSpacing: '0.0057em',
    boldSample: '있겠는가? 이와 마찬가지로,',
    mediumSample:
      'culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum',
    regularSample:
      'culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum',
  },
  {
    type: 'Body 2/Normal',
    description: '15px',
    lineHeight: '22px (1.467)',
    letterSpacing: '0.0096em',
    boldSample: '사랑하거나 소유하려는 자는 없다.',
    mediumSample: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    regularSample:
      'dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    type: 'Body 2/Reading',
    description: '15px',
    lineHeight: '24px (1.6)',
    letterSpacing: '0.0096em',
    boldSample: '고통 그 자체를 사랑하거나',
    mediumSample:
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    regularSample:
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    type: 'Label 1/Normal',
    description: '14px',
    lineHeight: '20px (1.429)',
    letterSpacing: '0.0145em',
    boldSample: '그 자체를 사랑하거나',
    mediumSample:
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    regularSample:
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  },
  {
    type: 'Label 1/Reading',
    description: '14px',
    lineHeight: '22px (1.571)',
    letterSpacing: '0.0145em',
    boldSample: '고통 그 자체를 사랑하거나',
    mediumSample: 'aliquip ex ea commodo consequat. Duis aute irure dolor in',
    regularSample: 'aliquip ex ea commodo consequat. Duis aute irure dolor in',
  },
  {
    type: 'Label 2',
    description: '13px',
    lineHeight: '18px (1.385)',
    letterSpacing: '0.0194em',
    boldSample: '고통 그 자체를 사랑하거나',
    mediumSample:
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur',
    regularSample:
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur',
  },
  {
    type: 'Caption 1',
    description: '12px',
    lineHeight: '16px (1.334)',
    letterSpacing: '0.0252em',
    boldSample: '고통 그 자체를 사랑하거나',
    mediumSample:
      'sint occaecat cupidatat non proident, sunt in culpa qui officia',
    regularSample:
      'sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    type: 'Caption 2',
    description: '11px',
    lineHeight: '14px (1.273)',
    letterSpacing: '0.0311em',
    boldSample: '고통 그 자체를 사랑하거나',
    mediumSample:
      'deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,',
    regularSample:
      'deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,',
  },
]

export const Definition: Story = {
  ...allTableDisabled,
  render: () => {
    return (
      <div className={textStoryContainer}>
        <StorybookHeader
          title="타이포그래피"
          description="타이포그래피 규칙을 안내합니다."
        />
        <StorybookDivider />
        <StorybookSubheader
          title="글꼴"
          description="원티드랩에서는 기본 글꼴로 한국어, 영어, 일본어를 지원하는 Pretendard JP를 사용합니다."
        />
        <div className={textSampleBox}>
          <Text type="Display 1" weight="bold">
            Pretendard 프리텐다드 プリテンダード
          </Text>
        </div>
        <StorybookDivider size="small" />
        <StorybookSubheader
          title="스타일"
          description="원티드 타이포그래피는 7단계 위계에서 총 18개 하위 위계를 가지고 있습니다."
        />
        <table className={textTable}>
          <thead>
            <tr>
              <th>
                <Text weight="bold" color="LabelAlternative">
                  명칭
                </Text>
              </th>
              <th>
                <Text weight="bold" color="LabelAlternative">
                  설명
                </Text>
              </th>
              <th>
                <Text weight="bold" color="LabelAlternative">
                  행간
                </Text>
              </th>
              <th>
                <Text weight="bold" color="LabelAlternative">
                  자간
                </Text>
              </th>
              <th className="sample-header">
                <Text weight="bold" color="LabelAlternative">
                  미리보기
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {textTableData.map((data) => (
              <tr key={data.type}>
                <td>
                  <div style={{ display: 'flex', height: '100%' }}>
                    <Text weight="bold">{data.type}</Text>
                  </div>
                </td>
                <td>
                  <Text weight="bold">{data.description}</Text>
                </td>
                <td>
                  <Text weight="bold">{data.lineHeight}</Text>
                </td>
                <td>
                  <Text weight="bold">{data.letterSpacing}</Text>
                </td>
                <td className="sample-container">
                  <div className="sample-box">
                    <div className="sample">
                      <Text weight="bold" type={data.type}>
                        {data.boldSample}
                      </Text>
                    </div>
                    <div className="sample">
                      <Text type={data.type} weight="medium">
                        {data.mediumSample}
                      </Text>
                    </div>
                    <div className="sample">
                      <Text type={data.type} weight="regular">
                        {data.regularSample}
                      </Text>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}

export const Playground: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'parameters-docs-description-component는 이곳을 설명합니다.',
      },
    },
  },

  args: {
    whiteSpace: 'pre',
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  decorators: [
    (Story) => (
      <div className={textPlaygroundContainer}>
        <Story />
      </div>
    ),
  ],
}
