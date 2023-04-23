// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Feed> = (args) => {
//   return <Feed {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Feed from './Feed'

export const generated = () => {
  return <Feed />
}

export default {
  title: 'Components/Feed',
  component: Feed,
} as ComponentMeta<typeof Feed>
