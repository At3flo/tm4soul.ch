import type { ComponentMeta } from '@storybook/react'

import GalleryPage from './GalleryPage'

export const generated = () => {
  return <GalleryPage />
}

export default {
  title: 'Pages/GalleryPage',
  component: GalleryPage,
} as ComponentMeta<typeof GalleryPage>
