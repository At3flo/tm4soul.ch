import { MetaTags } from '@redwoodjs/web'

import Gallery from 'src/components/Gallery/Gallery'
import GalleryDescriptionCell from 'src/components/GalleryDescriptionCell'
import GridContainer from 'src/components/GridContainer/GridContainer'
import { useInterfaceStateStore } from 'src/hooks/useInterfaceStateStore'

const GalleryPage = () => {
  const { tagsSelected } = useInterfaceStateStore()
  return (
    <>
      <MetaTags title="Gallery" description="Gallery page" />

      <GridContainer
        mainComponent={<Gallery />}
        sideComponent={
          <GalleryDescriptionCell tagTitleNormalized={tagsSelected[0]} />
        }
      />
    </>
  )
}

export default GalleryPage
