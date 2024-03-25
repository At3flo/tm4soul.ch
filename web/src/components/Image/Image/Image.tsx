import type {
  DeleteImageMutation,
  DeleteImageMutationVariables,
  FindImageByUuidImage,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  image: NonNullable<FindImageByUuidImage['image']>
}

const Image = ({ image }: Props) => {
  const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image deleted')
      navigate(routes.images())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    uuidImage: DeleteImageMutationVariables['uuidImage']
  ) => {
    if (confirm('Are you sure you want to delete image ' + uuidImage + '?')) {
      deleteImage({ variables: { uuidImage } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Image {image.uuidImage} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Uuid image</th>
              <td>{image.uuidImage}</td>
            </tr>
            <tr>
              <th>File Extension</th>
              <td>{image.imageFileExtension}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editImage({ uuidImage: image.uuidImage })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(image.uuidImage)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Image
