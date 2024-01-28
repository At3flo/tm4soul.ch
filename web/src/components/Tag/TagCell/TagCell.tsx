import type { FindTagByUuidTag } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tag from 'src/components/Tag/Tag'

export const QUERY = gql`
  query FindTagByUuidTag($uuidTag: String!) {
    tag: tag(uuidTag: $uuidTag) {
      uuidTag
      tagTitleNormalized
      tagTitleWithDiacritics
      tagDescription
      tagWeight
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tag }: CellSuccessProps<FindTagByUuidTag>) => {
  return <Tag tag={tag} />
}
