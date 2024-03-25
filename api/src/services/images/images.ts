import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import { v4 as uuidv4 } from 'uuid'

import { db } from 'src/lib/db'

import { s3Client } from '../../lib/s3'

// Function to generate a pre-signed URL for uploading an image
export const generateUploadPublicUrl = async (fileName: string) => {
  const params = {
    Bucket: process.env.MINIO_BUCKET_NAME,
    Key: fileName,
  }

  const command = new PutObjectCommand(params)

  const uploadPublicUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 60, // Expires in 60 seconds
  })

  return uploadPublicUrl
}

// Function to get a pre-signed URL for uploading an image
export const getUploadPublicUrl = async ({ fileName }) => {
  // Generate a pre-signed PUT URL for uploading an image
  const uploadPublicUrl = await generateUploadPublicUrl(
    `public/images/${fileName}`
  )
  return uploadPublicUrl
}

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

export const createImage: MutationResolvers['createImage'] = async ({
  input,
}) => {
  // Generate a new UUID for the image
  const imageUuid = uuidv4()

  // Assuming the file name is provided in the input and has a format like 'originalname.jpg'
  const originalFileName = input
  const fileExtension = originalFileName.split('.').pop()
  const newFileName = `${imageUuid}.${fileExtension}`

  // Generate a pre-signed PUT URL for uploading the renamed image
  const uploadPublicUrl = await generateUploadPublicUrl(
    `public/images/${newFileName}`
  )

  // Create the image record in the database with the new UUID and file name
  await db.image.create({
    data: {
      uuidImage: imageUuid,
      imageFileExtension: fileExtension,
      // Other necessary fields go here
      // You might want to store the newFileName or a reference to the file's location
    },
  })

  return {
    uuidImage: imageUuid,
    imageFileExtension: fileExtension,
    imageUploadURL: uploadPublicUrl,
  }
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
