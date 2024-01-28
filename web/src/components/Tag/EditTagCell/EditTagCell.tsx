import type { EditTagByUuidTag, UpdateTagInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TagForm from 'src/components/Tag/TagForm'

export const QUERY = gql`
  query EditTagByUuidTag($uuidTag: String!) {
    tag: tag(uuidTag: $uuidTag) {
      uuidTag
      tagTitleNormalized
      tagTitleWithDiacritics
      tagDescription
      tagWeight
    }
  }
`
const UPDATE_TAG_MUTATION = gql`
  mutation UpdateTagMutation($uuidTag: String!, $input: UpdateTagInput!) {
    updateTag(uuidTag: $uuidTag, input: $input) {
      uuidTag
      tagTitleNormalized
      tagTitleWithDiacritics
      tagDescription
      tagWeight
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tag }: CellSuccessProps<EditTagByUuidTag>) => {
  const [updateTag, { loading, error }] = useMutation(UPDATE_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('Tag updated')
      navigate(routes.tags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateTagInput, id: EditTagByUuidTag['tag']['id']) => {
    updateTag({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Tag {tag?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TagForm tag={tag} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
