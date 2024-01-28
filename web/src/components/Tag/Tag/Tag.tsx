import type {
  DeleteTagMutationVariables,
  FindTagByUuidTag,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'


const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($uuidTag: String!) {
    deleteTag(uuidTag: $uuidTag) {
      uuidTag
    }
  }
`

interface Props {
  tag: NonNullable<FindTagByUuidTag['tag']>
}

const Tag = ({ tag }: Props) => {
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('Tag deleted')
      navigate(routes.tags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (uuidTag: DeleteTagMutationVariables['uuidTag']) => {
    if (confirm('Are you sure you want to delete tag ' + uuidTag + '?')) {
      deleteTag({ variables: { uuidTag } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tag {tag.uuidTag} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Uuid tag</th>
              <td>{tag.uuidTag}</td>
            </tr>
            <tr>
              <th>Tag title normalized</th>
              <td>{tag.tagTitleNormalized}</td>
            </tr>
            <tr>
              <th>Tag title with diacritics</th>
              <td>{tag.tagTitleWithDiacritics}</td>
            </tr>
            <tr>
              <th>Tag description</th>
              <td>{tag.tagDescription}</td>
            </tr>
            <tr>
              <th>Tag weight</th>
              <td>{tag.tagWeight}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTag({ uuidTag: tag.uuidTag })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tag.uuidTag)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tag
