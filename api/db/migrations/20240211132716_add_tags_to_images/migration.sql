-- CreateTable
CREATE TABLE "_ImageToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToTag_AB_unique" ON "_ImageToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToTag_B_index" ON "_ImageToTag"("B");

-- AddForeignKey
ALTER TABLE "_ImageToTag" ADD CONSTRAINT "_ImageToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("uuidImage") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToTag" ADD CONSTRAINT "_ImageToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("uuidTag") ON DELETE CASCADE ON UPDATE CASCADE;
