import { Text } from '@/components/Text'

import {
  storybookSubheader,
  storybookSubheaderTitle,
  storybookSubheaderTitleBlock,
} from './StorybookSubheader.css'

interface StorybookSubheaderProps {
  title: string
  description?: string
}

export const StorybookSubheader = ({
  title,
  description,
}: StorybookSubheaderProps) => {
  return (
    <div className={storybookSubheader}>
      <div className={storybookSubheaderTitle}>
        <div className={storybookSubheaderTitleBlock}>
          <Text as="h1" type="Title 3" weight="semibold">
            {title}
          </Text>
        </div>
        <div className={storybookSubheaderTitleBlock}>
          {description && <Text>{description}</Text>}
        </div>
      </div>
    </div>
  )
}
