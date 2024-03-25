import type {
  CreateImageMutation,
  CreateImageMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImageForm from 'src/components/Image/ImageForm'

const CREATE_IMAGE_MUTATION: TypedDocumentNode<
  CreateImageMutation,
  CreateImageMutationVariables
> = gql`
  mutation CreateImageMutation($input: String!) {
    createImage(input: $input) {
      uuidImage
      imageFileExtension
      imageUploadURL
    }
  }
`

const NewImage = () => {
  const [createImage, { loading, error }] = useMutation(CREATE_IMAGE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: string, originalFile: File) => {
    createImage({ variables: { input } }).then((data) => {
      // Use the uploadPublicUrl to upload the file to the S3 bucket
      const uploadUrl = data.data.createImage.imageUploadURL

      fetch(uploadUrl, {
        method: 'PUT',
        body: originalFile,
        headers: {
          'Content-Type': originalFile.type, // Set the appropriate content type for the file
        },
      })
        .then((response) => {
          // Handle the response from the file upload
          if (response.ok) {
            toast.success('Image uploaded successfully')
            navigate(routes.images())
          } else {
            toast.error('Failed to upload image')
          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Image</h2>
      </header>
      <div className="rw-segment-main">
        <ImageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}



export default NewImage
