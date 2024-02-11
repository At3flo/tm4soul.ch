import { Box, Image } from '@chakra-ui/react'
import type { FindImageByTagsNormalizedQuery } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<FindImageByTagsNormalizedQuery> = gql`
  query FindImageByTagsNormalizedQuery($tag: String!) {
    imagesByTagsNormalized(tagTitleNormalized: $tag) {
      file
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindImageByTagsNormalizedQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  imagesByTagsNormalized,
}: CellSuccessProps<FindImageByTagsNormalizedQuery>) => {
  return (
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
      {imagesByTagsNormalized.map((image, index) => {
        // Assuming `image.file` is a Buffer containing PNG data
        const base64Image = Buffer.from(image.file).toString('base64')
        const imageUrl = `data:image/png;base64,${base64Image}`

        return (
          <Box
            key={index}
            width="12em"
            height="12em"
            overflow="hidden"
            borderRadius="md"
            marginBottom="1em"
          >
            <Image
              src={imageUrl}
              alt={``}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        )
      })}
    </Box>
  )
}
