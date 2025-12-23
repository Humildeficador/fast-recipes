-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dosage" TEXT,
    "frequency" TEXT,
    "duration" TEXT,
    "quantity" TEXT
);
INSERT INTO "new_Medication" ("dosage", "duration", "frequency", "id", "name", "quantity") SELECT "dosage", "duration", "frequency", "id", "name", "quantity" FROM "Medication";
DROP TABLE "Medication";
ALTER TABLE "new_Medication" RENAME TO "Medication";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
