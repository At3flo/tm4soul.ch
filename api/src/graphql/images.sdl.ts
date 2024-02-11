export const schema = gql`
  type Image {
    uuidImage: String!
    file: Byte
    tags: [Tag]!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(uuidImage: String!): Image @requireAuth
    imagesByTagsNormalized(tagTitleNormalized: String!): [Image!]! @requireAuth
  }

  input CreateImageInput {
    file: Byte
  }

  input UpdateImageInput {
    file: Byte
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(uuidImage: String!, input: UpdateImageInput!): Image!
      @requireAuth
    deleteImage(uuidImage: String!): Image! @requireAuth
  }
`
