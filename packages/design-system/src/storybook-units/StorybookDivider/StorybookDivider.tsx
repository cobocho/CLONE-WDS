import {
  storybookDivider,
  StorybookDividerVariants,
} from './StorybookDivider.css'

export const StorybookDivider = (props: StorybookDividerVariants) => {
  return <div className={storybookDivider(props)} />
}
