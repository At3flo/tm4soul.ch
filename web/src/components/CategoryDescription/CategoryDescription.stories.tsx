// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CategoryDescription> = (args) => {
//   return <CategoryDescription {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CategoryDescription from './CategoryDescription'

export const generated = () => {
  return <CategoryDescription />
}

export default {
  title: 'Components/CategoryDescription',
  component: CategoryDescription,
} as ComponentMeta<typeof CategoryDescription>
