import type {
  FindImageByUuidImage,
  FindImageByUuidImageVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Image from 'src/components/Image/Image'

export const QUERY: TypedDocumentNode<
  FindImageByUuidImage,
  FindImageByUuidImageVariables
> = gql`
  query FindImageByUuidImage($uuidImage: String!) {
    image: image(uuidImage: $uuidImage) {
      uuidImage
      imageFileExtension
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Image not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindImageByUuidImageVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  image,
}: CellSuccessProps<FindImageByUuidImage, FindImageByUuidImageVariables>) => {
  return <Image image={image} />
}
