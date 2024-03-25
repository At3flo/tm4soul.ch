import type {
  EditImageByUuidImage,
  UpdateImageInput,
  UpdateImageMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImageForm from 'src/components/Image/ImageForm'

export const QUERY: TypedDocumentNode<EditImageByUuidImage> = gql`
  query EditImageByUuidImage($uuidImage: String!) {
    image: image(uuidImage: $uuidImage) {
      uuidImage
      imageFileExtension
    }
  }
`

const UPDATE_IMAGE_MUTATION: TypedDocumentNode<
  EditImageById,
  UpdateImageMutationVariables
> = gql`
  mutation UpdateImageMutation($uuidImage: String!, $input: UpdateImageInput!) {
    updateImage(uuidImage: $uuidImage, input: $input) {
      uuidImage
      imageFileExtension
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ image }: CellSuccessProps<EditImageByUuidImage>) => {
  const [updateImage, { loading, error }] = useMutation(UPDATE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image updated')
      navigate(routes.images())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateImageInput,
    id: EditImageByUuidImage['image']['id']
  ) => {
    updateImage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Image {image?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImageForm
          image={image}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
