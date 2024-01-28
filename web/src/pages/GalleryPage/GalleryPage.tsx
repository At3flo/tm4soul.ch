import { MetaTags } from '@redwoodjs/web'

import Gallery from 'src/components/Gallery/Gallery'
import GalleryDescriptionCell from 'src/components/GalleryDescriptionCell'
import GridContainer from 'src/components/GridContainer/GridContainer'
import { useInterfaceStateStore } from 'src/hooks/useInterfaceStateStore'

import GalleryTags from '../../components/GalleryTags/GalleryTags'

const GalleryPage = () => {
  const { tagsSelected } = useInterfaceStateStore()
  return (
    <>
      <MetaTags title="Gallery" description="Gallery page" />

      <GridContainer
        mainComponent={<Gallery tags={GalleryTags.map((item) => item.Tag)} />}
        sideComponent={
          <GalleryDescriptionCell tagTitleNormalized={tagsSelected[0]} />
        }
      />
    </>
  )
}

export default GalleryPage
