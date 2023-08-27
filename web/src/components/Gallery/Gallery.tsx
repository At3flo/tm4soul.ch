import { Badge, Box, Image } from '@chakra-ui/react'

const Gallery = ({ tags }) => {
  const imageCount = Math.floor(Math.random() * (25 - 8 + 1)) + 8 // Total number of images

  const images = []

  for (let i = 1; i <= imageCount; i++) {
    images.push(
      <Box
        key={i}
        width="200px"
        height="200px"
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
      }}
    >
      <div
        style={{
          flex: '1',
          marginBottom: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ marginBottom: '1em' }}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              colorScheme="green"
              variant="solid"
              mr={2}
              style={{ marginBottom: '0' }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridGap="1em">
          {images}
        </Box>
      </div>
    </div>
  )
}

export default Gallery
