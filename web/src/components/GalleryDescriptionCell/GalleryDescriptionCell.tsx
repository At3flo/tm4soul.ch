import { Box, Stack, Heading } from '@chakra-ui/react'
import type { GalleryDescriptionQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query GalleryDescriptionQuery($tagTitleNormalized: String!) {
    tagByTitleNormalized(tagTitleNormalized: $tagTitleNormalized) {
      tagTitleWithDiacritics
      tagDescription
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GalleryDescriptionQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tagByTitleNormalized,
}: CellSuccessProps<GalleryDescriptionQuery>) => {
  return (
    <Stack spacing="3em" p="10">
      <Heading color="primary.white">
        {tagByTitleNormalized.tagTitleWithDiacritics}
      </Heading>
      <Box fontSize="1.5em" color="primary.white">
        {tagByTitleNormalized.tagDescription}
      </Box>
    </Stack>
  )
}
