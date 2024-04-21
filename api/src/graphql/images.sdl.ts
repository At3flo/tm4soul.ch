export const schema = gql`
  type Image {
    uuidImage: String!
    imageFileExtension: String!
    imageUploadURL: String
    tags: [Tag]!
  }

  type Query {
    images: [Image!]! @skipAuth
    image(uuidImage: String!): Image @skipAuth
    imagesByTagsNormalized(tagTitleNormalized: String!): [Image!]! @skipAuth
  }

  input CreateImageInput {
    imageFileExtension: String!
  }

  input UpdateImageInput {
    file: Byte
  }

  type Mutation {
    createImage(inputFilename: String!, tags: [String]): Image! @requireAuth
    updateImage(uuidImage: String!, input: UpdateImageInput!): Image!
      @requireAuth
    deleteImage(uuidImage: String!): Image! @requireAuth
  }
`
