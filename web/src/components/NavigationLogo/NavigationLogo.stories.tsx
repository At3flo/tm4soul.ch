// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavigationLogo> = (args) => {
//   return <NavigationLogo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NavigationLogo from './NavigationLogo'

export const generated = () => {
  return <NavigationLogo />
}

export default {
  title: 'Components/NavigationLogo',
  component: NavigationLogo,
} as ComponentMeta<typeof NavigationLogo>
