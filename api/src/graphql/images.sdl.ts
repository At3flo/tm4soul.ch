export const schema = gql`
  type Image {
    uuidImage: String!
    imageFileExtension: String!
    imageUploadURL: String
    tags: [Tag]!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(uuidImage: String!): Image @requireAuth
    imagesByTagsNormalized(tagTitleNormalized: String!): [Image!]! @requireAuth
  }

  input CreateImageInput {
    imageFileExtension: String!
  }

  input UpdateImageInput {
    file: Byte
  }

  type Mutation {
    createImage(input: String!): Image! @requireAuth
    updateImage(uuidImage: String!, input: UpdateImageInput!): Image!
      @requireAuth
    deleteImage(uuidImage: String!): Image! @requireAuth
  }
`
