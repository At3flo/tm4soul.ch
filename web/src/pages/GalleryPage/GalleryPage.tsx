import { MetaTags } from '@redwoodjs/web'

import Gallery from 'src/components/Gallery/Gallery'
import GalleryDescription from 'src/components/GalleryDescription/GalleryDescription'
import GridContainer from 'src/components/GridContainer/GridContainer'

const GalleryPage = () => {
  return (
    <>
      <MetaTags title="Gallery" description="Gallery page" />

      <GridContainer
        mainComponent={<Gallery tags={['tag1', 'tag2', 'tag3']} />}
        sideComponent={<GalleryDescription />}
      />
    </>
  )
}

export default GalleryPage
