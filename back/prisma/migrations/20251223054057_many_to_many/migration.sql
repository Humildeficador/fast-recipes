/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Medication` table. All the data in the column will be lost.
  - Made the column `dosage` on table `Medication` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "_CategoryToMedication" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToMedication_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToMedication_B_fkey" FOREIGN KEY ("B") REFERENCES "Medication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT,
    "duration" TEXT,
    "quantity" TEXT
);
INSERT INTO "new_Medication" ("dosage", "duration", "frequency", "id", "name", "quantity") SELECT "dosage", "duration", "frequency", "id", "name", "quantity" FROM "Medication";
DROP TABLE "Medication";
ALTER TABLE "new_Medication" RENAME TO "Medication";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToMedication_AB_unique" ON "_CategoryToMedication"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToMedication_B_index" ON "_CategoryToMedication"("B");
