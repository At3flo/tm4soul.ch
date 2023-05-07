import type { ComponentMeta } from '@storybook/react'

import PhotographyPage from './PhotographyPage'

export const generated = () => {
  return <PhotographyPage />
}

export default {
  title: 'Pages/PhotographyPage',
  component: PhotographyPage,
} as ComponentMeta<typeof PhotographyPage>
