import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const tags: QueryResolvers['tags'] = () => {
  return db.tag.findMany()
}

export const tag: QueryResolvers['tag'] = ({ uuidTag }) => {
  return db.tag.findUnique({
    where: { uuidTag },
  })
}

export const tagByTitleNormalized: QueryResolvers['tagByTitleNormalized'] = ({
  tagTitleNormalized,
}) => {
  return db.tag.findUnique({
    where: { tagTitleNormalized },
  })
}

export const createTag: MutationResolvers['createTag'] = ({ input }) => {
  return db.tag.create({
    data: input,
  })
}

export const updateTag: MutationResolvers['updateTag'] = ({
  uuidTag,
  input,
}) => {
  return db.tag.update({
    data: input,
    where: { uuidTag },
  })
}

export const deleteTag: MutationResolvers['deleteTag'] = ({ uuidTag }) => {
  return db.tag.delete({
    where: { uuidTag },
  })
}
