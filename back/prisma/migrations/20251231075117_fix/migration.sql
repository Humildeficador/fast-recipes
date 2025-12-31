/*
  Warnings:

  - Added the required column `medicationFormId` to the `Prescription` table without a default value. This is not possible if the table is not empty.

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
    "medicationId" INTEGER,
    "formId" INTEGER,
    CONSTRAINT "Prescription_medicationFormId_fkey" FOREIGN KEY ("medicationFormId") REFERENCES "MedicationForm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescription_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Prescription_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Prescription" ("dosage", "duration", "formId", "frequency", "frequency_unit", "id", "medicationId", "pediatric_calculation", "quantity") SELECT "dosage", "duration", "formId", "frequency", "frequency_unit", "id", "medicationId", "pediatric_calculation", "quantity" FROM "Prescription";
DROP TABLE "Prescription";
ALTER TABLE "new_Prescription" RENAME TO "Prescription";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
