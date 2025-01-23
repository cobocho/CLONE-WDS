import { Text } from '@/components/Text'

import {
  storybookHeader,
  storybookHeaderTitle,
  storybookHeaderTitleBlock,
} from './StorybookHeader.css'

interface StorybookHeaderProps {
  title: string
  description?: string
}

export const StorybookHeader = ({
  title,
  description,
}: StorybookHeaderProps) => {
  return (
    <div className={storybookHeader}>
      <div className={storybookHeaderTitle}>
        <div className={storybookHeaderTitleBlock}>
          <Text as="h1" type="Title 1" weight="semibold">
            {title}
          </Text>
        </div>
        <div className={storybookHeaderTitleBlock}>
          {description && <Text>{description}</Text>}
        </div>
      </div>
    </div>
  )
}
