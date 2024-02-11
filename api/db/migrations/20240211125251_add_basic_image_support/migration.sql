-- CreateTable
CREATE TABLE "Image" (
    "uuidImage" TEXT NOT NULL,
    "file" BYTEA NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("uuidImage")
);
