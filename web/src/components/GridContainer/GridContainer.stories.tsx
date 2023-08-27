// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GridContainer> = (args) => {
//   return <GridContainer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GridContainer from './GridContainer'

export const generated = () => {
  return <GridContainer />
}

export default {
  title: 'Components/GridContainer',
  component: GridContainer,
} as ComponentMeta<typeof GridContainer>
