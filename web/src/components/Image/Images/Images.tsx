import type {
  DeleteImageMutation,
  DeleteImageMutationVariables,
  FindImages,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Image/ImagesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_IMAGE_MUTATION: TypedDocumentNode<
  DeleteImageMutation,
  DeleteImageMutationVariables
> = gql`
  mutation DeleteImageMutation($uuidImage: String!) {
    deleteImage(uuidImage: $uuidImage) {
      uuidImage
    }
  }
`

const ImagesList = ({ images }: FindImages) => {
  const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image deleted')
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

  const onDeleteClick = (
    uuidImage: DeleteImageMutationVariables['uuidImage']
  ) => {
    if (confirm('Are you sure you want to delete image ' + uuidImage + '?')) {
      deleteImage({ variables: { uuidImage } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Uuid image</th>
            <th>File Extension</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.uuidImage}>
              <td>{truncate(image.uuidImage)}</td>
              <td>{truncate(image.imageFileExtension)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.image({ uuidImage: image.uuidImage })}
                    title={'Show image ' + image.uuidImage + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editImage({ uuidImage: image.uuidImage })}
                    title={'Edit image ' + image.uuidImage}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete image ' + image.uuidImage}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(image.uuidImage)}
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

export default ImagesList
