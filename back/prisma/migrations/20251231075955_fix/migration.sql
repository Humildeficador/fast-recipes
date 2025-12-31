/*
  Warnings:

  - You are about to drop the column `formId` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `medicationId` on the `Prescription` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "medicationFormId" INTEGER NOT NULL,
    "dosage" JSONB NOT NULL,
    "frequency" JSONB NOT NULL,
    "duration" JSONB NOT NULL,
    "quantity" JSONB NOT NULL,
    "pediatric_calculation" TEXT,
    "frequency_unit" TEXT,
    CONSTRAINT "Prescription_medicationFormId_fkey" FOREIGN KEY ("medicationFormId") REFERENCES "MedicationForm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Prescription" ("dosage", "duration", "frequency", "frequency_unit", "id", "medicationFormId", "pediatric_calculation", "quantity") SELECT "dosage", "duration", "frequency", "frequency_unit", "id", "medicationFormId", "pediatric_calculation", "quantity" FROM "Prescription";
DROP TABLE "Prescription";
ALTER TABLE "new_Prescription" RENAME TO "Prescription";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
