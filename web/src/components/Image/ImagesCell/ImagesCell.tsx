import type { FindImages, FindImagesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Images from 'src/components/Image/Images'

export const QUERY: TypedDocumentNode<FindImages, FindImagesVariables> = gql`
  query FindImages {
    images {
      uuidImage
      imageFileExtension
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No images yet. '}
      <Link to={routes.newImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindImages>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  images,
}: CellSuccessProps<FindImages, FindImagesVariables>) => {
  return <Images images={images} />
}
