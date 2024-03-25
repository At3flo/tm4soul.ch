// Configure the AWS SDK to use your MinIO instance
import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3'

const s3ClientConfig: S3ClientConfig = {
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY ?? '',
    secretAccessKey: process.env.MINIO_SECRET_KEY ?? '',
  },
  endpoint: process.env.MINIO_S3_ENDPOINT ?? '',
  forcePathStyle: true,
}

const s3Client = new S3Client(s3ClientConfig)

export { s3Client }
