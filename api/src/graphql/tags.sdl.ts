export const schema = gql`
  type Tag {
    uuidTag: String!
    tagTitleNormalized: String!
    tagTitleWithDiacritics: String
    tagDescription: String
    tagWeight: Int!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(uuidTag: String!): Tag @requireAuth
  }

  input CreateTagInput {
    tagTitleNormalized: String!
    tagTitleWithDiacritics: String
    tagDescription: String
    tagWeight: Int!
  }

  input UpdateTagInput {
    tagTitleNormalized: String
    tagTitleWithDiacritics: String
    tagDescription: String
    tagWeight: Int
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(uuidTag: String!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(uuidTag: String!): Tag! @requireAuth
  }
`
