import type { DeleteTagMutationVariables, FindTags } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tag/TagsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($uuidTag: String!) {
    deleteTag(uuidTag: $uuidTag) {
      uuidTag
    }
  }
`

const TagsList = ({ tags }: FindTags) => {
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('Tag deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (uuidTag: DeleteTagMutationVariables['uuidTag']) => {
    if (confirm('Are you sure you want to delete tag ' + uuidTag + '?')) {
      deleteTag({ variables: { uuidTag } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Uuid tag</th>
            <th>Tag title normalized</th>
            <th>Tag title with diacritics</th>
            <th>Tag description</th>
            <th>Tag weight</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr key={tag.uuidTag}>
              <td>{truncate(tag.uuidTag)}</td>
              <td>{truncate(tag.tagTitleNormalized)}</td>
              <td>{truncate(tag.tagTitleWithDiacritics)}</td>
              <td>{truncate(tag.tagDescription)}</td>
              <td>{truncate(tag.tagWeight)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tag({ uuidTag: tag.uuidTag })}
                    title={'Show tag ' + tag.uuidTag + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTag({ uuidTag: tag.uuidTag })}
                    title={'Edit tag ' + tag.uuidTag}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tag ' + tag.uuidTag}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tag.uuidTag)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TagsList
