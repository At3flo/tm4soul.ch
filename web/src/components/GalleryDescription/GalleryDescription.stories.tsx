// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GalleryDescription> = (args) => {
//   return <GalleryDescription {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GalleryDescription from './GalleryDescription'

export const generated = () => {
  return <GalleryDescription />
}

export default {
  title: 'Components/GalleryDescription',
  component: GalleryDescription,
} as ComponentMeta<typeof GalleryDescription>
