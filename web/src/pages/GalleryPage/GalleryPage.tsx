import { MetaTags } from '@redwoodjs/web'

import Gallery from 'src/components/Gallery/Gallery'
import GalleryDescription from 'src/components/GalleryDescription/GalleryDescription'
import GridContainer from 'src/components/GridContainer/GridContainer'

import GalleryTags from '../../components/GalleryTags/GalleryTags'

const GalleryPage = () => {
  return (
    <>
      <MetaTags title="Gallery" description="Gallery page" />

      <GridContainer
        mainComponent={<Gallery tags={GalleryTags.map((item) => item.Tag)} />}
        sideComponent={<GalleryDescription />}
      />
    </>
  )
}

export default GalleryPage
