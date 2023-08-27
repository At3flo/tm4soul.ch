// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof WordCloud> = (args) => {
//   return <WordCloud {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WordCloud from './WordCloud'

export const generated = () => {
  return <WordCloud />
}

export default {
  title: 'Components/WordCloud',
  component: WordCloud,
} as ComponentMeta<typeof WordCloud>
