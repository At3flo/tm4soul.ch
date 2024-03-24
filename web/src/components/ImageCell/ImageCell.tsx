import { Box, Image, Spinner } from '@chakra-ui/react'
import type { FindImageByTagsNormalizedQuery } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

declare const process: {
  env: {
    [key: string]: string | undefined
  }
}

export const QUERY: TypedDocumentNode<FindImageByTagsNormalizedQuery> = gql`
  query FindImageByTagsNormalizedQuery($tag: String!) {
    imagesByTagsNormalized(tagTitleNormalized: $tag) {
      uuidImage
    }
  }
`

export const Loading = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="white.500"
    size="xl"
  />
)

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
      {imagesByTagsNormalized.map((image) => {
        const imageUrl = `${process.env.MINIO_S3_ENDPOINT}/${process.env.MINIO_BUCKET_NAME}/public/images/${image.uuidImage}.jpg`

        return (
          <Box
            key={image.uuidImage}
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
