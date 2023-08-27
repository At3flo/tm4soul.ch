import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Gallery from 'src/components/Gallery/Gallery'
import GalleryDescription from 'src/components/GalleryDescription/GalleryDescription'
import GridContainer from 'src/components/GridContainer/GridContainer'

const GalleryPage = () => {
  return (
    <>
      <MetaTags title="Gallery" description="Gallery page" />

      <GridContainer mainComponent={<Gallery />} sideComponent={<GalleryDescription />} />

    </>
  )
}

export default GalleryPage
