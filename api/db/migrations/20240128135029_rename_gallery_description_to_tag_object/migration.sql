/*
  Warnings:

  - You are about to drop the `GalleryDescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "GalleryDescription";

-- CreateTable
CREATE TABLE "Tag" (
    "uuidTag" TEXT NOT NULL,
    "tagTitleNormalized" TEXT NOT NULL,
    "tagTitleWithDiacritics" TEXT,
    "tagDescription" TEXT,
    "tagWeight" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("uuidTag")
);
