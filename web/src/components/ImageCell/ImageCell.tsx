import type { FindImageQuery, FindImageQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindImageQuery,
  FindImageQueryVariables
> = gql`
  query FindImageQuery($id: String!) {
    image: image(uuidImage: $id) {
      file
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindImageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  image,
}: CellSuccessProps<FindImageQuery, FindImageQueryVariables>) => {
  // Assuming `image.file` is a Buffer containing PNG data
  const base64Image = Buffer.from(image.file).toString('base64')
  const imageUrl = `data:image/png;base64,${base64Image}`

  return <img src={imageUrl} alt="" />
}
