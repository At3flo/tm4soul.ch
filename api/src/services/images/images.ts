import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const images: QueryResolvers['images'] = () => {
  return db.image.findMany()
}

export const imagesByTagsNormalized: QueryResolvers['imagesByTagsNormalized'] =
  ({ tagTitleNormalized }) => {
    return db.image.findMany({
      where: {
        tags: {
          some: {
            tagTitleNormalized: tagTitleNormalized,
          },
        },
      },
      include: {
        tags: true, // Ensure tags are included in the response
      },
    })
  }

export const image: QueryResolvers['image'] = ({ uuidImage }) => {
  return db.image.findUnique({
    where: { uuidImage },
  })
}

export const createImage: MutationResolvers['createImage'] = ({ input }) => {
  return db.image.create({
    data: input,
  })
}

export const updateImage: MutationResolvers['updateImage'] = ({
  uuidImage,
  input,
}) => {
  return db.image.update({
    data: input,
    where: { uuidImage },
  })
}

export const deleteImage: MutationResolvers['deleteImage'] = ({
  uuidImage,
}) => {
  return db.image.delete({
    where: { uuidImage },
  })
}
