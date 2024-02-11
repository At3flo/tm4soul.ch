import { useQuery, gql } from '@apollo/client'
import { Badge, Box, Image } from '@chakra-ui/react'

import ImageCell from 'src/components/ImageCell'
import { useInterfaceStateStore } from 'src/hooks/useInterfaceStateStore'

const QUERY = gql`
  query FindTagsFromGallery {
    tags {
      tagTitleNormalized
    }
  }
`

const Gallery = () => {
  const { tagsSelected, updateTags } = useInterfaceStateStore()

  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const tags = data.tags

  const imageCount = Math.floor(Math.random() * (25 - 8 + 1)) + 8 // Total number of images

  const images = []

  for (let i = 1; i <= imageCount; i++) {
    images.push(
      <Box
        key={i}
        width="12em"
        height="12em"
        overflow="hidden"
        borderRadius="md"
        marginBottom="1em"
      >
        <Image
          src={`https://source.unsplash.com/random/${i}`}
          alt={`Unsplash Image ${i}`}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        paddingLeft: '3em',
        paddingRight: '3em',
      }}
    >
      <div
        style={{
          flex: '1',
          marginBottom: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ marginBottom: '1em' }}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant={
                tagsSelected.includes(tag.tagTitleNormalized)
                  ? 'brandDanger'
                  : 'brandPrimary'
              }
              mr={2}
              style={{ marginBottom: '0' }}
              onClick={() => updateTags(tag.tagTitleNormalized)}
            >
              {tag.tagTitleNormalized}
            </Badge>
          ))}
        </div>

        <Box textColor={'white'}>Hello</Box>

        <ImageCell id="c204fb60-edea-40f0-a6cb-3a7c40c21730" />

        <Box
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gridGap="1em"
        >
          {images}
        </Box>
      </div>
    </div>
  )
}

export default Gallery
